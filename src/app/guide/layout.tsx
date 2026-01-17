import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "사용자 가이드",
  description:
    "CrossPoint Reader 사용 방법을 안내합니다. 버튼 조작, 파일 관리, 읽기 모드, 웹 서버 등 모든 기능을 상세히 설명합니다.",
  openGraph: {
    title: "사용자 가이드 | CrossPoint Reader",
    description:
      "CrossPoint Reader 사용 방법을 안내합니다. 버튼 조작, 파일 관리, 읽기 모드 등을 설명합니다.",
  },
};

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
