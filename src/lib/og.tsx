import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export async function generateOGImage(
  title: string,
  description?: string,
) {
  const fontsDir = join(process.cwd(), "src/assets/fonts");
  const [fontBold, fontRegular] = await Promise.all([
    readFile(join(fontsDir, "NotoSansKR-Bold.ttf")),
    readFile(join(fontsDir, "NotoSansKR-Regular.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)",
          fontFamily: "Noto Sans KR",
          position: "relative",
        }}
      >
        {/* Subtle grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
            backgroundSize: "40px 40px",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            padding: "60px 80px",
            position: "relative",
          }}
        >
          {/* Logo */}
          <svg
            width="72"
            height="80"
            viewBox="0 0 162 180"
            fill="none"
          >
            <path
              d="M141.133 1.93774C150.102 -3.44192 161.517 3.01665 161.521 13.4749V166.526C161.517 176.984 150.102 183.442 141.133 178.063L80.7588 141.837L20.3867 178.063C11.4176 183.442 0.00328866 176.984 0 166.526V13.4749C0.00337257 3.01685 11.4176 -3.44137 20.3867 1.93774L80.7598 38.1614L141.133 1.93774ZM121.275 117.524L92.3848 134.864L147.281 167.811C148.277 168.408 149.542 167.685 149.545 166.526V100.567L121.275 117.524ZM14.2393 12.1897C13.2438 11.5924 11.979 12.3152 11.9756 13.4749V86.6125L74.7725 124.29V48.51L14.2393 12.1897Z"
              fill="white"
            />
          </svg>

          {/* Title */}
          <div
            style={{
              fontSize: title.length > 20 ? 48 : 56,
              fontWeight: 700,
              color: "white",
              textAlign: "center",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </div>

          {/* Description */}
          {description && (
            <div
              style={{
                fontSize: 24,
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.7)",
                textAlign: "center",
                lineHeight: 1.5,
                maxWidth: "800px",
              }}
            >
              {description}
            </div>
          )}
        </div>

        {/* Bottom branding bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "24px 48px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <svg
              width="24"
              height="27"
              viewBox="0 0 162 180"
              fill="none"
            >
              <path
                d="M141.133 1.93774C150.102 -3.44192 161.517 3.01665 161.521 13.4749V166.526C161.517 176.984 150.102 183.442 141.133 178.063L80.7588 141.837L20.3867 178.063C11.4176 183.442 0.00328866 176.984 0 166.526V13.4749C0.00337257 3.01685 11.4176 -3.44137 20.3867 1.93774L80.7598 38.1614L141.133 1.93774ZM121.275 117.524L92.3848 134.864L147.281 167.811C148.277 168.408 149.542 167.685 149.545 166.526V100.567L121.275 117.524ZM14.2393 12.1897C13.2438 11.5924 11.979 12.3152 11.9756 13.4749V86.6125L74.7725 124.29V48.51L14.2393 12.1897Z"
                fill="rgba(255, 255, 255, 0.5)"
              />
            </svg>
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "rgba(255, 255, 255, 0.5)",
              }}
            >
              CrossPoint Reader
            </div>
          </div>
          <div
            style={{
              fontSize: 16,
              color: "rgba(255, 255, 255, 0.4)",
            }}
          >
            한국어 펌웨어 가이드
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Noto Sans KR", data: fontBold, style: "normal", weight: 700 },
        { name: "Noto Sans KR", data: fontRegular, style: "normal", weight: 400 },
      ],
    },
  );
}
