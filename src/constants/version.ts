// 이 파일은 crosspoint-reader-ko/platformio.ini에서 버전 정보를 가져옵니다.
// platformio.ini의 crosspoint_version 값을 확인하여 업데이트하세요.
export const CROSSPOINT_VERSION = "0.9.0-ko.3";

// 펌웨어 파일명 생성 헬퍼
export const getFirmwareFilename = () => `CrossPoint-${CROSSPOINT_VERSION}.bin`;

// GitHub 릴리즈 직접 다운로드 URL
export const getFirmwareDownloadUrl = () =>
  `https://github.com/eunchurn/crosspoint-reader-ko/releases/download/v${CROSSPOINT_VERSION}/${getFirmwareFilename()}`;
