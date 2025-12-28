import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import type { Metadata } from "next";
import { getAssetPath } from "@/lib/basePath";

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

export default function GuidePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900">사용자 가이드</h1>
            <p className="mt-4 text-lg text-gray-600">
              CrossPoint Reader의 기본 사용 방법을 안내합니다.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-blue max-w-none">
              {/* Hardware Overview */}
              <div className="rounded-2xl border border-gray-200 bg-white p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  1. 하드웨어 개요
                </h2>

                <div className="mb-8">
                  <Image
                    src={getAssetPath("/device-overview.png")}
                    alt="Xteink X4 하드웨어 개요"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
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
                          전원, 이전, 다음
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Power */}
              <div className="rounded-2xl border border-gray-200 bg-white p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  2. 전원 및 시작
                </h2>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  전원 켜기/끄기
                </h3>
                <p className="text-gray-600 mb-4">
                  기기를 켜거나 끄려면 <strong>전원 버튼을 0.5초 이상</strong>{" "}
                  누르세요.
                </p>
                <p className="text-gray-600 mb-6">
                  <strong>설정</strong>에서 짧은 클릭으로 전원 버튼이 작동하도록
                  변경할 수 있습니다.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  첫 실행
                </h3>
                <p className="text-gray-600 mb-4">
                  기기를 처음 켜면 <strong>홈 화면</strong>이 표시됩니다.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    <strong>참고:</strong> 이후 재시작 시에는 마지막으로 읽던
                    책이 자동으로 열립니다.
                  </p>
                </div>
              </div>

              {/* Screens */}
              <div className="rounded-2xl border border-gray-200 bg-white p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  3. 화면 구성
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      3.1 홈 화면
                    </h3>
                    <p className="text-gray-600">
                      펌웨어의 메인 진입점입니다. 여기서{" "}
                      <strong>책 선택</strong>, <strong>설정</strong>,{" "}
                      <strong>파일 업로드</strong> 화면으로 이동할 수 있습니다.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      3.2 책 선택 (읽기)
                    </h3>
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

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      3.3 읽기 화면
                    </h3>
                    <p className="text-gray-600">
                      자세한 내용은 아래 <strong>읽기 모드</strong> 섹션을
                      참조하세요.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      3.4 파일 업로드 화면
                    </h3>
                    <p className="text-gray-600">
                      새 전자책을 기기에 업로드할 수 있습니다. 화면에 들어가면
                      WiFi 선택 대화상자가 표시되고, X4가 웹 서버를 호스팅하기
                      시작합니다.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      3.5 설정
                    </h3>
                    <p className="text-gray-600 mb-2">
                      기기 동작을 설정할 수 있습니다:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>
                        <strong>슬립 화면:</strong> Dark, Light, Custom, Cover
                        중 선택
                      </li>
                      <li>
                        <strong>단락 간격 추가:</strong> 켜면 단락 사이에 공백
                        추가
                      </li>
                      <li>
                        <strong>전원 버튼 짧게 클릭:</strong> 짧은 클릭으로 전원
                        켜기/끄기
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      3.6 슬립 화면 커스터마이징
                    </h3>
                    <p className="text-gray-600 mb-2">
                      SD 카드에 커스텀 이미지를 배치하여 슬립 화면을 변경할 수
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
                        폴더를 만들고 .bmp 이미지 배치
                      </li>
                    </ul>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                      <p className="text-blue-800 text-sm">
                        <strong>팁:</strong> 최상의 결과를 위해 24비트 색상의
                        비압축 BMP 파일과 480x800 픽셀 해상도를 사용하세요.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reading Mode */}
              <div className="rounded-2xl border border-gray-200 bg-white p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  4. 읽기 모드
                </h2>

                <p className="text-gray-600 mb-6">
                  책을 열면 버튼 배치가 읽기에 맞게 변경됩니다.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
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

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
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

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  시스템 탐색
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    <strong>홈으로 돌아가기:</strong> 뒤로 버튼을 눌러 책을 닫고
                    책 선택 화면으로 이동
                  </li>
                  <li>
                    <strong>챕터 메뉴:</strong> 확인 버튼을 눌러 목차/챕터 선택
                    화면 열기
                  </li>
                </ul>
              </div>

              {/* Chapter Selection */}
              <div className="rounded-2xl border border-gray-200 bg-white p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  5. 챕터 선택 화면
                </h2>

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
              <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  6. 현재 제한사항 및 로드맵
                </h2>

                <p className="text-gray-600 mb-4">
                  이 펌웨어는 현재 활발히 개발 중입니다. 다음 기능들은{" "}
                  <strong>아직 지원되지 않지만</strong> 향후 업데이트에서 추가될
                  예정입니다:
                </p>

                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    <strong>이미지:</strong> 전자책 내 임베디드 이미지가
                    렌더링되지 않습니다
                  </li>
                  <li>
                    <strong>텍스트 포맷팅:</strong> 폰트 종류, 크기, 줄 간격,
                    여백 조정 설정이 없습니다
                  </li>
                  <li>
                    <strong>회전:</strong> 다양한 화면 회전 옵션을 지원하지
                    않습니다
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
