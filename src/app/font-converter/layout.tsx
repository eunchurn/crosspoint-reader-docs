import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "폰트 변환기 | CrossPoint Reader",
  description:
    "TTF/OTF 폰트를 CrossPoint Reader용 EPDFont 형식으로 변환합니다. 다양한 유니코드 범위를 지원하며 실시간 미리보기 기능을 제공합니다.",
};

export default function FontConverterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
