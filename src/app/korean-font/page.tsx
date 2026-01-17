import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "한글 폰트 정보",
  description:
    "CrossPoint Reader 한국어 버전에 내장된 Pretendard 한글 폰트 정보와 라이선스를 안내합니다.",
  openGraph: {
    title: "한글 폰트 정보 | CrossPoint Reader",
    description:
      "CrossPoint Reader 한국어 버전에 내장된 Pretendard 한글 폰트 정보를 안내합니다.",
  },
};

export default function KoreanFontPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900">한글 폰트 정보</h1>
            <p className="mt-4 text-lg text-gray-600">
              CrossPoint Reader 한국어 버전에 적용된 폰트 정보와 기술적 세부
              사항을 안내합니다.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-blue max-w-none">
              {/* Overview */}
              <div className="rounded-2xl border border-gray-200 bg-white p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">개요</h2>
                <p className="text-gray-600 mb-4">
                  한글 지원을 위해 다음 폰트들을 적용했습니다:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    <strong>EPUB 리더:</strong> 을유1945 (Eulyoo1945) -
                    한글/영문/한자 지원
                  </li>
                  <li>
                    <strong>UI/시스템:</strong> Pretendard - 한글/영문 지원
                  </li>
                </ul>
              </div>

              {/* Applied Fonts */}
              <div className="rounded-2xl border border-gray-200 bg-white p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  적용된 폰트
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                          용도
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                          폰트
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                          스타일
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                          사이즈
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                          헤더 파일
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">
                          EPUB 리더
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">
                          Eulyoo1945
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">
                          Regular
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">
                          14
                        </td>
                        <td className="px-4 py-3 text-sm border-b">
                          <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                            eulyoo_2b.h
                          </code>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">
                          EPUB 리더
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">
                          Eulyoo1945
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">
                          SemiBold
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">
                          14
                        </td>
                        <td className="px-4 py-3 text-sm border-b">
                          <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                            eulyoo_semibold_2b.h
                          </code>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">
                          UI
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">
                          Pretendard
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">
                          Regular
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">
                          8
                        </td>
                        <td className="px-4 py-3 text-sm border-b">
                          <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                            pretendard_8.h
                          </code>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          Small
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          Pretendard
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">
                          Regular
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">8</td>
                        <td className="px-4 py-3 text-sm">
                          <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                            pretendard_8.h
                          </code>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Unicode Ranges */}
              <div className="rounded-2xl border border-gray-200 bg-white p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  지원 유니코드 범위
                </h2>
                <p className="text-gray-600 mb-4">
                  을유1945 폰트는 다음 유니코드 범위를 지원합니다:
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">
                          범위
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">
                          설명
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr>
                        <td className="px-4 py-2 border-b">
                          <code className="bg-gray-100 px-1 rounded">
                            0xAC00-0xD7AF
                          </code>
                        </td>
                        <td className="px-4 py-2 border-b">
                          한글 음절 (Hangul Syllables) - 11,172자
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b">
                          <code className="bg-gray-100 px-1 rounded">
                            0x3130-0x318F
                          </code>
                        </td>
                        <td className="px-4 py-2 border-b">
                          한글 호환 자모 (Hangul Compatibility Jamo)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b">
                          <code className="bg-gray-100 px-1 rounded">
                            0x4E00-0x9FFF
                          </code>
                        </td>
                        <td className="px-4 py-2 border-b">
                          CJK 통합 한자 (CJK Unified Ideographs) - 20,992자
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b">
                          <code className="bg-gray-100 px-1 rounded">
                            0x3000-0x303F
                          </code>
                        </td>
                        <td className="px-4 py-2 border-b">
                          CJK 기호 및 문장부호 (『』「」《》〈〉【】 등)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b">
                          <code className="bg-gray-100 px-1 rounded">
                            0x2000-0x206F
                          </code>
                        </td>
                        <td className="px-4 py-2 border-b">
                          General Punctuation (—–…&apos;&apos;&quot;&quot;†)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b">
                          <code className="bg-gray-100 px-1 rounded">
                            0x2100-0x214F
                          </code>
                        </td>
                        <td className="px-4 py-2 border-b">
                          Letterlike Symbols (℃℉№™℡)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b">
                          <code className="bg-gray-100 px-1 rounded">
                            0x2150-0x218F
                          </code>
                        </td>
                        <td className="px-4 py-2 border-b">
                          Number Forms (⅓⅔¼½¾)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b">
                          <code className="bg-gray-100 px-1 rounded">
                            0x2190-0x21FF
                          </code>
                        </td>
                        <td className="px-4 py-2 border-b">Arrows (←↑→↓↔↕)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b">
                          <code className="bg-gray-100 px-1 rounded">
                            0x2200-0x22FF
                          </code>
                        </td>
                        <td className="px-4 py-2 border-b">
                          Mathematical Operators (±×÷≠≤≥∞)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b">
                          <code className="bg-gray-100 px-1 rounded">
                            0x2460-0x24FF
                          </code>
                        </td>
                        <td className="px-4 py-2 border-b">
                          Enclosed Alphanumerics (①②③ⓐⓑⓒ)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b">
                          <code className="bg-gray-100 px-1 rounded">
                            0x2500-0x257F
                          </code>
                        </td>
                        <td className="px-4 py-2 border-b">
                          Box Drawings (─│┌┐└┘├┤┬┴┼)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b">
                          <code className="bg-gray-100 px-1 rounded">
                            0x25A0-0x25FF
                          </code>
                        </td>
                        <td className="px-4 py-2 border-b">
                          Geometric Shapes (○●◎□■△▲)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b">
                          <code className="bg-gray-100 px-1 rounded">
                            0x2600-0x26FF
                          </code>
                        </td>
                        <td className="px-4 py-2 border-b">
                          Miscellaneous Symbols (☀☁☂★☆♠♣♥♦)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b">
                          <code className="bg-gray-100 px-1 rounded">
                            0x2700-0x27BF
                          </code>
                        </td>
                        <td className="px-4 py-2 border-b">
                          Dingbats (✓✔✕✖✗✘)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">
                          <code className="bg-gray-100 px-1 rounded">
                            0x3200-0x32FF
                          </code>
                        </td>
                        <td className="px-4 py-2">Enclosed CJK (㈜㈀㉠㉡)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Font Conversion */}
              <div className="rounded-2xl border border-gray-200 bg-white p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  커스텀 폰트 변환
                </h2>
                <p className="text-gray-600 mb-4">
                  TTF/OTF 폰트를 CrossPoint Reader에서 사용할 수 있는{" "}
                  <code className="bg-gray-100 px-1 rounded">.epdfont</code>{" "}
                  형식으로 변환할 수 있습니다.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">
                    웹 폰트 변환기
                  </h3>
                  <p className="text-blue-700 mb-4">
                    브라우저에서 바로 폰트를 변환할 수 있습니다. 다양한 유니코드 범위를 선택하고 실시간 미리보기를 확인하세요.
                  </p>
                  <a
                    href="/font-converter"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    폰트 변환기 열기
                  </a>
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  변환된 폰트 사용 방법
                </h3>
                <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-6">
                  <li>
                    <a href="/font-converter" className="text-blue-600 hover:underline">폰트 변환기</a>에서 TTF/OTF 파일을 업로드합니다.
                  </li>
                  <li>원하는 유니코드 범위(한국어, 중국어, 일본어 등)를 선택합니다.</li>
                  <li>폰트 크기와 비트 깊이를 설정하고 변환합니다.</li>
                  <li>
                    변환된 <code className="bg-gray-100 px-1 rounded">.epdfont</code> 파일을 SD 카드의{" "}
                    <code className="bg-gray-100 px-1 rounded">/.crosspoint/fonts/</code> 폴더에 복사합니다.
                  </li>
                  <li>기기의 설정 &gt; 글꼴 설정에서 폰트를 선택합니다.</li>
                </ol>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-yellow-800 mb-2">
                    지원되는 폰트 형식 및 제한 사항
                  </h4>
                  <div className="text-sm text-yellow-700 space-y-2">
                    <p><strong>지원 형식:</strong> TTF, OTF, WOFF, WOFF2 (최대 10MB)</p>
                    <p><strong>지원되지 않는 폰트:</strong></p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li><strong>가변 폰트 (Variable Fonts)</strong> - 현재 FreeType WASM에서 가변 폰트 인터페이스가 구현되지 않았습니다.</li>
                      <li><strong>컬러 폰트 (Color Fonts/Emoji)</strong> - 컬러 레이어 폰트는 흑백으로만 렌더링됩니다.</li>
                      <li><strong>비트맵 전용 폰트</strong> - 스케일러블 아웃라인이 없는 순수 비트맵 폰트는 변환되지 않습니다.</li>
                      <li><strong>복잡한 폰트</strong> - 글리프 수가 매우 많거나 복잡한 폰트는 메모리 오류가 발생할 수 있습니다.</li>
                    </ul>
                    <p className="mt-2 text-yellow-600">
                      일반적인 한글 폰트(나눔고딕, 맑은 고딕, 본고딕 등)는 대부분 정상적으로 변환됩니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* License */}
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  라이선스
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800">을유1945</h3>
                    <p className="text-gray-600">
                      <a
                        href="https://www.eulyoo.co.kr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        을유문화사
                      </a>
                      에서 제공하는 서체입니다.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Pretendard</h3>
                    <p className="text-gray-600">
                      <a
                        href="https://github.com/orioncactus/pretendard"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        GitHub
                      </a>
                      에서 제공하는 오픈소스 서체입니다 (SIL Open Font License).
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
