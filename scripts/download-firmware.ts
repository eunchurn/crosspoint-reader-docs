import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const ROOT_DIR = join(import.meta.dirname, "..");
const PUBLIC_FIRMWARE_DIR = join(ROOT_DIR, "public", "firmware");

interface FirmwareSource {
  name: string;
  url: string;
  filename: string;
  key: string;
}

interface FirmwareVersionInfo {
  korean: string;
  crosspoint: string;
  englishOfficial: string;
  chineseOfficial: string;
  downloadedAt: string;
}

const FIRMWARE_SOURCES: FirmwareSource[] = [
  {
    name: "Korean Community",
    url: "https://api.github.com/repos/eunchurn/crosspoint-reader-ko/releases/latest",
    filename: "korean-firmware.bin",
    key: "korean",
  },
  {
    name: "CrossPoint Community",
    url: "https://api.github.com/repos/daveallie/crosspoint-reader/releases/latest",
    filename: "crosspoint-firmware.bin",
    key: "crosspoint",
  },
];

// 공식 펌웨어 (HTTP URL이라 HTTPS 페이지에서 직접 로드 불가)
interface OfficialFirmware {
  name: string;
  url: string;
  filename: string;
  version: string;
}

const OFFICIAL_FIRMWARE_SOURCES: OfficialFirmware[] = [
  {
    name: "English Official",
    url: "http://gotaserver.xteink.com/api/download/ESP32C3/V5.0.3/V5.0.3-EN-X4-PROD-0207_2.bin",
    filename: "english-official-firmware.bin",
    version: "5.0.3",
  },
  {
    name: "Chinese Official",
    url: "http://47.122.74.33:5000/api/download/ESP32C3/V5.0.3/V5.0.3-CH-X4-PROD-0207_2.bin",
    filename: "chinese-official-firmware.bin",
    version: "5.0.3",
  },
];

const versionInfo: Record<string, string> = {};

async function downloadFirmware(source: FirmwareSource): Promise<void> {
  console.log(`📥 Downloading ${source.name} firmware...`);

  try {
    // Fetch release info from GitHub API
    const releaseResponse = await fetch(source.url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "crosspoint-reader-docs-build",
      },
    });

    if (!releaseResponse.ok) {
      throw new Error(`Failed to fetch release info: ${releaseResponse.status}`);
    }

    const releaseData = await releaseResponse.json();

    // Find firmware.bin asset
    const firmwareAsset = releaseData.assets?.find(
      (asset: { name: string }) => asset.name === "firmware.bin"
    );

    if (!firmwareAsset) {
      throw new Error("firmware.bin not found in release assets");
    }

    const version = releaseData.tag_name;
    console.log(`   Found: ${firmwareAsset.name} (${version})`);

    // Store version info
    versionInfo[source.key] = version;

    // Download the firmware binary
    const firmwareResponse = await fetch(firmwareAsset.browser_download_url, {
      headers: {
        "User-Agent": "crosspoint-reader-docs-build",
      },
    });

    if (!firmwareResponse.ok) {
      throw new Error(`Failed to download firmware: ${firmwareResponse.status}`);
    }

    const firmwareBuffer = await firmwareResponse.arrayBuffer();

    // Save to public/firmware directory
    const outputPath = join(PUBLIC_FIRMWARE_DIR, source.filename);
    writeFileSync(outputPath, Buffer.from(firmwareBuffer));

    console.log(
      `   ✅ Saved to public/firmware/${source.filename} (${(firmwareBuffer.byteLength / 1024).toFixed(1)} KB)`
    );
  } catch (error) {
    console.error(`   ❌ Failed to download ${source.name}:`, error);
    throw error;
  }
}

async function downloadOfficialFirmware(source: OfficialFirmware): Promise<void> {
  console.log(`📥 Downloading ${source.name} firmware (${source.version})...`);

  try {
    const response = await fetch(source.url, {
      headers: {
        "User-Agent": "crosspoint-reader-docs-build",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to download: ${response.status}`);
    }

    const firmwareBuffer = await response.arrayBuffer();

    const outputPath = join(PUBLIC_FIRMWARE_DIR, source.filename);
    writeFileSync(outputPath, Buffer.from(firmwareBuffer));

    console.log(
      `   ✅ Saved to public/firmware/${source.filename} (${(firmwareBuffer.byteLength / 1024).toFixed(1)} KB)`
    );
  } catch (error) {
    console.error(`   ❌ Failed to download ${source.name}:`, error);
    // 공식 펌웨어는 실패해도 빌드 중단하지 않음 (선택적)
    console.log(`   ⚠️ Skipping ${source.name} - will not be available`);
  }
}

async function main(): Promise<void> {
  console.log("🔧 Downloading firmware files for build...\n");

  // Create firmware directory if it doesn't exist
  if (!existsSync(PUBLIC_FIRMWARE_DIR)) {
    mkdirSync(PUBLIC_FIRMWARE_DIR, { recursive: true });
    console.log(`📁 Created directory: public/firmware\n`);
  }

  // Download community firmware files (required)
  for (const source of FIRMWARE_SOURCES) {
    await downloadFirmware(source);
    console.log("");
  }

  // Download official firmware files (optional, may fail due to HTTP)
  console.log("📥 Downloading official firmware files...\n");
  for (const source of OFFICIAL_FIRMWARE_SOURCES) {
    await downloadOfficialFirmware(source);
    console.log("");
  }

  // Save version info to JSON file
  const versionData: FirmwareVersionInfo = {
    korean: versionInfo.korean || "unknown",
    crosspoint: versionInfo.crosspoint || "unknown",
    englishOfficial: OFFICIAL_FIRMWARE_SOURCES.find(s => s.name === "English Official")?.version || "unknown",
    chineseOfficial: OFFICIAL_FIRMWARE_SOURCES.find(s => s.name === "Chinese Official")?.version || "unknown",
    downloadedAt: new Date().toISOString(),
  };

  const versionPath = join(PUBLIC_FIRMWARE_DIR, "versions.json");
  writeFileSync(versionPath, JSON.stringify(versionData, null, 2));
  console.log(`📋 Saved version info to public/firmware/versions.json`);
  console.log(`   Korean: ${versionData.korean}`);
  console.log(`   CrossPoint: ${versionData.crosspoint}`);
  console.log(`   English Official: ${versionData.englishOfficial}`);
  console.log(`   Chinese Official: ${versionData.chineseOfficial}\n`);

  console.log("✅ All firmware files downloaded successfully!");
}

main().catch((error) => {
  console.error("Build failed:", error);
  process.exit(1);
});
