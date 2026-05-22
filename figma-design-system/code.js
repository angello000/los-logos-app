// Eon Dark System Builder — Figma Plugin
// Generates the full design system from DESIGN.md tokens

figma.showUI(__html__, { width: 420, height: 560, title: "Eon Dark System Builder" });

// ─── Token Definitions ───────────────────────────────────────────────────────

const colors = {
  // Surfaces
  "surface/default":                   { hex: "#0c141d", group: "Surface" },
  "surface/dim":                       { hex: "#0c141d", group: "Surface" },
  "surface/bright":                    { hex: "#323a44", group: "Surface" },
  "surface/container-lowest":          { hex: "#070f17", group: "Surface" },
  "surface/container-low":             { hex: "#141c25", group: "Surface" },
  "surface/container":                 { hex: "#182029", group: "Surface" },
  "surface/container-high":            { hex: "#232b34", group: "Surface" },
  "surface/container-highest":         { hex: "#2e353f", group: "Surface" },
  "surface/variant":                   { hex: "#2e353f", group: "Surface" },
  // On-surface
  "on-surface/default":                { hex: "#dbe3f0", group: "On Surface" },
  "on-surface/variant":                { hex: "#e7bdb2", group: "On Surface" },
  "on-surface/inverse":                { hex: "#29313b", group: "On Surface" },
  "surface/inverse":                   { hex: "#dbe3f0", group: "Surface" },
  "surface/tint":                      { hex: "#ffb5a0", group: "Surface" },
  // Primary (Eon Orange)
  "primary/default":                   { hex: "#ffb5a0", group: "Primary" },
  "primary/on":                        { hex: "#601400", group: "Primary" },
  "primary/container":                 { hex: "#ff5625", group: "Primary" },
  "primary/on-container":              { hex: "#541100", group: "Primary" },
  "primary/inverse":                   { hex: "#b12d00", group: "Primary" },
  "primary/fixed":                     { hex: "#ffdbd1", group: "Primary" },
  "primary/fixed-dim":                 { hex: "#ffb5a0", group: "Primary" },
  "primary/on-fixed":                  { hex: "#3b0900", group: "Primary" },
  "primary/on-fixed-variant":          { hex: "#872000", group: "Primary" },
  // Secondary (Cyan)
  "secondary/default":                 { hex: "#46eaed", group: "Secondary" },
  "secondary/on":                      { hex: "#003738", group: "Secondary" },
  "secondary/container":               { hex: "#00cdd0", group: "Secondary" },
  "secondary/on-container":            { hex: "#005253", group: "Secondary" },
  "secondary/fixed":                   { hex: "#5af8fb", group: "Secondary" },
  "secondary/fixed-dim":               { hex: "#2ddbde", group: "Secondary" },
  "secondary/on-fixed":                { hex: "#002020", group: "Secondary" },
  "secondary/on-fixed-variant":        { hex: "#004f51", group: "Secondary" },
  // Tertiary
  "tertiary/default":                  { hex: "#c8c6c5", group: "Tertiary" },
  "tertiary/on":                       { hex: "#313030", group: "Tertiary" },
  "tertiary/container":                { hex: "#929090", group: "Tertiary" },
  "tertiary/on-container":             { hex: "#2a2a2a", group: "Tertiary" },
  "tertiary/fixed":                    { hex: "#e5e2e1", group: "Tertiary" },
  "tertiary/fixed-dim":                { hex: "#c8c6c5", group: "Tertiary" },
  "tertiary/on-fixed":                 { hex: "#1c1b1b", group: "Tertiary" },
  "tertiary/on-fixed-variant":         { hex: "#474746", group: "Tertiary" },
  // Semantic
  "error/default":                     { hex: "#ffb4ab", group: "Error" },
  "error/on":                          { hex: "#690005", group: "Error" },
  "error/container":                   { hex: "#93000a", group: "Error" },
  "error/on-container":                { hex: "#ffdad6", group: "Error" },
  // Outline
  "outline/default":                   { hex: "#ad887e", group: "Outline" },
  "outline/variant":                   { hex: "#5d4038", group: "Outline" },
  // Background
  "background/default":                { hex: "#0c141d", group: "Background" },
  "background/on":                     { hex: "#dbe3f0", group: "Background" },
};

const typography = [
  { name: "headline/lg",  family: "Roboto", size: 32, weight: 700, line: 40, tracking: -0.02 },
  { name: "headline/md",  family: "Roboto", size: 24, weight: 600, line: 32, tracking: -0.01 },
  { name: "headline/sm",  family: "Roboto", size: 20, weight: 600, line: 28, tracking:  0    },
  { name: "body/lg",      family: "Roboto", size: 18, weight: 400, line: 28, tracking:  0    },
  { name: "body/md",      family: "Roboto", size: 16, weight: 400, line: 24, tracking:  0    },
  { name: "body/sm",      family: "Roboto", size: 14, weight: 400, line: 20, tracking:  0    },
  { name: "label/lg",     family: "Roboto", size: 14, weight: 500, line: 20, tracking:  0.02 },
  { name: "label/md",     family: "Roboto", size: 12, weight: 500, line: 16, tracking:  0.04 },
  { name: "label/sm",     family: "Roboto", size: 10, weight: 700, line: 12, tracking:  0.06 },
];

const spacing = [
  { name: "spacing/xs",  value: 4  },
  { name: "spacing/sm",  value: 8  },
  { name: "spacing/md",  value: 12 },
  { name: "spacing/lg",  value: 16 },
  { name: "spacing/xl",  value: 24 },
  { name: "spacing/2xl", value: 32 },
  { name: "spacing/3xl", value: 48 },
  { name: "spacing/4xl", value: 64 },
];

const radius = [
  { name: "radius/sm",      value: 4  },
  { name: "radius/default", value: 8  },
  { name: "radius/md",      value: 12 },
  { name: "radius/lg",      value: 16 },
  { name: "radius/xl",      value: 24 },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return { r, g, b };
}

function weightToFigma(w) {
  const map = { 400: "Regular", 500: "Medium", 600: "SemiBold", 700: "Bold" };
  return map[w] || "Regular";
}

function sendProgress(msg) {
  figma.ui.postMessage({ type: "progress", message: msg });
}

// ─── Step 1: Paint Styles ────────────────────────────────────────────────────

async function createColorStyles() {
  sendProgress("Creando estilos de color…");
  const created = [];
  for (const [name, token] of Object.entries(colors)) {
    const style = figma.createPaintStyle();
    style.name = name;
    style.description = `Group: ${token.group} | Hex: ${token.hex}`;
    style.paints = [{ type: "SOLID", color: hexToRgb(token.hex), opacity: 1 }];
    created.push(name);
  }
  return created.length;
}

// ─── Step 2: Text Styles ─────────────────────────────────────────────────────

async function createTextStyles() {
  sendProgress("Creando estilos de tipografía…");
  let count = 0;
  for (const t of typography) {
    try {
      await figma.loadFontAsync({ family: t.family, style: weightToFigma(t.weight) });
      const style = figma.createTextStyle();
      style.name = t.name;
      style.fontSize = t.size;
      style.fontName = { family: t.family, style: weightToFigma(t.weight) };
      style.lineHeight = { value: t.line, unit: "PIXELS" };
      style.letterSpacing = { value: t.tracking * 100, unit: "PERCENT" };
      count++;
    } catch (e) {
      console.warn(`Font ${t.family} ${weightToFigma(t.weight)} not available, skipping ${t.name}`);
    }
  }
  return count;
}

// ─── Step 3: Design System Page ──────────────────────────────────────────────

async function buildDocumentationPage() {
  sendProgress("Construyendo página de documentación…");

  let page = figma.root.children.find(p => p.name === "🎨 Eon Dark System");
  if (!page) {
    page = figma.createPage();
    page.name = "🎨 Eon Dark System";
  }
  figma.currentPage = page;

  let yOffset = 0;
  const SECTION_GAP = 80;
  const BG = hexToRgb("#0c141d");
  const TEXT_PRIMARY = hexToRgb("#dbe3f0");
  const ORANGE = hexToRgb("#ffb5a0");
  const CYAN = hexToRgb("#46eaed");

  // ── Section helper ──
  function sectionLabel(title, y) {
    const label = figma.createText();
    label.characters = title;
    label.fontSize = 11;
    label.fontName = { family: "Inter", style: "Bold" };
    label.fills = [{ type: "SOLID", color: ORANGE }];
    label.letterSpacing = { value: 8, unit: "PERCENT" };
    label.x = 0;
    label.y = y;
    page.appendChild(label);
    return label.height + 16;
  }

  // ── Color Palette ──
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });
  await figma.loadFontAsync({ family: "Inter", style: "Medium" });

  yOffset += sectionLabel("COLORS", yOffset);

  const groups = {};
  for (const [name, token] of Object.entries(colors)) {
    if (!groups[token.group]) groups[token.group] = [];
    groups[token.group].push({ name, hex: token.hex });
  }

  for (const [groupName, tokens] of Object.entries(groups)) {
    const groupLabel = figma.createText();
    groupLabel.characters = groupName;
    groupLabel.fontSize = 9;
    groupLabel.fontName = { family: "Inter", style: "Medium" };
    groupLabel.fills = [{ type: "SOLID", color: hexToRgb("#ad887e") }];
    groupLabel.x = 0;
    groupLabel.y = yOffset;
    page.appendChild(groupLabel);
    yOffset += groupLabel.height + 8;

    let xOffset = 0;
    for (const token of tokens) {
      const swatch = figma.createFrame();
      swatch.name = token.name;
      swatch.resize(96, 72);
      swatch.x = xOffset;
      swatch.y = yOffset;
      swatch.cornerRadius = 8;
      swatch.fills = [{ type: "SOLID", color: hexToRgb(token.hex) }];
      swatch.strokes = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 0.08 }];
      swatch.strokeWeight = 1;

      const swatchLabel = figma.createText();
      swatchLabel.characters = token.hex.toUpperCase();
      swatchLabel.fontSize = 8;
      swatchLabel.fontName = { family: "Inter", style: "Regular" };
      swatchLabel.fills = [{ type: "SOLID", color: TEXT_PRIMARY }];
      swatchLabel.x = xOffset;
      swatchLabel.y = yOffset + 76;
      page.appendChild(swatchLabel);

      const nameText = figma.createText();
      const shortName = token.name.split("/")[1] || token.name;
      nameText.characters = shortName;
      nameText.fontSize = 8;
      nameText.fontName = { family: "Inter", style: "Bold" };
      nameText.fills = [{ type: "SOLID", color: TEXT_PRIMARY }];
      nameText.x = xOffset;
      nameText.y = yOffset + 88;
      page.appendChild(nameText);

      page.appendChild(swatch);
      xOffset += 112;
      if (xOffset > 112 * 10) { xOffset = 0; yOffset += 120; }
    }
    yOffset += 120 + 16;
    xOffset = 0;
  }

  yOffset += SECTION_GAP;

  // ── Typography ──
  yOffset += sectionLabel("TYPOGRAPHY", yOffset);
  try {
    for (const t of typography) {
      try {
        await figma.loadFontAsync({ family: t.family, style: weightToFigma(t.weight) });
        const specimen = figma.createText();
        specimen.characters = t.name + "  —  The quick brown fox";
        specimen.fontSize = t.size;
        specimen.fontName = { family: t.family, style: weightToFigma(t.weight) };
        specimen.fills = [{ type: "SOLID", color: TEXT_PRIMARY }];
        specimen.x = 0;
        specimen.y = yOffset;
        page.appendChild(specimen);
        yOffset += specimen.height + 8;

        const meta = figma.createText();
        meta.characters = `${t.size}px · ${weightToFigma(t.weight)} · line ${t.line}px · tracking ${t.tracking}em`;
        meta.fontSize = 9;
        meta.fontName = { family: "Inter", style: "Regular" };
        meta.fills = [{ type: "SOLID", color: hexToRgb("#ad887e") }];
        meta.x = 0;
        meta.y = yOffset;
        page.appendChild(meta);
        yOffset += meta.height + 20;
      } catch (e) {
        console.warn("Font load failed for " + t.name);
      }
    }
  } catch(e) {}

  yOffset += SECTION_GAP;

  // ── Spacing ──
  yOffset += sectionLabel("SPACING", yOffset);
  let xOff = 0;
  for (const s of spacing) {
    const block = figma.createFrame();
    block.name = s.name;
    block.resize(s.value, s.value);
    block.x = xOff;
    block.y = yOffset + (64 - s.value);
    block.fills = [{ type: "SOLID", color: CYAN, opacity: 0.7 }];
    block.cornerRadius = 2;
    page.appendChild(block);

    const lbl = figma.createText();
    lbl.characters = s.value + "px";
    lbl.fontSize = 8;
    lbl.fontName = { family: "Inter", style: "Regular" };
    lbl.fills = [{ type: "SOLID", color: TEXT_PRIMARY }];
    lbl.x = xOff;
    lbl.y = yOffset + 72;
    page.appendChild(lbl);

    const nameLbl = figma.createText();
    nameLbl.characters = s.name.split("/")[1];
    nameLbl.fontSize = 8;
    nameLbl.fontName = { family: "Inter", style: "Bold" };
    nameLbl.fills = [{ type: "SOLID", color: TEXT_PRIMARY }];
    nameLbl.x = xOff;
    nameLbl.y = yOffset + 84;
    page.appendChild(nameLbl);

    xOff += Math.max(s.value + 16, 48);
  }
  yOffset += 120 + SECTION_GAP;

  // ── Border Radius ──
  yOffset += sectionLabel("BORDER RADIUS", yOffset);
  xOff = 0;
  for (const r of radius) {
    const block = figma.createFrame();
    block.name = r.name;
    block.resize(64, 64);
    block.x = xOff;
    block.y = yOffset;
    block.cornerRadius = r.value;
    block.fills = [{ type: "SOLID", color: hexToRgb("#182029") }];
    block.strokes = [{ type: "SOLID", color: ORANGE }];
    block.strokeWeight = 1;
    page.appendChild(block);

    const lbl = figma.createText();
    lbl.characters = r.value + "px";
    lbl.fontSize = 8;
    lbl.fontName = { family: "Inter", style: "Regular" };
    lbl.fills = [{ type: "SOLID", color: TEXT_PRIMARY }];
    lbl.x = xOff;
    lbl.y = yOffset + 72;
    page.appendChild(lbl);

    const nameLbl = figma.createText();
    nameLbl.characters = r.name.split("/")[1];
    nameLbl.fontSize = 8;
    nameLbl.fontName = { family: "Inter", style: "Bold" };
    nameLbl.fills = [{ type: "SOLID", color: TEXT_PRIMARY }];
    nameLbl.x = xOff;
    nameLbl.y = yOffset + 84;
    page.appendChild(nameLbl);

    xOff += 80;
  }
  yOffset += 120 + SECTION_GAP;

  // ── Elevation Levels ──
  yOffset += sectionLabel("ELEVATION / DEPTH", yOffset);
  const elevations = [
    { name: "Level 1 — Flat Card",     y: 1,  blur: 2,  spread: 0  },
    { name: "Level 2 — Hover/Dropdown",y: 4,  blur: 8,  spread: 0  },
    { name: "Level 3 — Modal/Overlay", y: 12, blur: 24, spread: 0  },
  ];
  xOff = 0;
  for (const el of elevations) {
    const card = figma.createFrame();
    card.name = el.name;
    card.resize(160, 100);
    card.x = xOff;
    card.y = yOffset;
    card.cornerRadius = 8;
    card.fills = [{ type: "SOLID", color: hexToRgb("#182029") }];
    card.strokes = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 0.1 }];
    card.strokeWeight = 1;
    card.effects = [{
      type: "DROP_SHADOW",
      color: { r: 0, g: 0, b: 0, a: 0.4 },
      offset: { x: 0, y: el.y },
      radius: el.blur,
      spread: el.spread,
      visible: true,
      blendMode: "NORMAL"
    }];

    const elLabel = figma.createText();
    elLabel.characters = el.name;
    elLabel.fontSize = 9;
    elLabel.fontName = { family: "Inter", style: "Regular" };
    elLabel.fills = [{ type: "SOLID", color: TEXT_PRIMARY }];
    elLabel.x = xOff;
    elLabel.y = yOffset + 108;
    page.appendChild(elLabel);

    page.appendChild(card);
    xOff += 180;
  }
  yOffset += 160 + SECTION_GAP;

  // ── Component: Buttons ──
  yOffset += sectionLabel("COMPONENTS — BUTTONS", yOffset);
  xOff = 0;

  // Primary button
  const primaryBtn = figma.createFrame();
  primaryBtn.name = "Button / Primary";
  primaryBtn.resize(140, 40);
  primaryBtn.x = xOff;
  primaryBtn.y = yOffset;
  primaryBtn.cornerRadius = 8;
  primaryBtn.fills = [{ type: "SOLID", color: hexToRgb("#ff5625") }];
  primaryBtn.layoutMode = "HORIZONTAL";
  primaryBtn.primaryAxisAlignItems = "CENTER";
  primaryBtn.counterAxisAlignItems = "CENTER";
  primaryBtn.paddingLeft = 16;
  primaryBtn.paddingRight = 16;
  const primaryBtnText = figma.createText();
  primaryBtnText.characters = "Primary Action";
  primaryBtnText.fontSize = 14;
  primaryBtnText.fontName = { family: "Inter", style: "Medium" };
  primaryBtnText.fills = [{ type: "SOLID", color: hexToRgb("#601400") }];
  primaryBtn.appendChild(primaryBtnText);
  page.appendChild(primaryBtn);

  const lbl1 = figma.createText();
  lbl1.characters = "Primary";
  lbl1.fontSize = 9;
  lbl1.fontName = { family: "Inter", style: "Regular" };
  lbl1.fills = [{ type: "SOLID", color: hexToRgb("#ad887e") }];
  lbl1.x = xOff;
  lbl1.y = yOffset + 48;
  page.appendChild(lbl1);

  xOff += 160;

  // Ghost button (Cyan)
  const ghostBtn = figma.createFrame();
  ghostBtn.name = "Button / Ghost";
  ghostBtn.resize(140, 40);
  ghostBtn.x = xOff;
  ghostBtn.y = yOffset;
  ghostBtn.cornerRadius = 8;
  ghostBtn.fills = [{ type: "SOLID", color: hexToRgb("#0c141d"), opacity: 0 }];
  ghostBtn.strokes = [{ type: "SOLID", color: CYAN }];
  ghostBtn.strokeWeight = 1;
  ghostBtn.layoutMode = "HORIZONTAL";
  ghostBtn.primaryAxisAlignItems = "CENTER";
  ghostBtn.counterAxisAlignItems = "CENTER";
  ghostBtn.paddingLeft = 16;
  ghostBtn.paddingRight = 16;
  const ghostBtnText = figma.createText();
  ghostBtnText.characters = "Ghost Action";
  ghostBtnText.fontSize = 14;
  ghostBtnText.fontName = { family: "Inter", style: "Medium" };
  ghostBtnText.fills = [{ type: "SOLID", color: CYAN }];
  ghostBtn.appendChild(ghostBtnText);
  page.appendChild(ghostBtn);

  const lbl2 = figma.createText();
  lbl2.characters = "Ghost (Cyan)";
  lbl2.fontSize = 9;
  lbl2.fontName = { family: "Inter", style: "Regular" };
  lbl2.fills = [{ type: "SOLID", color: hexToRgb("#ad887e") }];
  lbl2.x = xOff;
  lbl2.y = yOffset + 48;
  page.appendChild(lbl2);

  xOff += 160;

  // Disabled button
  const disabledBtn = figma.createFrame();
  disabledBtn.name = "Button / Disabled";
  disabledBtn.resize(140, 40);
  disabledBtn.x = xOff;
  disabledBtn.y = yOffset;
  disabledBtn.cornerRadius = 8;
  disabledBtn.fills = [{ type: "SOLID", color: hexToRgb("#ff5625"), opacity: 0.3 }];
  disabledBtn.layoutMode = "HORIZONTAL";
  disabledBtn.primaryAxisAlignItems = "CENTER";
  disabledBtn.counterAxisAlignItems = "CENTER";
  disabledBtn.paddingLeft = 16;
  disabledBtn.paddingRight = 16;
  const disabledBtnText = figma.createText();
  disabledBtnText.characters = "Disabled";
  disabledBtnText.fontSize = 14;
  disabledBtnText.fontName = { family: "Inter", style: "Medium" };
  disabledBtnText.fills = [{ type: "SOLID", color: hexToRgb("#601400"), opacity: 0.3 }];
  disabledBtn.appendChild(disabledBtnText);
  page.appendChild(disabledBtn);

  const lbl3 = figma.createText();
  lbl3.characters = "Disabled (30% opacity)";
  lbl3.fontSize = 9;
  lbl3.fontName = { family: "Inter", style: "Regular" };
  lbl3.fills = [{ type: "SOLID", color: hexToRgb("#ad887e") }];
  lbl3.x = xOff;
  lbl3.y = yOffset + 48;
  page.appendChild(lbl3);

  yOffset += 100 + SECTION_GAP;

  // ── Component: Glass Card ──
  yOffset += sectionLabel("COMPONENTS — GLASS CARD", yOffset);

  const glassCard = figma.createFrame();
  glassCard.name = "Card / Glass";
  glassCard.resize(320, 180);
  glassCard.x = 0;
  glassCard.y = yOffset;
  glassCard.cornerRadius = 8;
  glassCard.fills = [{ type: "SOLID", color: hexToRgb("#182029"), opacity: 0.6 }];
  glassCard.strokes = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 0.1 }];
  glassCard.strokeWeight = 1;
  glassCard.effects = [
    {
      type: "BACKGROUND_BLUR",
      radius: 12,
      visible: true
    },
    {
      type: "DROP_SHADOW",
      color: { r: 0, g: 0, b: 0, a: 0.4 },
      offset: { x: 0, y: 4 },
      radius: 8,
      spread: 0,
      visible: true,
      blendMode: "NORMAL"
    }
  ];
  glassCard.paddingLeft = 24;
  glassCard.paddingRight = 24;
  glassCard.paddingTop = 24;
  glassCard.paddingBottom = 24;
  glassCard.layoutMode = "VERTICAL";
  glassCard.itemSpacing = 12;

  const cardTitle = figma.createText();
  cardTitle.characters = "Glass Card Title";
  cardTitle.fontSize = 20;
  cardTitle.fontName = { family: "Inter", style: "Bold" };
  cardTitle.fills = [{ type: "SOLID", color: TEXT_PRIMARY }];
  glassCard.appendChild(cardTitle);

  const cardBody = figma.createText();
  cardBody.characters = "Glassmorphic surface with 60% opacity and 12px backdrop blur for depth layering.";
  cardBody.fontSize = 14;
  cardBody.fontName = { family: "Inter", style: "Regular" };
  cardBody.fills = [{ type: "SOLID", color: hexToRgb("#dbe3f0"), opacity: 0.7 }];
  cardBody.resize(272, cardBody.height);
  cardBody.textAutoResize = "HEIGHT";
  glassCard.appendChild(cardBody);

  page.appendChild(glassCard);
  yOffset += 220 + SECTION_GAP;

  // ── Component: Input ──
  yOffset += sectionLabel("COMPONENTS — INPUT", yOffset);

  const input = figma.createFrame();
  input.name = "Input / Default";
  input.resize(280, 44);
  input.x = 0;
  input.y = yOffset;
  input.cornerRadius = 8;
  input.fills = [{ type: "SOLID", color: hexToRgb("#070f17") }];
  input.strokes = [{ type: "SOLID", color: hexToRgb("#5d4038") }];
  input.strokeWeight = 1;
  input.paddingLeft = 16;
  input.paddingRight = 16;
  input.layoutMode = "HORIZONTAL";
  input.counterAxisAlignItems = "CENTER";

  const placeholder = figma.createText();
  placeholder.characters = "Placeholder text…";
  placeholder.fontSize = 16;
  placeholder.fontName = { family: "Inter", style: "Regular" };
  placeholder.fills = [{ type: "SOLID", color: hexToRgb("#dbe3f0"), opacity: 0.4 }];
  input.appendChild(placeholder);
  page.appendChild(input);

  const inputFocus = figma.createFrame();
  inputFocus.name = "Input / Focus";
  inputFocus.resize(280, 44);
  inputFocus.x = 300;
  inputFocus.y = yOffset;
  inputFocus.cornerRadius = 8;
  inputFocus.fills = [{ type: "SOLID", color: hexToRgb("#070f17") }];
  inputFocus.strokes = [{ type: "SOLID", color: hexToRgb("#ff5625") }];
  inputFocus.strokeWeight = 2;
  inputFocus.effects = [{
    type: "DROP_SHADOW",
    color: { r: 1, g: 0.337, b: 0.145, a: 0.3 },
    offset: { x: 0, y: 0 },
    radius: 8,
    spread: 2,
    visible: true,
    blendMode: "NORMAL"
  }];
  inputFocus.paddingLeft = 16;
  inputFocus.paddingRight = 16;
  inputFocus.layoutMode = "HORIZONTAL";
  inputFocus.counterAxisAlignItems = "CENTER";

  const focusText = figma.createText();
  focusText.characters = "Active input value";
  focusText.fontSize = 16;
  focusText.fontName = { family: "Inter", style: "Regular" };
  focusText.fills = [{ type: "SOLID", color: TEXT_PRIMARY }];
  inputFocus.appendChild(focusText);
  page.appendChild(inputFocus);

  yOffset += 100 + SECTION_GAP;

  // ── Component: Chips ──
  yOffset += sectionLabel("COMPONENTS — CHIPS / STATUS", yOffset);
  const chips = [
    { label: "Success",  bg: "#46eaed", text: "#003738" },
    { label: "Warning",  bg: "#ffb5a0", text: "#601400" },
    { label: "Error",    bg: "#ffb4ab", text: "#690005" },
    { label: "Neutral",  bg: "#c8c6c5", text: "#313030" },
  ];
  xOff = 0;
  for (const chip of chips) {
    const chipFrame = figma.createFrame();
    chipFrame.name = `Chip / ${chip.label}`;
    chipFrame.resize(80, 24);
    chipFrame.x = xOff;
    chipFrame.y = yOffset;
    chipFrame.cornerRadius = 9999;
    chipFrame.fills = [{ type: "SOLID", color: hexToRgb(chip.bg), opacity: 0.2 }];
    chipFrame.layoutMode = "HORIZONTAL";
    chipFrame.primaryAxisAlignItems = "CENTER";
    chipFrame.counterAxisAlignItems = "CENTER";

    const chipText = figma.createText();
    chipText.characters = chip.label;
    chipText.fontSize = 10;
    chipText.fontName = { family: "Inter", style: "Bold" };
    chipText.fills = [{ type: "SOLID", color: hexToRgb(chip.bg) }];
    chipText.letterSpacing = { value: 4, unit: "PERCENT" };
    chipFrame.appendChild(chipText);
    page.appendChild(chipFrame);
    xOff += 96;
  }

  yOffset += 80;

  // Background for entire page
  page.backgrounds = [{ type: "SOLID", color: BG }];

  figma.viewport.scrollAndZoomIntoView(page.children);
  return true;
}

// ─── Main Handler ─────────────────────────────────────────────────────────────

figma.ui.onmessage = async (msg) => {
  if (msg.type !== "build") return;

  try {
    sendProgress("Iniciando construcción del sistema…");

    const colorCount = await createColorStyles();
    sendProgress(`✓ ${colorCount} estilos de color creados`);

    const textCount = await createTextStyles();
    sendProgress(`✓ ${textCount} estilos de tipografía creados`);

    await buildDocumentationPage();
    sendProgress("✓ Página de documentación generada");

    figma.ui.postMessage({ type: "done" });
  } catch (err) {
    figma.ui.postMessage({ type: "error", message: err.message });
  }
};
