import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "WP GraphQL Toolkit - Build headless WordPress faster";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at 75% 10%, rgba(119, 121, 247, 0.42), transparent 42%), #0a0a0a",
          color: "#f1f1f4",
          display: "flex",
          fontFamily: "Arial, sans-serif",
          height: "100%",
          justifyContent: "center",
          padding: "54px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "stretch",
            border: "1px solid #353541",
            borderRadius: "28px",
            boxShadow: "0 30px 90px rgba(0, 0, 0, 0.5)",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            overflow: "hidden",
            padding: "52px 58px",
            width: "100%",
          }}
        >
          <div
            style={{
              color: "#c0c1ff",
              display: "flex",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            The visual workspace for WPGraphQL
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div
              style={{
                display: "flex",
                fontSize: 72,
                fontWeight: 800,
                letterSpacing: "-0.055em",
                lineHeight: 1.04,
                maxWidth: 920,
              }}
            >
              Build WPGraphQL queries visually.
            </div>
            <div
              style={{
                color: "#c0c1ff",
                display: "flex",
                fontSize: 42,
                fontWeight: 700,
                letterSpacing: "-0.035em",
              }}
            >
              Ship Headless WordPress Faster.
            </div>
          </div>

          <div
            style={{
              alignItems: "center",
              borderTop: "1px solid #292929",
              display: "flex",
              justifyContent: "space-between",
              paddingTop: 28,
            }}
          >
            <div style={{ display: "flex", fontSize: 24, fontWeight: 750 }}>
              WP GraphQL Toolkit
            </div>
            <div style={{ color: "#aaaab7", display: "flex", fontSize: 20 }}>
              Build · Preview · Save · Export
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
