// EPDFont format types

export interface GlyphProps {
  width: number;
  height: number;
  advanceX: number;
  left: number;
  top: number;
  dataLength: number;
  dataOffset: number;
  codePoint: number;
}

export interface UnicodeInterval {
  start: number;
  end: number;
}

export interface EPDFontHeader {
  magic: number;
  version: number;
  is2Bit: boolean;
  advanceY: number;
  ascender: number;
  descender: number;
  intervalCount: number;
  glyphCount: number;
  intervalsOffset: number;
  glyphsOffset: number;
  bitmapOffset: number;
}

export interface EPDFontData {
  header: EPDFontHeader;
  intervals: Array<{ start: number; end: number; offset: number }>;
  glyphs: GlyphProps[];
  bitmapData: Uint8Array;
}

export interface RenderingOptions {
  charSpacing?: number; // 자간 (px, 기본값: 0)
  lineSpacing?: number; // 행간 배수 (기본값: 1.0)
  boldness?: number; // 굵기 조정 (기본값: 0)
  italicAngle?: number; // 이텔릭체 기울기 (도, 기본값: 0)
  horizontalScale?: number; // 장평 (%, 기본값: 100)
  baselineShift?: number; // 베이스라인 조정 (px, 기본값: 0)
  antialiasing?: boolean; // 안티앨리어싱 (기본값: true)
}

export interface ConversionOptions extends RenderingOptions {
  fontName: string;
  fontSize: number;
  is2Bit: boolean;
  additionalIntervals?: UnicodeInterval[];
  includeKorean?: boolean;
  onProgress?: (progress: number, message: string) => void;
}

export interface ConversionResult {
  success: boolean;
  data?: Uint8Array;
  glyphCount?: number;
  intervalCount?: number;
  totalSize?: number;
  advanceY?: number;
  ascender?: number;
  descender?: number;
  error?: string;
}
