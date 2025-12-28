import Link from "next/link";
import Image from "next/image";
import { getAssetPath } from "@/lib/basePath";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={getAssetPath("/icon.svg")}
                alt="CrossPoint Reader"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="font-semibold text-lg text-white">
                CrossPoint Reader
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Xteink X4 전자잉크 리더를 위한 오픈소스 펌웨어입니다. 한글 EPUB
              읽기를 지원합니다.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">문서</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/install"
                  className="hover:text-blue-400 transition-colors"
                >
                  설치 가이드
                </Link>
              </li>
              <li>
                <Link
                  href="/guide"
                  className="hover:text-blue-400 transition-colors"
                >
                  사용자 가이드
                </Link>
              </li>
              <li>
                <Link
                  href="/webserver"
                  className="hover:text-blue-400 transition-colors"
                >
                  웹 서버 사용법
                </Link>
              </li>
              <li>
                <Link
                  href="/korean-font"
                  className="hover:text-blue-400 transition-colors"
                >
                  한글 폰트 정보
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">링크</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/eunchurn/crosspoint-reader-ko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  GitHub (한국어 버전)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/daveallie/crosspoint-reader"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  GitHub (원본)
                </a>
              </li>
              <li>
                <a
                  href="https://xteink.dve.al/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  웹 플래셔
                </a>
              </li>
              <li>
                <a
                  href="https://x4converter.rho.sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  X4 Converter
                </a>
              </li>
              <li>
                <a
                  href="https://epub2xtc.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  EPUB to XTC
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kxrz/calibre_workflow/tree/Running"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Calibre Workflow
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">커뮤니티</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://discord.gg/8fmqVPqp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://www.readme.club/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Readme.club
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            CrossPoint Reader는{" "}
            <span className="font-semibold">Xteink</span>와 제휴되어 있지
            않습니다.
          </p>
          <p className="mt-2">
            MIT License &copy; {new Date().getFullYear()} CrossPoint Reader
            Contributors
          </p>
        </div>
      </div>
    </footer>
  );
}
