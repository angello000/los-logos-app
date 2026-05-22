// ============================================================
// Cine Colombia — Design System Installer
// Figma Plugin · Variables, Text Styles & Effect Styles
// ============================================================

figma.showUI(__html__, {
  width: 460,
  height: 620,
  title: 'Design System Installer',
});

// ─── Helpers ─────────────────────────────────────────────────

function parseHex(hex) {
  const c = hex.replace('#', '');
  if (c.length === 8) {
    return {
      r: parseInt(c.slice(0, 2), 16) / 255,
      g: parseInt(c.slice(2, 4), 16) / 255,
      b: parseInt(c.slice(4, 6), 16) / 255,
      a: parseInt(c.slice(6, 8), 16) / 255,
    };
  }
  return {
    r: parseInt(c.slice(0, 2), 16) / 255,
    g: parseInt(c.slice(2, 4), 16) / 255,
    b: parseInt(c.slice(4, 6), 16) / 255,
    a: 1,
  };
}

function send(type, message) {
  figma.ui.postMessage({ type, message });
}

// ─── COLOR TOKENS ────────────────────────────────────────────

const COLOR_TOKENS = {

  // ── PRIMARY — Gold / Amber (brand identity, CTAs, highlights)
  'Colors/Primary/50':  '#FFFAEB',
  'Colors/Primary/100': '#FFF0C0',
  'Colors/Primary/200': '#FFE080',
  'Colors/Primary/300': '#FFD040',
  'Colors/Primary/400': '#F5C018',
  'Colors/Primary/500': '#E8A81C',
  'Colors/Primary/600': '#C58A0A',
  'Colors/Primary/700': '#9E6C08',
  'Colors/Primary/800': '#7A5206',
  'Colors/Primary/900': '#5A3C04',

  // ── SECONDARY — Warm Dark Neutrals (surfaces, backgrounds)
  'Colors/Secondary/50':  '#F8F6F3',
  'Colors/Secondary/100': '#EDE9E4',
  'Colors/Secondary/200': '#D5CFC7',
  'Colors/Secondary/300': '#ADA7A0',
  'Colors/Secondary/400': '#7D7870',
  'Colors/Secondary/500': '#5A5650',
  'Colors/Secondary/600': '#413E3A',
  'Colors/Secondary/700': '#2C2A26',
  'Colors/Secondary/800': '#1C1917',
  'Colors/Secondary/900': '#0D0B08',

  // ── TERTIARY — Royal Blue (active states, showtimes, featured)
  'Colors/Tertiary/50':  '#EFF6FF',
  'Colors/Tertiary/100': '#DBEAFE',
  'Colors/Tertiary/200': '#BFDBFE',
  'Colors/Tertiary/300': '#93C5FD',
  'Colors/Tertiary/400': '#60A5FA',
  'Colors/Tertiary/500': '#3B82F6',
  'Colors/Tertiary/600': '#2563EB',
  'Colors/Tertiary/700': '#1D4ED8',
  'Colors/Tertiary/800': '#1E40AF',
  'Colors/Tertiary/900': '#1E3A8A',

  // ── SEMANTIC — Success
  'Colors/Semantic/Success/Light':   '#F0FDF4',
  'Colors/Semantic/Success/Default': '#22C55E',
  'Colors/Semantic/Success/Dark':    '#166534',

  // ── SEMANTIC — Warning
  'Colors/Semantic/Warning/Light':   '#FFFBEB',
  'Colors/Semantic/Warning/Default': '#F59E0B',
  'Colors/Semantic/Warning/Dark':    '#92400E',

  // ── SEMANTIC — Error
  'Colors/Semantic/Error/Light':   '#FFF1F2',
  'Colors/Semantic/Error/Default': '#EF4444',
  'Colors/Semantic/Error/Dark':    '#991B1B',

  // ── SEMANTIC — Info
  'Colors/Semantic/Info/Light':   '#EFF6FF',
  'Colors/Semantic/Info/Default': '#3B82F6',
  'Colors/Semantic/Info/Dark':    '#1E3A8A',

  // ── SURFACE
  'Colors/Surface/Background': '#0D0B08',
  'Colors/Surface/Surface-1':  '#141210',
  'Colors/Surface/Surface-2':  '#1C1917',
  'Colors/Surface/Surface-3':  '#252220',
  'Colors/Surface/Surface-4':  '#302D29',
  'Colors/Surface/Overlay':    '#000000A0',

  // ── TEXT
  'Colors/Text/Primary':   '#FFFFFF',
  'Colors/Text/Secondary': '#ADA7A0',
  'Colors/Text/Tertiary':  '#7D7870',
  'Colors/Text/Disabled':  '#5A5650',
  'Colors/Text/Inverse':   '#0D0B08',
  'Colors/Text/Brand':     '#E8A81C',

  // ── STATES
  'Colors/States/Link/Default':         '#F5C018',
  'Colors/States/Link/Hover':           '#FFD040',
  'Colors/States/Link/Visited':         '#C58A0A',
  'Colors/States/Link/Disabled':        '#5A5650',
  'Colors/States/Focus/Ring':           '#F5C018',
  'Colors/States/Disabled/Background':  '#413E3A',
  'Colors/States/Disabled/Foreground':  '#7D7870',
  'Colors/States/On-Button':            '#0D0B08',
  'Colors/States/On-Disabled-Button':   '#5A5650',

  // ── BADGES
  'Colors/Badges/Platinum/Background':  '#D5D0C8',
  'Colors/Badges/Platinum/Text':        '#1C1917',
  'Colors/Badges/MegaSala/Background':  '#DC2626',
  'Colors/Badges/MegaSala/Text':        '#FFFFFF',
  'Colors/Badges/Featured/Background':  '#E8A81C',
  'Colors/Badges/Featured/Text':        '#0D0B08',
};

// ─── NUMBER TOKENS ───────────────────────────────────────────

const NUMBER_TOKENS = {

  // ── SPACING (4px base grid)
  'Spacing/0':    0,
  'Spacing/0-5':  2,
  'Spacing/1':    4,
  'Spacing/1-5':  6,
  'Spacing/2':    8,
  'Spacing/2-5':  10,
  'Spacing/3':    12,
  'Spacing/3-5':  14,
  'Spacing/4':    16,
  'Spacing/5':    20,
  'Spacing/6':    24,
  'Spacing/7':    28,
  'Spacing/8':    32,
  'Spacing/9':    36,
  'Spacing/10':   40,
  'Spacing/11':   44,
  'Spacing/12':   48,
  'Spacing/14':   56,
  'Spacing/16':   64,
  'Spacing/18':   72,
  'Spacing/20':   80,
  'Spacing/24':   96,
  'Spacing/28':  112,
  'Spacing/32':  128,

  // ── BORDER RADIUS
  'Border-Radius/None':  0,
  'Border-Radius/XS':    2,
  'Border-Radius/SM':    4,
  'Border-Radius/MD':    8,
  'Border-Radius/LG':   12,
  'Border-Radius/XL':   16,
  'Border-Radius/2XL':  20,
  'Border-Radius/3XL':  24,
  'Border-Radius/4XL':  32,
  'Border-Radius/Full': 9999,

  // ── BORDER WIDTH
  'Border-Width/0': 0,
  'Border-Width/1': 1,
  'Border-Width/2': 2,
  'Border-Width/4': 4,
  'Border-Width/8': 8,

  // ── ICON SIZES
  'Icons/XS':  12,
  'Icons/SM':  16,
  'Icons/MD':  20,
  'Icons/LG':  24,
  'Icons/XL':  32,
  'Icons/2XL': 40,
  'Icons/3XL': 48,

  // ── FONT SIZES
  'Typography/Font-Size/2XS': 10,
  'Typography/Font-Size/XS':  12,
  'Typography/Font-Size/SM':  14,
  'Typography/Font-Size/MD':  16,
  'Typography/Font-Size/LG':  18,
  'Typography/Font-Size/XL':  20,
  'Typography/Font-Size/2XL': 24,
  'Typography/Font-Size/3XL': 28,
  'Typography/Font-Size/4XL': 32,
  'Typography/Font-Size/5XL': 40,
  'Typography/Font-Size/6XL': 48,
  'Typography/Font-Size/7XL': 56,
  'Typography/Font-Size/8XL': 64,
  'Typography/Font-Size/9XL': 72,

  // ── LINE HEIGHTS (px)
  'Typography/Line-Height/2XS': 14,
  'Typography/Line-Height/XS':  18,
  'Typography/Line-Height/SM':  20,
  'Typography/Line-Height/MD':  22,
  'Typography/Line-Height/LG':  24,
  'Typography/Line-Height/XL':  28,
  'Typography/Line-Height/2XL': 32,
  'Typography/Line-Height/3XL': 36,
  'Typography/Line-Height/4XL': 40,
  'Typography/Line-Height/5XL': 48,
  'Typography/Line-Height/6XL': 56,
  'Typography/Line-Height/7XL': 62,
  'Typography/Line-Height/8XL': 70,
  'Typography/Line-Height/9XL': 79,

  // ── PARAGRAPH SPACING
  'Typography/Paragraph-Spacing/SM':  8,
  'Typography/Paragraph-Spacing/MD': 16,
  'Typography/Paragraph-Spacing/LG': 24,
};

// ─── STRING TOKENS ───────────────────────────────────────────

const STRING_TOKENS = {
  'Typography/Font-Family/Primary': 'Roboto',
  'Typography/Font-Family/Mono':    'Roboto Mono',
};

// ─── TEXT STYLE DEFINITIONS ──────────────────────────────────
// weight: Figma font style string
// lineHeight: px value
// letterSpacing: % value (negative = tighter)
// paragraph: paragraphSpacing in px

const TEXT_STYLES = [
  // Display
  { name: 'Display/9XL', size: 72, weight: 'Black',   lineHeight: 79,  letterSpacing: -2.0, paragraph: 0  },
  { name: 'Display/8XL', size: 64, weight: 'Black',   lineHeight: 70,  letterSpacing: -1.5, paragraph: 0  },
  { name: 'Display/7XL', size: 56, weight: 'Bold',    lineHeight: 62,  letterSpacing: -1.0, paragraph: 0  },

  // Headings
  { name: 'Heading/H1',  size: 40, weight: 'Bold',    lineHeight: 48,  letterSpacing: -0.5, paragraph: 0  },
  { name: 'Heading/H2',  size: 32, weight: 'Bold',    lineHeight: 40,  letterSpacing:  0.0, paragraph: 0  },
  { name: 'Heading/H3',  size: 28, weight: 'Bold',    lineHeight: 36,  letterSpacing:  0.0, paragraph: 0  },
  { name: 'Heading/H4',  size: 24, weight: 'Medium',  lineHeight: 32,  letterSpacing:  0.0, paragraph: 0  },
  { name: 'Heading/H5',  size: 20, weight: 'Medium',  lineHeight: 28,  letterSpacing:  0.0, paragraph: 0  },
  { name: 'Heading/H6',  size: 18, weight: 'Medium',  lineHeight: 24,  letterSpacing:  0.0, paragraph: 0  },

  // Body
  { name: 'Body/XL',     size: 20, weight: 'Regular', lineHeight: 32,  letterSpacing:  0.0, paragraph: 16 },
  { name: 'Body/LG',     size: 18, weight: 'Regular', lineHeight: 28,  letterSpacing:  0.0, paragraph: 16 },
  { name: 'Body/MD',     size: 16, weight: 'Regular', lineHeight: 24,  letterSpacing:  0.0, paragraph: 16 },
  { name: 'Body/SM',     size: 14, weight: 'Regular', lineHeight: 22,  letterSpacing:  0.0, paragraph: 12 },
  { name: 'Body/XS',     size: 12, weight: 'Regular', lineHeight: 18,  letterSpacing:  0.0, paragraph: 8  },

  // Label
  { name: 'Label/LG',    size: 16, weight: 'Medium',  lineHeight: 22,  letterSpacing:  2.0, paragraph: 0  },
  { name: 'Label/MD',    size: 14, weight: 'Medium',  lineHeight: 20,  letterSpacing:  2.0, paragraph: 0  },
  { name: 'Label/SM',    size: 12, weight: 'Medium',  lineHeight: 18,  letterSpacing:  2.0, paragraph: 0  },
  { name: 'Label/XS',    size: 10, weight: 'Medium',  lineHeight: 16,  letterSpacing:  2.0, paragraph: 0  },

  // Caption
  { name: 'Caption/MD',  size: 12, weight: 'Regular', lineHeight: 18,  letterSpacing:  0.0, paragraph: 0  },
  { name: 'Caption/SM',  size: 10, weight: 'Regular', lineHeight: 14,  letterSpacing:  0.0, paragraph: 0  },

  // Overline
  { name: 'Overline/MD', size: 12, weight: 'Medium',  lineHeight: 18,  letterSpacing:  8.0, paragraph: 0, uppercase: true },
  { name: 'Overline/SM', size: 10, weight: 'Medium',  lineHeight: 16,  letterSpacing:  8.0, paragraph: 0, uppercase: true },
];

// ─── EFFECT STYLE DEFINITIONS ────────────────────────────────

const EFFECT_STYLES = [
  {
    name: 'Shadows/XS',
    effects: [{
      type: 'DROP_SHADOW',
      color: { r: 0, g: 0, b: 0, a: 0.60 },
      offset: { x: 0, y: 1 },
      radius: 2, spread: 0,
      visible: true, blendMode: 'NORMAL',
    }],
  },
  {
    name: 'Shadows/SM',
    effects: [{
      type: 'DROP_SHADOW',
      color: { r: 0, g: 0, b: 0, a: 0.60 },
      offset: { x: 0, y: 2 },
      radius: 4, spread: -1,
      visible: true, blendMode: 'NORMAL',
    }],
  },
  {
    name: 'Shadows/MD',
    effects: [{
      type: 'DROP_SHADOW',
      color: { r: 0, g: 0, b: 0, a: 0.70 },
      offset: { x: 0, y: 4 },
      radius: 8, spread: -2,
      visible: true, blendMode: 'NORMAL',
    }],
  },
  {
    name: 'Shadows/LG',
    effects: [{
      type: 'DROP_SHADOW',
      color: { r: 0, g: 0, b: 0, a: 0.70 },
      offset: { x: 0, y: 8 },
      radius: 16, spread: -4,
      visible: true, blendMode: 'NORMAL',
    }],
  },
  {
    name: 'Shadows/XL',
    effects: [{
      type: 'DROP_SHADOW',
      color: { r: 0, g: 0, b: 0, a: 0.80 },
      offset: { x: 0, y: 16 },
      radius: 32, spread: -8,
      visible: true, blendMode: 'NORMAL',
    }],
  },
  {
    name: 'Shadows/2XL',
    effects: [{
      type: 'DROP_SHADOW',
      color: { r: 0, g: 0, b: 0, a: 0.80 },
      offset: { x: 0, y: 24 },
      radius: 48, spread: -12,
      visible: true, blendMode: 'NORMAL',
    }],
  },
  {
    name: 'Shadows/Inner',
    effects: [{
      type: 'INNER_SHADOW',
      color: { r: 0, g: 0, b: 0, a: 0.60 },
      offset: { x: 0, y: 2 },
      radius: 4, spread: 0,
      visible: true, blendMode: 'NORMAL',
    }],
  },
  {
    name: 'Shadows/Gold-Glow',
    effects: [{
      type: 'DROP_SHADOW',
      color: { r: 0.910, g: 0.659, b: 0.110, a: 0.35 },
      offset: { x: 0, y: 0 },
      radius: 20, spread: 0,
      visible: true, blendMode: 'NORMAL',
    }],
  },
  {
    name: 'Shadows/Card',
    effects: [
      {
        type: 'DROP_SHADOW',
        color: { r: 0, g: 0, b: 0, a: 0.40 },
        offset: { x: 0, y: 2 },
        radius: 4, spread: 0,
        visible: true, blendMode: 'NORMAL',
      },
      {
        type: 'DROP_SHADOW',
        color: { r: 0, g: 0, b: 0, a: 0.20 },
        offset: { x: 0, y: 8 },
        radius: 16, spread: -4,
        visible: true, blendMode: 'NORMAL',
      },
    ],
  },
];

// ─── INSTALLERS ──────────────────────────────────────────────

function installColors() {
  const col = figma.variables.createVariableCollection('Colors');
  col.renameMode(col.defaultModeId, 'Default');
  const mid = col.defaultModeId;

  for (const [name, hex] of Object.entries(COLOR_TOKENS)) {
    const v = figma.variables.createVariable(name, col, 'COLOR');
    v.setValueForMode(mid, parseHex(hex));
  }
}

function installPrimitives() {
  const col = figma.variables.createVariableCollection('Primitives');
  col.renameMode(col.defaultModeId, 'Default');
  const mid = col.defaultModeId;

  for (const [name, value] of Object.entries(NUMBER_TOKENS)) {
    const v = figma.variables.createVariable(name, col, 'FLOAT');
    v.setValueForMode(mid, value);
  }
  for (const [name, value] of Object.entries(STRING_TOKENS)) {
    const v = figma.variables.createVariable(name, col, 'STRING');
    v.setValueForMode(mid, value);
  }
}

async function installTextStyles() {
  await Promise.all([
    figma.loadFontAsync({ family: 'Roboto', style: 'Regular' }),
    figma.loadFontAsync({ family: 'Roboto', style: 'Medium' }),
    figma.loadFontAsync({ family: 'Roboto', style: 'Bold' }),
    figma.loadFontAsync({ family: 'Roboto', style: 'Black' }),
  ]);

  for (const def of TEXT_STYLES) {
    const style = figma.createTextStyle();
    style.name = def.name;
    style.fontName         = { family: 'Roboto', style: def.weight };
    style.fontSize         = def.size;
    style.lineHeight       = { unit: 'PIXELS', value: def.lineHeight };
    style.letterSpacing    = { unit: 'PERCENT', value: def.letterSpacing };
    style.paragraphSpacing = def.paragraph;
    if (def.uppercase) style.textCase = 'UPPER';
  }
}

function installEffectStyles() {
  for (const def of EFFECT_STYLES) {
    const style = figma.createEffectStyle();
    style.name    = def.name;
    style.effects = def.effects;
  }
}

// ─── MAIN ────────────────────────────────────────────────────

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'install') {
    try {
      send('progress', 'Creando variables de color…');
      installColors();

      send('progress', 'Creando variables primitivas…');
      installPrimitives();

      send('progress', 'Creando estilos de texto (Roboto)…');
      await installTextStyles();

      send('progress', 'Creando estilos de efectos…');
      installEffectStyles();

      send('done', 'Sistema de diseño instalado correctamente.');
    } catch (err) {
      send('error', err.message || 'Error desconocido');
    }
  }

  if (msg.type === 'close') {
    figma.closePlugin();
  }
};
