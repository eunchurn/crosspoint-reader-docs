"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { getAssetPath } from "@/lib/basePath";
import { useEffect } from "react";
import Link from "next/link";

// Section Link Component
function SectionLink({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={`#${id}`}
      className={`group flex items-center gap-2 hover:text-blue-600 transition-colors ${className}`}
      onClick={(e) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", `#${id}`);
        }
      }}
    >
      {children}
      <svg
        className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
        />
      </svg>
    </a>
  );
}

export default function GuidePage() {
  // Handle hash on page load
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900">사용자 가이드</h1>
            <p className="mt-4 text-lg text-gray-600">
              CrossPoint Reader 한국어 버전의 기본 사용 방법입니다.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-blue max-w-none prose-a:no-underline">
              {/* Hardware Overview */}
              <div
                id="hardware"
                className="rounded-2xl border border-gray-200 bg-white p-8 mb-8 scroll-mt-24"
              >
                <SectionLink
                  id="hardware"
                  className="text-2xl font-bold text-gray-900 mb-6"
                >
                  1. 하드웨어 개요
                </SectionLink>

                <div className="mb-8">
                  <Image
                    src={getAssetPath("/device-overview.png")}
                    alt="Xteink X4 하드웨어 개요"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                <h3
                  id="buttons"
                  className="text-xl font-semibold text-gray-800 mb-4 scroll-mt-24"
                >
                  버튼 배치
                </h3>

                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                          위치
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                          버튼
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">
                          <strong>하단</strong>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">
                          뒤로, 확인, 왼쪽, 오른쪽
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          <strong>우측면</strong>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          전원, 볼륨 업, 볼륨 다운, 리셋
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-600 mt-4 text-sm">
                  버튼 배치는{" "}
                  <Link
                    href="#settings"
                    className="text-blue-600 hover:text-blue-800"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("settings")
                        ?.scrollIntoView({ behavior: "smooth" });
                      window.history.pushState(null, "", "#settings");
                    }}
                  >
                    설정
                  </Link>
                  에서 커스터마이징할 수 있습니다.
                </p>
              </div>

              {/* Power */}
              <div
                id="power"
                className="rounded-2xl border border-gray-200 bg-white p-8 mb-8 scroll-mt-24"
              >
                <SectionLink
                  id="power"
                  className="text-2xl font-bold text-gray-900 mb-6"
                >
                  2. 전원 및 시작
                </SectionLink>

                <h3
                  id="power-on-off"
                  className="text-xl font-semibold text-gray-800 mb-4 scroll-mt-24"
                >
                  전원 켜기/끄기
                </h3>
                <p className="text-gray-600 mb-4">
                  기기를 켜거나 끄려면 <strong>전원 버튼을 0.5초 이상</strong>{" "}
                  누르세요.
                </p>
                <p className="text-gray-600 mb-4">
                  <Link
                    href="#settings"
                    className="text-blue-600 hover:text-blue-800"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("settings")
                        ?.scrollIntoView({ behavior: "smooth" });
                      window.history.pushState(null, "", "#settings");
                    }}
                  >
                    설정
                  </Link>
                  에서 짧은 클릭으로 전원 버튼이 작동하도록 변경할 수 있습니다.
                </p>
                <p className="text-gray-600 mb-6">
                  기기를 재부팅하려면 (예: 펌웨어 업데이트 후 또는 기기가 멈춘
                  경우) 리셋 버튼을 눌렀다 떼고, 전원 버튼을 몇 초간 누르세요.
                </p>

                <h3
                  id="first-launch"
                  className="text-xl font-semibold text-gray-800 mb-4 scroll-mt-24"
                >
                  첫 실행
                </h3>
                <p className="text-gray-600 mb-4">
                  기기를 처음 켜면{" "}
                  <Link
                    href="#home"
                    className="text-blue-600 hover:text-blue-800"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("home")
                        ?.scrollIntoView({ behavior: "smooth" });
                      window.history.pushState(null, "", "#home");
                    }}
                  >
                    홈 화면
                  </Link>
                  이 표시됩니다.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    <strong>참고:</strong> 이후 재시작 시에는 마지막으로 읽던
                    책이 자동으로 열립니다.
                  </p>
                </div>
              </div>

              {/* Screens */}
              <div
                id="screens"
                className="rounded-2xl border border-gray-200 bg-white p-8 mb-8 scroll-mt-24"
              >
                <SectionLink
                  id="screens"
                  className="text-2xl font-bold text-gray-900 mb-6"
                >
                  3. 화면 구성
                </SectionLink>

                <div className="space-y-6">
                  <div id="home" className="scroll-mt-24">
                    <SectionLink
                      id="home"
                      className="text-xl font-semibold text-gray-800 mb-2"
                    >
                      3.1 홈 화면
                    </SectionLink>
                    <p className="text-gray-600">
                      펌웨어의 메인 진입점입니다. 여기서{" "}
                      <strong>읽기 계속</strong>, <strong>파일 탐색기</strong>,{" "}
                      <strong>파일 전송</strong>, <strong>설정</strong> 화면으로
                      이동할 수 있습니다.
                    </p>
                  </div>

                  <div id="file-explorer" className="scroll-mt-24">
                    <SectionLink
                      id="file-explorer"
                      className="text-xl font-semibold text-gray-800 mb-2"
                    >
                      3.2 파일 탐색기
                    </SectionLink>
                    <p className="text-gray-600 mb-2">
                      폴더 및 파일 브라우저 역할을 합니다.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>
                        <strong>목록 탐색:</strong> 왼쪽/오른쪽 (또는 볼륨
                        업/다운) 버튼으로 이동
                      </li>
                      <li>
                        <strong>선택 열기:</strong> 확인 버튼으로 폴더 열기 또는
                        책 읽기
                      </li>
                    </ul>
                  </div>

                  <div id="reading-screen" className="scroll-mt-24">
                    <SectionLink
                      id="reading-screen"
                      className="text-xl font-semibold text-gray-800 mb-2"
                    >
                      3.3 읽기 화면
                    </SectionLink>
                    <p className="text-gray-600">
                      자세한 내용은 아래{" "}
                      <Link
                        href="#reading"
                        className="text-blue-600 hover:text-blue-800"
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById("reading")
                            ?.scrollIntoView({ behavior: "smooth" });
                          window.history.pushState(null, "", "#reading");
                        }}
                      >
                        읽기 모드
                      </Link>{" "}
                      섹션을 참조하세요.
                    </p>
                  </div>

                  <div id="file-upload" className="scroll-mt-24">
                    <SectionLink
                      id="file-upload"
                      className="text-xl font-semibold text-gray-800 mb-2"
                    >
                      3.4 파일 업로드 화면
                    </SectionLink>
                    <p className="text-gray-600">
                      새 전자책을 기기에 업로드할 수 있습니다. 화면에 들어가면
                      WiFi 선택 대화상자가 표시되고, X4가 웹 서버를 호스팅하기
                      시작합니다.
                    </p>
                  </div>

                  <div id="settings" className="scroll-mt-24">
                    <SectionLink
                      id="settings"
                      className="text-xl font-semibold text-gray-800 mb-2"
                    >
                      3.5 설정
                    </SectionLink>
                    <p className="text-gray-600 mb-2">
                      기기 동작을 설정할 수 있습니다:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>
                        <strong>절전 화면 이미지:</strong> 다크(기본값), 라이트,
                        사용자 정의, 커버, 없음 중 선택
                      </li>
                      <li>
                        <strong>절전 화면 커버 모드:</strong> 자르기, 맞춤 중
                        선택
                      </li>
                      <li>
                        <strong>상태 표시줄:</strong> 없음, 진행 없음, 전체 중
                        선택
                      </li>
                      <li>
                        <strong>배터리 % 숨기기:</strong> 안 함, 리더에서, 항상
                        중 선택
                      </li>
                      <li>
                        <strong>문단 간격 추가:</strong> 켜면 단락 사이에 공백
                        추가, 끄면 첫 줄 들여쓰기
                      </li>
                      <li>
                        <strong>텍스트 안티엘리어싱:</strong> ON/OFF 선택
                      </li>
                      <li>
                        <strong>전원 버튼 짧게 누르기:</strong> 무시, 절전,
                        페이지 넘기기 선택
                      </li>
                      <li>
                        <strong>읽기 방향:</strong> 세로 (기본값), 가로
                        시계방향, 반전, 가로 반시계방향 중 선택
                      </li>
                      <li>
                        <strong>앞면 버튼 레이아웃:</strong> 세 가지 배치 옵션
                        중 선택
                      </li>
                      <li>
                        <strong>측면 버튼 레이아웃:</strong> 볼륨 버튼의
                        이전/다음 순서 변경 (읽기 시에만 적용)
                      </li>
                      <li>
                        <strong>길게 누르면 챕터 건너뛰기:</strong> ON/OFF 선택
                      </li>
                      <li>
                        <strong>줄 간격:</strong> 좁게, 보통, 넓게 중 선택
                      </li>
                      <li>
                        <strong>화면 여백:</strong> 5, 10, 15,...,40 중 선택
                      </li>
                      <li>
                        <strong>문단 정렬:</strong> 양쪽 정렬(기본값), 왼쪽,
                        가운데, 오른쪽 중 선택
                      </li>
                      <li>
                        <strong>절전 시간:</strong> 비활성 상태 후 자동 슬립까지
                        시간 설정
                      </li>
                      <li>
                        <strong>새로고침 주기:</strong> 고스팅 감소를 위한 전체
                        새로고침 주기 설정
                      </li>
                      <li>
                        <strong>글꼴 설정:</strong> EPUB/TXT 리더에서 사용할
                        커스텀 폰트 선택 (자세한 내용은{" "}
                        <Link
                          href="#custom-font"
                          className="text-blue-600 hover:text-blue-800"
                          onClick={(e) => {
                            e.preventDefault();
                            document
                              .getElementById("custom-font")
                              ?.scrollIntoView({ behavior: "smooth" });
                            window.history.pushState(null, "", "#custom-font");
                          }}
                        >
                          커스텀 폰트
                        </Link>{" "}
                        섹션 참조)
                      </li>
                      <li>
                        <strong>Calibre 설정:</strong> Calibre Web 서버와의 통합
                        설정
                      </li>
                      <li>
                        <strong>업데이트 확인:</strong> WiFi를 통해 펌웨어
                        업데이트 확인
                      </li>
                    </ul>
                  </div>

                  <div id="sleep-screen" className="scroll-mt-24">
                    <SectionLink
                      id="sleep-screen"
                      className="text-xl font-semibold text-gray-800 mb-2"
                    >
                      3.6 절전 화면 커스터마이징
                    </SectionLink>
                    <p className="text-gray-600 mb-2">
                      SD 카드에 커스텀 이미지를 배치하여 절전 화면을 변경할 수
                      있습니다:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>
                        <strong>단일 이미지:</strong> 루트 디렉토리에{" "}
                        <code className="bg-gray-100 px-1 rounded">
                          sleep.bmp
                        </code>{" "}
                        파일 배치
                      </li>
                      <li>
                        <strong>여러 이미지:</strong> 루트에{" "}
                        <code className="bg-gray-100 px-1 rounded">sleep</code>{" "}
                        폴더를 만들고{" "}
                        <code className="bg-gray-100 px-1 rounded">.bmp</code>{" "}
                        이미지 배치. 이 폴더에 이미지가 있으면{" "}
                        <code className="bg-gray-100 px-1 rounded">
                          sleep.bmp
                        </code>{" "}
                        파일보다 우선하며, 절전 시마다 무작위로 하나가
                        선택됩니다.
                      </li>
                    </ul>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                      <p className="text-yellow-800 text-sm">
                        <strong>참고:</strong> 이 이미지를 사용하려면{" "}
                        <Link
                          href="#settings"
                          className="text-blue-600 hover:text-blue-800"
                          onClick={(e) => {
                            e.preventDefault();
                            document
                              .getElementById("settings")
                              ?.scrollIntoView({ behavior: "smooth" });
                            window.history.pushState(null, "", "#settings");
                          }}
                        >
                          설정
                        </Link>
                        에서 <strong>절전 화면 이미지</strong>를{" "}
                        <strong>사용자 정의</strong>로 설정해야 합니다.
                      </p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                      <p className="text-blue-800 text-sm">
                        <strong>팁:</strong> 최상의 결과를 위해 24비트 색상의
                        비압축 BMP 파일과 480x800 픽셀 해상도를 사용하세요.{" "}
                        <a
                          href="https://wallpaperconverter.jakegreen.dev/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          X4 Wallpaper Converter
                        </a>
                        를 사용하면 이미지를 적합한 형식으로 쉽게 변환할 수
                        있습니다.
                      </p>
                    </div>
                  </div>

                  <div id="custom-font" className="scroll-mt-24">
                    <SectionLink
                      id="custom-font"
                      className="text-xl font-semibold text-gray-800 mb-2"
                    >
                      3.7 커스텀 폰트
                    </SectionLink>
                    <p className="text-gray-600 mb-4">
                      EPUB/TXT 리더에서 사용자 정의 폰트를 사용할 수 있습니다.
                      폰트 변경 시 재부팅 없이 즉시 적용되며, 현재 읽고 있던
                      위치도 그대로 유지됩니다. 단, 폰트 변경 시 기존 렌더링
                      캐시가 비활성화되고 인덱싱이 다시 수행됩니다.
                    </p>

                    <h4 className="text-lg font-medium text-gray-700 mb-2">
                      폰트 파일 준비
                    </h4>
                    <ol className="list-decimal list-inside text-gray-600 space-y-1 mb-4">
                      <li>
                        <a
                          href="https://xteink.lakafior.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          XTEink-Web-Font-Maker
                        </a>
                        를 사용하여{" "}
                        <code className="bg-gray-100 px-1 rounded">.bin</code>{" "}
                        폰트 파일을 생성합니다.
                      </li>
                      <li>
                        SD 카드의{" "}
                        <code className="bg-gray-100 px-1 rounded">
                          /.crosspoint/fonts/
                        </code>{" "}
                        폴더에 폰트 파일을 복사합니다.
                      </li>
                    </ol>

                    <h4 className="text-lg font-medium text-gray-700 mb-2">
                      폰트 적용
                    </h4>
                    <ol className="list-decimal list-inside text-gray-600 space-y-1 mb-4">
                      <li>
                        <Link
                          href="#settings"
                          className="text-blue-600 hover:text-blue-800"
                          onClick={(e) => {
                            e.preventDefault();
                            document
                              .getElementById("settings")
                              ?.scrollIntoView({ behavior: "smooth" });
                            window.history.pushState(null, "", "#settings");
                          }}
                        >
                          설정
                        </Link>{" "}
                        &gt; <strong>글꼴 설정</strong>으로 이동합니다.
                      </li>
                      <li>목록에서 원하는 폰트를 선택합니다.</li>
                      <li>선택한 폰트가 EPUB/TXT 리더에 즉시 적용됩니다.</li>
                    </ol>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                      <p className="text-blue-800 text-sm">
                        <strong>참고:</strong> 기본 폰트는{" "}
                        <strong>을유1945</strong>로, 한국어 읽기에 최적화되어
                        있습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reading Mode */}
              <div
                id="reading"
                className="rounded-2xl border border-gray-200 bg-white p-8 mb-8 scroll-mt-24"
              >
                <SectionLink
                  id="reading"
                  className="text-2xl font-bold text-gray-900 mb-6"
                >
                  4. 읽기 모드
                </SectionLink>

                <p className="text-gray-600 mb-6">
                  책을 열면 버튼 배치가 읽기에 맞게 변경됩니다.
                </p>

                <h3
                  id="page-turning"
                  className="text-xl font-semibold text-gray-800 mb-4 scroll-mt-24"
                >
                  페이지 넘기기
                </h3>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                          동작
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                          버튼
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">
                          <strong>이전 페이지</strong>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">
                          왼쪽 <em>또는</em> 이전
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          <strong>다음 페이지</strong>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          오른쪽 <em>또는</em> 다음
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-600 text-sm mt-2">
                  측면 (볼륨) 버튼의 역할은{" "}
                  <Link
                    href="#settings"
                    className="text-blue-600 hover:text-blue-800"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("settings")
                        ?.scrollIntoView({ behavior: "smooth" });
                      window.history.pushState(null, "", "#settings");
                    }}
                  >
                    설정
                  </Link>
                  에서 바꿀 수 있습니다.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <p className="text-blue-800 text-sm">
                    <strong>팁:</strong>{" "}
                    <Link
                      href="#settings"
                      className="text-blue-600 hover:text-blue-800"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("settings")
                          ?.scrollIntoView({ behavior: "smooth" });
                        window.history.pushState(null, "", "#settings");
                      }}
                    >
                      설정
                    </Link>{" "}
                    &gt; <strong>전원 버튼 짧게 누르기</strong>를{" "}
                    <strong>페이지 넘기기</strong>로 설정하면 전원 버튼으로도
                    페이지를 넘길 수 있습니다.
                  </p>
                </div>

                <h3
                  id="chapter-nav"
                  className="text-xl font-semibold text-gray-800 mb-4 mt-6 scroll-mt-24"
                >
                  챕터 탐색
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>
                    <strong>다음 챕터:</strong> 오른쪽 (또는 다음) 버튼을{" "}
                    <strong>길게 누른 후</strong> 놓기
                  </li>
                  <li>
                    <strong>이전 챕터:</strong> 왼쪽 (또는 이전) 버튼을{" "}
                    <strong>길게 누른 후</strong> 놓기
                  </li>
                </ul>

                <h3
                  id="system-nav"
                  className="text-xl font-semibold text-gray-800 mb-4 scroll-mt-24"
                >
                  시스템 탐색
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    <strong>책 선택으로 돌아가기:</strong> 뒤로 버튼을 눌러 책을
                    닫고 책 선택 화면으로 이동
                  </li>
                  <li>
                    <strong>홈으로 돌아가기:</strong> 뒤로 버튼을{" "}
                    <strong>길게 눌러</strong> 책을 닫고 홈 화면으로 이동
                  </li>
                  <li>
                    <strong>챕터 메뉴:</strong> 확인 버튼을 눌러{" "}
                    <Link
                      href="#chapter"
                      className="text-blue-600 hover:text-blue-800"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("chapter")
                          ?.scrollIntoView({ behavior: "smooth" });
                        window.history.pushState(null, "", "#chapter");
                      }}
                    >
                      목차/챕터 선택 화면
                    </Link>{" "}
                    열기
                  </li>
                </ul>
              </div>

              {/* Chapter Selection */}
              <div
                id="chapter"
                className="rounded-2xl border border-gray-200 bg-white p-8 mb-8 scroll-mt-24"
              >
                <SectionLink
                  id="chapter"
                  className="text-2xl font-bold text-gray-900 mb-6"
                >
                  5. 챕터 선택 화면
                </SectionLink>

                <p className="text-gray-600 mb-4">
                  책 안에서 <strong>확인</strong> 버튼을 누르면 접근할 수
                  있습니다.
                </p>

                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li>왼쪽/오른쪽 (또는 이전/다운)으로 원하는 챕터 선택</li>
                  <li>
                    <strong>확인</strong>을 눌러 해당 챕터로 이동
                  </li>
                  <li>
                    <em>
                      또는 <strong>뒤로</strong>를 눌러 취소하고 현재 페이지로
                      돌아가기
                    </em>
                  </li>
                </ol>
              </div>

              {/* Limitations */}
              <div
                id="limitations"
                className="rounded-2xl border border-yellow-200 bg-yellow-50 p-8 scroll-mt-24"
              >
                <SectionLink
                  id="limitations"
                  className="text-2xl font-bold text-gray-900 mb-6"
                >
                  6. 현재 제한사항 및 로드맵
                </SectionLink>

                <p className="text-gray-600 mb-4">
                  이 펌웨어는 현재 활발히 개발 중입니다. 다음 기능은{" "}
                  <strong>아직 지원되지 않지만</strong> 향후 업데이트에서 추가될
                  예정입니다:
                </p>

                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    <strong>이미지:</strong> 전자책 내 임베디드 이미지가
                    렌더링되지 않습니다
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
