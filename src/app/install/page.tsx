import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import {
  CROSSPOINT_VERSION,
  getFirmwareFilename,
  getFirmwareDownloadUrl,
} from "@/constants/version";

export const metadata: Metadata = {
  title: "설치 가이드",
  description:
    "Xteink X4에 CrossPoint Reader 한국어 펌웨어를 설치하는 방법을 안내합니다. 웹 플래셔 또는 esptool을 사용한 설치 방법을 제공합니다.",
  openGraph: {
    title: "설치 가이드 | CrossPoint Reader",
    description:
      "Xteink X4에 CrossPoint Reader 한국어 펌웨어를 설치하는 방법을 안내합니다.",
  },
};

export default function InstallPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              현재 버전: v{CROSSPOINT_VERSION}
            </div>
            <h1 className="text-4xl font-bold text-gray-900">설치 가이드</h1>
            <p className="mt-4 text-lg text-gray-600">
              CrossPoint Reader 한국어 펌웨어를 Xteink X4에 설치하는 방법을
              안내합니다.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-blue max-w-none">
              {/* Method 1: Web Flash */}
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8 mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                    추천
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 m-0">
                    방법 1: 웹 플래셔 사용 (권장)
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  가장 쉽고 빠른 방법입니다. 웹 브라우저에서 바로 펌웨어를 설치할
                  수 있습니다.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 m-0">
                        USB 연결
                      </h3>
                      <p className="text-gray-600 mt-1">
                        Xteink X4를 USB-C 케이블로 컴퓨터에 연결합니다.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 m-0">
                        펌웨어 다운로드
                      </h3>
                      <p className="text-gray-600 mt-1">
                        GitHub 릴리즈 페이지에서{" "}
                        <code className="bg-gray-200 px-2 py-1 rounded text-sm">
                          {getFirmwareFilename()}
                        </code>{" "}
                        파일을 다운로드합니다.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 mt-3">
                        <a
                          href={getFirmwareDownloadUrl()}
                          className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
                        >
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                            />
                          </svg>
                          펌웨어 다운로드
                        </a>
                        <a
                          href="https://github.com/eunchurn/crosspoint-reader-ko/releases"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          릴리즈 페이지 열기
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 m-0">
                        웹 플래셔 접속
                      </h3>
                      <p className="text-gray-600 mt-1">
                        웹 플래셔 사이트에 접속합니다.
                      </p>
                      <a
                        href="https://xteink.dve.al/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-2 text-blue-600 hover:text-blue-700"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                        xteink.dve.al 열기
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 m-0">
                        OTA 플래시
                      </h3>
                      <p className="text-gray-600 mt-1">
                        <strong>OTA fast flash controls</strong> 섹션에서:
                      </p>
                      <ol className="list-decimal list-inside text-gray-600 mt-2 space-y-1">
                        <li>
                          <strong>Select File</strong> 버튼을 클릭하여 다운로드한
                          .bin 파일을 선택
                        </li>
                        <li>
                          <strong>Flash firmware from file</strong> 버튼을
                          클릭하여 플래시 시작
                        </li>
                      </ol>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 m-0">
                        펌웨어 적용
                      </h3>
                      <p className="text-gray-600 mt-1">
                        플래시가 완료되면:
                      </p>
                      <ol className="list-decimal list-inside text-gray-600 mt-2 space-y-1">
                        <li>
                          기기의 <strong>reset</strong> 버튼을 한 번 누릅니다
                        </li>
                        <li>
                          <strong>전원 버튼</strong>을 1초 이상 눌러 부팅합니다
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              {/* Method 2: esptool */}
              <div className="rounded-2xl border border-gray-200 bg-white p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  방법 2: esptool 사용 (고급)
                </h2>
                <p className="text-gray-600 mb-6">
                  명령줄 도구를 사용하여 직접 펌웨어를 플래시하는 방법입니다.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      1. esptool 설치
                    </h3>
                    <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 mt-2 overflow-x-auto">
                      <code>pip install esptool</code>
                    </pre>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      2. 펌웨어 플래시
                    </h3>
                    <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 mt-2 overflow-x-auto">
                      <code>
                        esptool.py --chip esp32c3 write_flash 0x0 {getFirmwareFilename()}
                      </code>
                    </pre>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <svg
                        className="h-6 w-6 text-yellow-600 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-yellow-800">
                          주의사항
                        </h4>
                        <p className="text-yellow-700 text-sm mt-1">
                          플래시 중 USB 케이블을 분리하지 마세요. 기기가 손상될
                          수 있습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reverting */}
              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  원래 펌웨어로 복원
                </h2>
                <p className="text-gray-600 mb-6">
                  원래 Xteink 공식 펌웨어로 되돌리려면 다음 방법 중 하나를
                  사용하세요:
                </p>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900">방법 1</h3>
                    <p className="text-gray-600 mt-1">
                      <a
                        href="https://xteink.dve.al/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        xteink.dve.al
                      </a>
                      에서 공식 펌웨어를 플래시합니다.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900">방법 2</h3>
                    <p className="text-gray-600 mt-1">
                      <a
                        href="https://xteink.dve.al/debug"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        xteink.dve.al/debug
                      </a>
                      에서 &quot;Swap boot partition&quot; 버튼을 사용하여 이전
                      파티션으로 부팅합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
