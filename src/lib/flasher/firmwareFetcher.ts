import { getAssetPath } from "@/lib/basePath";

const officialFirmwareUrls = {
  "3.1.1-EN":
    "http://gotaserver.xteink.com/api/download/ESP32C3/V3.1.1/V3.1.1-EN.bin",
  "3.1.7-CH":
    "http://47.122.74.33:5000/api/download/ESP32C3/V3.1.7/V3.1.7_2-CH-X4.bin",
};

export interface FirmwareVersions {
  korean: string;
  crosspoint: string;
  downloadedAt: string;
}

let cachedVersions: FirmwareVersions | null = null;

export async function getFirmwareVersions(): Promise<FirmwareVersions> {
  if (cachedVersions) {
    return cachedVersions;
  }

  const url = getAssetPath("/firmware/versions.json");
  const response = await fetch(url);
  if (!response.ok) {
    return {
      korean: "unknown",
      crosspoint: "unknown",
      downloadedAt: "",
    };
  }
  cachedVersions = await response.json();
  return cachedVersions!;
}

async function fetchFirmwareFromUrl(url: string): Promise<Uint8Array> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download firmware: ${response.status}`);
  }
  return new Uint8Array(await response.arrayBuffer());
}

export async function getOfficialFirmware(
  version: keyof typeof officialFirmwareUrls,
) {
  const url = officialFirmwareUrls[version];
  return fetchFirmwareFromUrl(url);
}

export async function getCommunityFirmware(firmware: "CrossPoint") {
  if (firmware === "CrossPoint") {
    // Firmware is downloaded at build time and stored in public/firmware
    const url = getAssetPath("/firmware/crosspoint-firmware.bin");
    return fetchFirmwareFromUrl(url);
  }

  throw new Error("Unsupported community firmware");
}

export async function getKoreanCommunityFirmware() {
  // Firmware is downloaded at build time and stored in public/firmware
  const url = getAssetPath("/firmware/korean-firmware.bin");
  return fetchFirmwareFromUrl(url);
}
