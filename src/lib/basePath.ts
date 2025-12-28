export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function getAssetPath(path: string): string {
  if (path.startsWith("http")) {
    return path;
  }
  return `${basePath}${path}`;
}
