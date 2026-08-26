"use client";

import { FormEvent, useState } from "react";

const phoneHint = "10–11 цифр, можно с +7 или 8";

function onlyPhoneDigits(value: string) {
  return value.replace(/\D/g, "");
}

export function CallForm({ page }: { page: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const location = String(data.get("location") || "").trim();
    const company = String(data.get("company") || "");

    const digits = onlyPhoneDigits(phone);
    if (digits.length < 10 || digits.length > 11) {
      setStatus("error");
      setMessage(`Проверьте номер телефона (${phoneHint}).`);
      return;
    }

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, location, company, page }),
      });
      const payload = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !payload.ok) {
        setStatus("error");
        setMessage(payload.error || "Не получилось отправить заявку. Позвоните нам напрямую.");
        return;
      }
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Не получилось отправить заявку. Позвоните 8 992 6666 200.");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-3xl border border-accent/30 bg-accent/10 p-8 text-center">
        <p className="font-display text-2xl text-white">Заявка отправлена!</p>
        <p className="mt-3 text-muted">Мы скоро свяжемся с вами.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="hidden" aria-hidden="true">
        <label>
          Компания
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="grid gap-2 text-sm text-muted">
        Ваше имя
        <input
          name="name"
          required
          minLength={2}
          maxLength={80}
          autoComplete="name"
          placeholder="Иван"
          className="h-12 rounded-2xl border border-white/10 bg-black/40 px-4 text-white placeholder:text-white/30"
        />
      </label>
      <label className="grid gap-2 text-sm text-muted">
        Номер телефона
        <input
          name="phone"
          required
          inputMode="tel"
          autoComplete="tel"
          placeholder="8 992 6666 200"
          className="h-12 rounded-2xl border border-white/10 bg-black/40 px-4 text-white placeholder:text-white/30"
        />
      </label>
      <label className="grid gap-2 text-sm text-muted">
        Откуда забрать автомобиль
        <input
          name="location"
          maxLength={140}
          placeholder="Балашов, улица или ориентир"
          className="h-12 rounded-2xl border border-white/10 bg-black/40 px-4 text-white placeholder:text-white/30"
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="min-h-12 rounded-full bg-accent px-6 py-3.5 font-semibold text-ink transition hover:bg-yellow-300 disabled:opacity-60"
      >
        {status === "sending" ? "Отправляем..." : "Вызвать эвакуатор"}
      </button>
      {status === "error" ? (
        <p className="text-sm text-red-300" role="alert">
          {message}
        </p>
      ) : (
        <p className="text-xs leading-5 text-white/40">
          Нажимая кнопку, вы соглашаетесь, чтобы мы перезвонили по указанному номеру.
        </p>
      )}
    </form>
  );
}
