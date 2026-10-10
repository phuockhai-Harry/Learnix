import type { jsPDF } from 'jspdf';

let cachedRegularB64: string | null = null;
let cachedBoldB64: string | null = null;
let loadPromise: Promise<[string | null, string | null]> | null = null;

const ROBOTO_REGULAR_REMOTE = 'https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbWmT.ttf';
const ROBOTO_BOLD_REMOTE = 'https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYjammT.ttf';

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

async function fetchFontAsBase64(primaryUrl: string, fallbackUrl?: string): Promise<string | null> {
  try {
    const res = await fetch(primaryUrl);
    if (res.ok) {
      const buf = await res.arrayBuffer();
      return arrayBufferToBase64(buf);
    }
  } catch (err) {
    console.warn(`Could not load font from ${primaryUrl}, trying fallback...`, err);
  }

  if (fallbackUrl) {
    try {
      const res = await fetch(fallbackUrl);
      if (res.ok) {
        const buf = await res.arrayBuffer();
        return arrayBufferToBase64(buf);
      }
    } catch (err) {
      console.warn(`Could not load font from fallback ${fallbackUrl}:`, err);
    }
  }

  return null;
}

export async function loadPdfFonts(): Promise<[string | null, string | null]> {
  if (cachedRegularB64 && cachedBoldB64) {
    return [cachedRegularB64, cachedBoldB64];
  }

  if (!loadPromise) {
    loadPromise = Promise.all([
      fetchFontAsBase64('/fonts/Roboto-Regular.ttf', ROBOTO_REGULAR_REMOTE),
      fetchFontAsBase64('/fonts/Roboto-Bold.ttf', ROBOTO_BOLD_REMOTE)
    ]).then(([reg, bold]) => {
      if (reg) cachedRegularB64 = reg;
      if (bold) cachedBoldB64 = bold;
      return [cachedRegularB64, cachedBoldB64];
    });
  }

  return loadPromise;
}

/**
 * Sets up Unicode-compatible fonts on the jsPDF document.
 * Registers 'Roboto' (Regular & Bold) with complete Vietnamese diacritic coverage.
 * Returns true if the custom Unicode font was successfully attached.
 */
export async function setupPdfUnicode(doc: jsPDF): Promise<boolean> {
  try {
    const [regB64, boldB64] = await loadPdfFonts();

    let fontRegistered = false;

    if (regB64) {
      doc.addFileToVFS('Roboto-Regular.ttf', regB64);
      doc.addFont('Roboto-Regular.ttf', 'Roboto', 'normal');
      fontRegistered = true;
    }

    if (boldB64) {
      doc.addFileToVFS('Roboto-Bold.ttf', boldB64);
      doc.addFont('Roboto-Bold.ttf', 'Roboto', 'bold');
      fontRegistered = true;
    }

    if (fontRegistered) {
      doc.setFont('Roboto', 'normal');
      return true;
    }
  } catch (err) {
    console.warn('setupPdfUnicode error, defaulting to standard font:', err);
  }

  doc.setFont('helvetica', 'normal');
  return false;
}

/**
 * Removes Vietnamese diacritics as an emergency fallback ONLY if
 * standard non-Unicode PDF fonts must be used.
 */
export function removeVietnameseTones(str: string): string {
  if (!str) return '';
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, (m) => (m === 'đ' ? 'd' : 'D'));
}
