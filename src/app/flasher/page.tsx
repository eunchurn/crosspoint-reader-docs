"use client";

import React, { useRef, useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUpload, { FileUploadHandle } from "@/components/flasher/FileUpload";
import Steps from "@/components/flasher/Steps";
import { useEspOperations } from "@/lib/flasher/useEspOperations";
import {
  getFirmwareVersions,
  FirmwareVersions,
} from "@/lib/flasher/firmwareFetcher";

export default function FlasherPage() {
  const { actions, stepData, isRunning } = useEspOperations();
  const fullFlashFileInput = useRef<FileUploadHandle>(null);
  const appPartitionFileInput = useRef<FileUploadHandle>(null);
  const progressSectionRef = useRef<HTMLElement>(null);
  const [versions, setVersions] = useState<FirmwareVersions | null>(null);

  useEffect(() => {
    getFirmwareVersions().then(setVersions);
  }, []);

  const isDeviceConnected = stepData.some(
    (step) => step.name === "장치 연결" && step.status === "success",
  );
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (isDeviceConnected && !hasScrolled && progressSectionRef.current) {
      const element = progressSectionRef.current;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - 200;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setHasScrolled(true);
    }
  }, [isDeviceConnected, hasScrolled]);

  useEffect(() => {
    if (!isRunning) {
      setHasScrolled(false);
    }
  }, [isRunning]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              웹 플래셔
            </h1>
            <p className="text-lg text-gray-600">
              CrossPoint Reader 장치에 펌웨어를 직접 플래싱 할 수 있습니다
            </p>
          </div>

          {/* Warning Alert */}
          <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">
                  주의해서 진행하세요
                </h3>
                <div className="mt-2 text-sm text-yellow-700 space-y-2">
                  <p>
                    복구 불가능한 문제가 발생할 확률은 극히 낮지만, 0은 아닙니다.
                    플래싱 전에 <strong>전체 플래시 저장</strong>으로 백업을
                    먼저 받아두세요.
                  </p>
                  <p>
                    <strong>파일에서 전체 플래시 쓰기</strong> 또는{" "}
                    <strong>펌웨어 플래싱</strong>을 시작하면, 작업이 완료될
                    때까지 장치 연결을 해제하거나 탭을 닫지 마세요. 백업에서
                    전체 플래시를 쓰면 항상 이전 상태로 복원할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Browser Support Info */}
          <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-blue-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">
                  브라우저 요구사항
                </h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>
                    이 기능은 WebSerial API를 사용합니다.{" "}
                    <strong>Chrome</strong> 또는 <strong>Edge</strong> 브라우저에서만
                    작동합니다. Safari, Firefox는 지원되지 않습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Full Flash Controls */}
          <section className="mb-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              전체 플래시 백업 및 복원
            </h2>
            <div className="text-sm text-gray-600 space-y-2 mb-6">
              <p>
                이 기능들은 Xteink 장치의 전체 백업을 만들어 문제가 발생했을 때
                복원할 수 있도록 합니다.
              </p>
              <p>
                <strong>전체 플래시 저장</strong>은 장치의 플래시를 읽어{" "}
                <em>flash.bin</em>으로 저장합니다. 약 25분 정도 소요됩니다.
                해당 파일(또는 다른 사람의 파일)을{" "}
                <strong>파일에서 전체 플래시 쓰기</strong>로 사용하여 장치의
                전체 플래시를 덮어쓸 수 있습니다.
              </p>
            </div>
            <div className="space-y-4">
              <button
                onClick={actions.saveFullFlash}
                disabled={isRunning}
                className="w-full px-4 py-3 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                전체 플래시 저장
              </button>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <FileUpload ref={fullFlashFileInput} disabled={isRunning} />
                </div>
                <button
                  onClick={() =>
                    actions.writeFullFlash(() =>
                      fullFlashFileInput.current?.getFile(),
                    )
                  }
                  disabled={isRunning}
                  className="px-4 py-3 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
                >
                  파일에서 전체 플래시 쓰기
                </button>
              </div>
            </div>
          </section>

          {/* OTA Fast Flash Controls */}
          <section className="mb-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              OTA 빠른 플래시 제어
            </h2>
            <div className="text-sm text-gray-600 space-y-2 mb-6">
              <p>
                사용하기 전에 위의 <strong>전체 플래시 저장</strong>으로 백업을
                먼저 받아두는 것을 강력히 권장합니다.
              </p>
              <p>
                <strong>펌웨어 플래싱</strong>은 펌웨어를 다운로드하고, 백업
                파티션을 새 펌웨어로 덮어쓴 뒤, 이 파티션으로 전환합니다(기존
                펌웨어는 새 백업이 됩니다). 전체 플래시 쓰기보다 훨씬 빠르며
                모든 설정이 유지됩니다. 문제가 발생해도 다시 실행하면 됩니다.
              </p>
            </div>
            <div className="space-y-4">
              <button
                onClick={actions.flashKoreanFirmware}
                disabled={isRunning}
                className="w-full px-4 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                한국어 펌웨어 플래싱 (커뮤니티){" "}
                {versions?.korean && (
                  <span className="opacity-75">({versions.korean})</span>
                )}
              </button>
              <button
                onClick={actions.flashCrossPointFirmware}
                disabled={isRunning}
                className="w-full px-4 py-3 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                CrossPoint 펌웨어 플래싱 (커뮤니티){" "}
                {versions?.crosspoint && (
                  <span className="opacity-75">({versions.crosspoint})</span>
                )}
              </button>
              <button
                onClick={actions.flashEnglishFirmware}
                disabled={isRunning}
                className="w-full px-4 py-3 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                영어 공식 펌웨어 플래싱 (3.1.1)
              </button>
              <button
                onClick={actions.flashChineseFirmware}
                disabled={isRunning}
                className="w-full px-4 py-3 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                중국어 공식 펌웨어 플래싱 (3.1.7)
              </button>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <FileUpload
                    ref={appPartitionFileInput}
                    disabled={isRunning}
                  />
                </div>
                <button
                  onClick={() =>
                    actions.flashCustomFirmware(() =>
                      appPartitionFileInput.current?.getFile(),
                    )
                  }
                  disabled={isRunning}
                  className="px-4 py-3 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
                >
                  파일에서 펌웨어 플래싱
                </button>
              </div>
            </div>
          </section>

          {/* Steps Progress */}
          <section
            ref={progressSectionRef}
            className="mb-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              진행 상황
            </h2>
            {stepData.length > 0 ? (
              <Steps steps={stepData} />
            ) : (
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-blue-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      작업을 시작하면 여기에 진행 상황이 표시됩니다
                    </p>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Device Restart Instructions */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-blue-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">
                  장치 재시작 안내
                </h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>
                    쓰기 작업을 완료한 후에는 오른쪽 하단 근처의 작은 버튼을
                    눌렀다 떼고, 바로 메인 전원 버튼을 약 1초간 길게 눌러 장치를
                    재시작해야 합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Powered by */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              <a
                href="https://xteink.dve.al/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
              >
                Official Xteink Flasher
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
