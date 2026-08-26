import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = "Эвакуатор в Балашове 24/7 — Эвакуатор 64";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#070708",
          color: "#f5f5f4",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
        }}
      >
        <div style={{ display: "flex", color: "#ffc107", fontSize: 28, letterSpacing: 8 }}>
          ЭВАКУАТОР 64
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>Эвакуатор 24/7</div>
          <div style={{ marginTop: 16, fontSize: 32, color: "#a3a3ab" }}>
            Балашов · Саратовская область
          </div>
        </div>
        <div style={{ display: "flex", color: "#ffc107", fontSize: 40, fontWeight: 700 }}>
          {SITE.phoneDisplay}
        </div>
      </div>
    ),
    size,
  );
}
