const textEncoder = new TextEncoder();

function assertView(view, index) {
  if (!view || typeof view !== "object") {
    throw new TypeError(`View at index ${index} must be an object.`);
  }

  if (!Array.isArray(view.pixels)) {
    throw new TypeError(`View at index ${index} must include a pixels array.`);
  }

  if (typeof view.width !== "number" || typeof view.height !== "number") {
    throw new TypeError(`View at index ${index} must include numeric width and height.`);
  }
}

function normalizeInput(input) {
  if (!input || typeof input !== "object") {
    throw new TypeError("Encoder input must be an object.");
  }

  const views = Array.isArray(input.views) ? input.views : [];
  if (views.length === 0) {
    throw new TypeError("Encoder input must contain at least one view.");
  }

  views.forEach(assertView);

  return {
    magic: "DHI",
    version: 1,
    hasAlpha: Boolean(input.hasAlpha),
    metadata: input.metadata ?? {},
    views: views.map((view, index) => ({
      index,
      angle: view.angle ?? null,
      width: view.width,
      height: view.height,
      pixels: view.pixels,
      alpha: view.alpha ?? null
    }))
  };
}

export function encodeDhi(input) {
  const payload = normalizeInput(input);
  return textEncoder.encode(JSON.stringify(payload));
}

export function createDhiDocument(options = {}) {
  return {
    hasAlpha: Boolean(options.hasAlpha),
    metadata: options.metadata ?? {},
    views: []
  };
}

export function addView(document, view) {
  if (!document || typeof document !== "object") {
    throw new TypeError("Document must be an object.");
  }

  if (!Array.isArray(document.views)) {
    document.views = [];
  }

  assertView(view, document.views.length);
  document.views.push(view);
  return document;
}
