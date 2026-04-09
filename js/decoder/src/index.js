const textDecoder = new TextDecoder();

function ensureUint8Array(input) {
  if (input instanceof Uint8Array) {
    return input;
  }

  if (input instanceof ArrayBuffer) {
    return new Uint8Array(input);
  }

  throw new TypeError("Decoder input must be a Uint8Array or ArrayBuffer.");
}

export function decodeDhi(input) {
  const bytes = ensureUint8Array(input);
  const parsed = JSON.parse(textDecoder.decode(bytes));

  if (parsed.magic !== "DHI") {
    throw new Error("Invalid dhi-format payload: missing DHI magic.");
  }

  return parsed;
}

export function getViewCount(document) {
  if (!document || !Array.isArray(document.views)) {
    return 0;
  }

  return document.views.length;
}

export function getView(document, index) {
  if (!document || !Array.isArray(document.views)) {
    throw new TypeError("Document must contain a views array.");
  }

  return document.views[index] ?? null;
}
