import { NextRequest, NextResponse } from "next/server";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();

function clientIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function allow(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(ip, recent);
    return false;
  }
  recent.push(now);
  hits.set(ip, recent);
  return true;
}

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

function formatPhone(phone: string) {
  const digits = digitsOnly(phone);
  const national = digits.length === 11 ? digits.slice(1) : digits;
  if (national.length !== 10) return phone;
  return `+7 ${national.slice(0, 3)} ${national.slice(3, 6)} ${national.slice(6, 8)} ${national.slice(8)}`;
}

function validPhone(phone: string) {
  const digits = digitsOnly(phone);
  if (digits.length === 11 && (digits.startsWith("7") || digits.startsWith("8"))) return true;
  return digits.length === 10;
}

export async function POST(request: NextRequest) {
  try {
    const ip = clientIp(request);
    if (!allow(ip)) {
      return NextResponse.json(
        { ok: false, error: "Слишком много заявок. Позвоните 8 992 6666 200." },
        { status: 429 },
      );
    }

    const body = (await request.json()) as Record<string, unknown>;
    if (String(body.company ?? "").trim() || String(body.website ?? "").trim()) {
      return NextResponse.json({ ok: true });
    }

    const name = String(body.name ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const location = String(body.location ?? body.address ?? "").trim();
    const page = String(body.page ?? "Сайт").trim() || "Сайт";

    if (name.length < 2 || name.length > 80) {
      return NextResponse.json({ ok: false, error: "Укажите имя." }, { status: 400 });
    }
    if (!validPhone(phone)) {
      return NextResponse.json(
        { ok: false, error: "Проверьте номер телефона." },
        { status: 400 },
      );
    }
    if (location.length > 200) {
      return NextResponse.json({ ok: false, error: "Слишком длинный адрес." }, { status: 400 });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) {
      return NextResponse.json(
        { ok: false, error: "Заявка временно не принимается. Позвоните 8 992 6666 200." },
        { status: 503 },
      );
    }

    const time = new Intl.DateTimeFormat("ru-RU", {
      timeZone: "Europe/Saratov",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date());

    const text = [
      "🚨 НОВАЯ ЗАЯВКА С САЙТА",
      "",
      `👤 Имя: ${name}`,
      `📞 Телефон: ${formatPhone(phone)}`,
      `📍 Адрес: ${location || "не указан"}`,
      `🌐 Страница: ${page}`,
      `🕒 Время: ${time}`,
    ].join("\n");

    const telegram = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    if (!telegram.ok) {
      return NextResponse.json(
        { ok: false, error: "Не удалось отправить заявку. Позвоните 8 992 6666 200." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Не удалось отправить заявку. Позвоните 8 992 6666 200." },
      { status: 500 },
    );
  }
}
