import Link from "next/link";
import Image from "next/image";
import { getAssetPath } from "@/lib/basePath";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a
              href="https://idlerecord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
            >
              <Image
                src={getAssetPath("/idlerecord.svg")}
                alt="IDLERECORD"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="font-semibold text-lg text-white">
                IDLERECORD
              </span>
            </a>
            <p className="text-sm text-gray-400">
              당신의 여유 시간을 기록하여, 평범한 순간을 특별한 기억으로 바꿔주는 플랫폼입니다.
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
              <li>
                <Link
                  href="/releases"
                  className="hover:text-blue-400 transition-colors"
                >
                  릴리즈 노트
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
              <li>
                <a
                  href="https://wallpaperconverter.jakegreen.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  X4 Wallpaper Converter
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

            <h3 className="font-semibold text-white mb-4 mt-6">후원</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://ko-fi.com/daveallie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#FF5E5B] transition-colors"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311z"/>
                  </svg>
                  Dave Allie (원본)
                </a>
              </li>
              <li>
                <a
                  href="https://ko-fi.com/eunchurn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#29ABE0] transition-colors"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311z"/>
                  </svg>
                  eunchurn (한국어 버전)
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
