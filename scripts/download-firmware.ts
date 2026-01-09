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

async function main(): Promise<void> {
  console.log("🔧 Downloading firmware files for build...\n");

  // Create firmware directory if it doesn't exist
  if (!existsSync(PUBLIC_FIRMWARE_DIR)) {
    mkdirSync(PUBLIC_FIRMWARE_DIR, { recursive: true });
    console.log(`📁 Created directory: public/firmware\n`);
  }

  // Download all firmware files
  for (const source of FIRMWARE_SOURCES) {
    await downloadFirmware(source);
    console.log("");
  }

  // Save version info to JSON file
  const versionData: FirmwareVersionInfo = {
    korean: versionInfo.korean || "unknown",
    crosspoint: versionInfo.crosspoint || "unknown",
    downloadedAt: new Date().toISOString(),
  };

  const versionPath = join(PUBLIC_FIRMWARE_DIR, "versions.json");
  writeFileSync(versionPath, JSON.stringify(versionData, null, 2));
  console.log(`📋 Saved version info to public/firmware/versions.json`);
  console.log(`   Korean: ${versionData.korean}`);
  console.log(`   CrossPoint: ${versionData.crosspoint}\n`);

  console.log("✅ All firmware files downloaded successfully!");
}

main().catch((error) => {
  console.error("Build failed:", error);
  process.exit(1);
});
