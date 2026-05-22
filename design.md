# Cine Colombia — Design System

> **Tipografía:** Roboto · **Tema:** Dark Premium · **Grid base:** 4 px

---

## Tabla de contenidos

1. [Colores](#1-colores)
   - [Primarios](#primarios--gold--amber)
   - [Secundarios](#secundarios--warm-dark-neutrals)
   - [Terciarios](#terciarios--royal-blue)
   - [Semánticos](#semánticos)
   - [Superficie](#superficie)
   - [Texto](#texto)
   - [Estados](#estados)
2. [Tipografía](#2-tipografía)
   - [Font Family](#font-family)
   - [Font Weight](#font-weight)
   - [Font Size](#font-size)
   - [Line Height](#line-height)
   - [Letter Spacing](#letter-spacing)
   - [Paragraph Spacing](#paragraph-spacing)
   - [Estilos de texto](#estilos-de-texto)
3. [Espaciado](#3-espaciado)
4. [Bordes](#4-bordes)
   - [Border Radius](#border-radius)
   - [Border Width](#border-width)
5. [Iconos](#5-iconos)
6. [Sombras](#6-sombras)
7. [Instalación en Figma](#7-instalación-en-figma)

---

## 1. Colores

### Primarios · Gold / Amber

Identidad de marca. Usado en CTAs, asientos seleccionados, highlights y elementos de énfasis.

| Token | Hex | Uso |
|---|---|---|
| `Colors/Primary/50` | `#FFFAEB` | Tint ultralight |
| `Colors/Primary/100` | `#FFF0C0` | Tint light |
| `Colors/Primary/200` | `#FFE080` | Tint medium |
| `Colors/Primary/300` | `#FFD040` | Tint |
| `Colors/Primary/400` | `#F5C018` | Gold claro — links, iconos activos |
| `Colors/Primary/500` | `#E8A81C` | **Brand gold** — botones CTA, highlights |
| `Colors/Primary/600` | `#C58A0A` | Gold oscuro — hover, pressed |
| `Colors/Primary/700` | `#9E6C08` | Gold profundo |
| `Colors/Primary/800` | `#7A5206` | Shade dark |
| `Colors/Primary/900` | `#5A3C04` | Shade darkest |

---

### Secundarios · Warm Dark Neutrals

Paleta de superficies y fondos del tema oscuro. Tono cálido ligeramente marrón.

| Token | Hex | Uso |
|---|---|---|
| `Colors/Secondary/50` | `#F8F6F3` | Texto inversión / fondos light |
| `Colors/Secondary/100` | `#EDE9E4` | — |
| `Colors/Secondary/200` | `#D5CFC7` | — |
| `Colors/Secondary/300` | `#ADA7A0` | Texto secundario |
| `Colors/Secondary/400` | `#7D7870` | Texto terciario / iconos |
| `Colors/Secondary/500` | `#5A5650` | Texto deshabilitado |
| `Colors/Secondary/600` | `#413E3A` | Bordes / disabled background |
| `Colors/Secondary/700` | `#2C2A26` | Superficie elevada |
| `Colors/Secondary/800` | `#1C1917` | **Superficie principal** — tarjetas |
| `Colors/Secondary/900` | `#0D0B08` | **Fondo principal** — background |

---

### Terciarios · Royal Blue

Acento para estados activos, showtimes seleccionados y CTAs secundarios.

| Token | Hex | Uso |
|---|---|---|
| `Colors/Tertiary/50` | `#EFF6FF` | — |
| `Colors/Tertiary/100` | `#DBEAFE` | — |
| `Colors/Tertiary/200` | `#BFDBFE` | — |
| `Colors/Tertiary/300` | `#93C5FD` | — |
| `Colors/Tertiary/400` | `#60A5FA` | — |
| `Colors/Tertiary/500` | `#3B82F6` | Botón "Ver Cartelera" / info |
| `Colors/Tertiary/600` | `#2563EB` | — |
| `Colors/Tertiary/700` | `#1D4ED8` | — |
| `Colors/Tertiary/800` | `#1E40AF` | — |
| `Colors/Tertiary/900` | `#1E3A8A` | **Deep blue** — CTA showtimes activo |

---

### Semánticos

#### Success
| Token | Hex |
|---|---|
| `Colors/Semantic/Success/Light` | `#F0FDF4` |
| `Colors/Semantic/Success/Default` | `#22C55E` |
| `Colors/Semantic/Success/Dark` | `#166534` |

#### Warning
| Token | Hex |
|---|---|
| `Colors/Semantic/Warning/Light` | `#FFFBEB` |
| `Colors/Semantic/Warning/Default` | `#F59E0B` |
| `Colors/Semantic/Warning/Dark` | `#92400E` |

#### Error
| Token | Hex |
|---|---|
| `Colors/Semantic/Error/Light` | `#FFF1F2` |
| `Colors/Semantic/Error/Default` | `#EF4444` |
| `Colors/Semantic/Error/Dark` | `#991B1B` |

#### Info
| Token | Hex |
|---|---|
| `Colors/Semantic/Info/Light` | `#EFF6FF` |
| `Colors/Semantic/Info/Default` | `#3B82F6` |
| `Colors/Semantic/Info/Dark` | `#1E3A8A` |

---

### Superficie

| Token | Hex | Uso |
|---|---|---|
| `Colors/Surface/Background` | `#0D0B08` | Fondo principal de la app |
| `Colors/Surface/Surface-1` | `#141210` | Capa 1 sobre fondo |
| `Colors/Surface/Surface-2` | `#1C1917` | Tarjetas, modales, panels |
| `Colors/Surface/Surface-3` | `#252220` | Items de lista, inputs |
| `Colors/Surface/Surface-4` | `#302D29` | Hover states, tooltips |
| `Colors/Surface/Overlay` | `#000000A0` | Overlay / backdrop (62.5% opacidad) |

---

### Texto

| Token | Hex | Uso |
|---|---|---|
| `Colors/Text/Primary` | `#FFFFFF` | Títulos, texto principal |
| `Colors/Text/Secondary` | `#ADA7A0` | Descripciones, subtítulos |
| `Colors/Text/Tertiary` | `#7D7870` | Metadatos, placeholders |
| `Colors/Text/Disabled` | `#5A5650` | Texto inactivo |
| `Colors/Text/Inverse` | `#0D0B08` | Texto sobre fondos claros (botones) |
| `Colors/Text/Brand` | `#E8A81C` | Texto de marca / énfasis dorado |

---

### Estados

| Token | Hex | Uso |
|---|---|---|
| `Colors/States/Link/Default` | `#F5C018` | Link normal |
| `Colors/States/Link/Hover` | `#FFD040` | Link hover |
| `Colors/States/Link/Visited` | `#C58A0A` | Link visitado |
| `Colors/States/Link/Disabled` | `#5A5650` | Link deshabilitado |
| `Colors/States/Focus/Ring` | `#F5C018` | Focus ring (outline 2–3 px) |
| `Colors/States/Disabled/Background` | `#413E3A` | Fondo elemento deshabilitado |
| `Colors/States/Disabled/Foreground` | `#7D7870` | Texto/icono deshabilitado |
| `Colors/States/On-Button` | `#0D0B08` | Texto sobre botón primario activo |
| `Colors/States/On-Disabled-Button` | `#5A5650` | Texto sobre botón deshabilitado |

---

## 2. Tipografía

### Font Family

| Token | Valor |
|---|---|
| `Typography/Font-Family/Primary` | `Roboto` |
| `Typography/Font-Family/Mono` | `Roboto Mono` |

### Font Weight

| Token | Valor | Nombre |
|---|---|---|
| `fontWeight/regular` | `400` | Regular |
| `fontWeight/medium` | `500` | Medium |
| `fontWeight/bold` | `700` | Bold |
| `fontWeight/black` | `900` | Black |

---

### Font Size

| Token | px | Uso |
|---|---|---|
| `Typography/Font-Size/2XS` | `10` | Micro labels, badges |
| `Typography/Font-Size/XS` | `12` | Captions, timestamps |
| `Typography/Font-Size/SM` | `14` | Body small, labels |
| `Typography/Font-Size/MD` | `16` | Body base |
| `Typography/Font-Size/LG` | `18` | Body large |
| `Typography/Font-Size/XL` | `20` | Body XL, H5 |
| `Typography/Font-Size/2XL` | `24` | H4 |
| `Typography/Font-Size/3XL` | `28` | H3 |
| `Typography/Font-Size/4XL` | `32` | H2 |
| `Typography/Font-Size/5XL` | `40` | H1 |
| `Typography/Font-Size/6XL` | `48` | Display SM |
| `Typography/Font-Size/7XL` | `56` | Display MD |
| `Typography/Font-Size/8XL` | `64` | Display LG |
| `Typography/Font-Size/9XL` | `72` | Display XL — Movie titles |

---

### Line Height

| Token | Multiplicador | px (ref. 16px) |
|---|---|---|
| `Typography/Line-Height/2XS` | — | `14` |
| `Typography/Line-Height/XS` | — | `18` |
| `Typography/Line-Height/SM` | — | `20` |
| `Typography/Line-Height/MD` | — | `22` |
| `Typography/Line-Height/LG` | — | `24` |
| `Typography/Line-Height/XL` | — | `28` |
| `Typography/Line-Height/2XL` | `1.5×` | `32` |
| `Typography/Line-Height/3XL` | — | `36` |
| `Typography/Line-Height/4XL` | — | `40` |
| `Typography/Line-Height/5XL` | — | `48` |
| `Typography/Line-Height/6XL` | — | `56` |
| `Typography/Line-Height/7XL` | — | `62` |
| `Typography/Line-Height/8XL` | — | `70` |
| `Typography/Line-Height/9XL` | `1.1×` | `79` |

---

### Letter Spacing

| Token | Valor | Uso |
|---|---|---|
| `letterSpacing/tightest` | `-2%` | Display 9XL |
| `letterSpacing/tighter` | `-1.5%` | Display 8XL |
| `letterSpacing/tight` | `-0.5%` | H1 |
| `letterSpacing/normal` | `0%` | Body, H2–H6 |
| `letterSpacing/wide` | `2%` | Labels |
| `letterSpacing/wider` | `4%` | — |
| `letterSpacing/widest` | `8%` | Overline (UPPERCASE) |

---

### Paragraph Spacing

| Token | px |
|---|---|
| `Typography/Paragraph-Spacing/SM` | `8` |
| `Typography/Paragraph-Spacing/MD` | `16` |
| `Typography/Paragraph-Spacing/LG` | `24` |

---

### Estilos de Texto

#### Display

| Nombre | Size | Weight | Line H | Letter S | Uso |
|---|---|---|---|---|---|
| `Display/9XL` | 72 | Black | 79 px | −2% | Títulos de película hero |
| `Display/8XL` | 64 | Black | 70 px | −1.5% | — |
| `Display/7XL` | 56 | Bold | 62 px | −1% | Subtítulos de pantalla completa |

#### Headings

| Nombre | Size | Weight | Line H | Letter S |
|---|---|---|---|---|
| `Heading/H1` | 40 | Bold | 48 px | −0.5% |
| `Heading/H2` | 32 | Bold | 40 px | 0% |
| `Heading/H3` | 28 | Bold | 36 px | 0% |
| `Heading/H4` | 24 | Medium | 32 px | 0% |
| `Heading/H5` | 20 | Medium | 28 px | 0% |
| `Heading/H6` | 18 | Medium | 24 px | 0% |

#### Body

| Nombre | Size | Weight | Line H | P. Spacing |
|---|---|---|---|---|
| `Body/XL` | 20 | Regular | 32 px | 16 px |
| `Body/LG` | 18 | Regular | 28 px | 16 px |
| `Body/MD` | 16 | Regular | 24 px | 16 px |
| `Body/SM` | 14 | Regular | 22 px | 12 px |
| `Body/XS` | 12 | Regular | 18 px | 8 px |

#### Labels

| Nombre | Size | Weight | Line H | Letter S |
|---|---|---|---|---|
| `Label/LG` | 16 | Medium | 22 px | 2% |
| `Label/MD` | 14 | Medium | 20 px | 2% |
| `Label/SM` | 12 | Medium | 18 px | 2% |
| `Label/XS` | 10 | Medium | 16 px | 2% |

#### Captions & Overline

| Nombre | Size | Weight | Line H | Notas |
|---|---|---|---|---|
| `Caption/MD` | 12 | Regular | 18 px | — |
| `Caption/SM` | 10 | Regular | 14 px | — |
| `Overline/MD` | 12 | Medium | 18 px | UPPERCASE · 8% tracking |
| `Overline/SM` | 10 | Medium | 16 px | UPPERCASE · 8% tracking |

---

## 3. Espaciado

Grid base: **4 px**. Escala multiplicativa para layouts, padding y gaps.

| Token | px | rem |
|---|---|---|
| `Spacing/0` | 0 | 0 |
| `Spacing/0-5` | 2 | 0.125 |
| `Spacing/1` | 4 | 0.25 |
| `Spacing/1-5` | 6 | 0.375 |
| `Spacing/2` | 8 | 0.5 |
| `Spacing/2-5` | 10 | 0.625 |
| `Spacing/3` | 12 | 0.75 |
| `Spacing/3-5` | 14 | 0.875 |
| `Spacing/4` | 16 | 1 |
| `Spacing/5` | 20 | 1.25 |
| `Spacing/6` | 24 | 1.5 |
| `Spacing/7` | 28 | 1.75 |
| `Spacing/8` | 32 | 2 |
| `Spacing/9` | 36 | 2.25 |
| `Spacing/10` | 40 | 2.5 |
| `Spacing/11` | 44 | 2.75 |
| `Spacing/12` | 48 | 3 |
| `Spacing/14` | 56 | 3.5 |
| `Spacing/16` | 64 | 4 |
| `Spacing/18` | 72 | 4.5 |
| `Spacing/20` | 80 | 5 |
| `Spacing/24` | 96 | 6 |
| `Spacing/28` | 112 | 7 |
| `Spacing/32` | 128 | 8 |

---

## 4. Bordes

### Border Radius

| Token | px | Uso |
|---|---|---|
| `Border-Radius/None` | 0 | Elementos sin redondeo |
| `Border-Radius/XS` | 2 | Tags, chips pequeños |
| `Border-Radius/SM` | 4 | Inputs, badges |
| `Border-Radius/MD` | 8 | Botones, cards pequeñas |
| `Border-Radius/LG` | 12 | Cards, modales |
| `Border-Radius/XL` | 16 | Sheets, panels |
| `Border-Radius/2XL` | 20 | — |
| `Border-Radius/3XL` | 24 | Modales grandes |
| `Border-Radius/4XL` | 32 | Banners hero |
| `Border-Radius/Full` | 9999 | Avatares, pills, toggles |

### Border Width

| Token | px | Uso |
|---|---|---|
| `Border-Width/0` | 0 | Sin borde |
| `Border-Width/1` | 1 | Borde estándar — separadores, inputs |
| `Border-Width/2` | 2 | Borde énfasis — focus, seleccionado |
| `Border-Width/4` | 4 | Borde grueso — destacado |
| `Border-Width/8` | 8 | Borde decorativo |

---

## 5. Iconos

Sistema de iconos en tamaños fijos sobre grid de 4 px.

| Token | px | Uso |
|---|---|---|
| `Icons/XS` | 12 | Indicadores micro, badges |
| `Icons/SM` | 16 | Iconos en texto, labels |
| `Icons/MD` | 20 | **Default** — navegación, botones |
| `Icons/LG` | 24 | Iconos standalone, acciones |
| `Icons/XL` | 32 | Feature icons, empty states |
| `Icons/2XL` | 40 | Ilustraciones funcionales |
| `Icons/3XL` | 48 | Iconos de sección hero |

---

## 6. Sombras

Optimizadas para fondo oscuro. Opacidad alta porque sobre dark el contraste es bajo.

| Nombre | Definición CSS | Uso |
|---|---|---|
| `Shadows/XS` | `0 1px 2px rgba(0,0,0,.60)` | Hover sutil, floating |
| `Shadows/SM` | `0 2px 4px -1px rgba(0,0,0,.60)` | Dropdowns, tooltips |
| `Shadows/MD` | `0 4px 8px -2px rgba(0,0,0,.70)` | Cards, botones flotantes |
| `Shadows/LG` | `0 8px 16px -4px rgba(0,0,0,.70)` | Modales, drawer |
| `Shadows/XL` | `0 16px 32px -8px rgba(0,0,0,.80)` | Full-screen overlays |
| `Shadows/2XL` | `0 24px 48px -12px rgba(0,0,0,.80)` | Hero banners |
| `Shadows/Inner` | `inset 0 2px 4px rgba(0,0,0,.60)` | Inputs, pressed states |
| `Shadows/Gold-Glow` | `0 0 20px rgba(232,168,28,.35)` | Botón CTA activo, selected seat |
| `Shadows/Card` | `0 2px 4px rgba(0,0,0,.40), 0 8px 16px -4px rgba(0,0,0,.20)` | Movie cards con depth |

---

## 7. Instalación en Figma

### Opción A — Plugin local (recomendado para crear variables automáticamente)

1. Abre Figma Desktop App
2. Ve a **Figma Menu → Plugins → Development → Import plugin from manifest…**
3. Selecciona el archivo `design-system/manifest.json`
4. Abre cualquier archivo Figma
5. Ejecuta el plugin desde **Plugins → Development → Cine Colombia — Design System Installer**
6. Haz clic en **"Instalar Design System"**
7. El plugin creará automáticamente:
   - Colección `Colors` con **68 variables** de color
   - Colección `Primitives` con **67 variables** numéricas y de string
   - **22 estilos de texto** Roboto
   - **9 estilos de efecto** (sombras)

### Opción B — Token Studio / Figma Tokens (importar tokens.json)

1. Instala el plugin **"Token Studio for Figma"** desde Figma Community
2. Abre el panel de Token Studio
3. Ve a **Settings → Import** y carga el archivo `design-system/tokens.json`
4. Aplica los token sets: `global`, `semantic`, `components`
5. Usa **"Create styles"** para generar estilos de Figma desde los tokens

### Opción C — Manual

Usa este documento como referencia para crear variables y estilos manualmente en Figma mediante **Design → Local Variables** y **Assets → Local Styles**.

---

### Estructura de colecciones en Figma

```
Variables
├── Colors (collection)
│   ├── Colors/Primary/50 … 900         (10 vars)
│   ├── Colors/Secondary/50 … 900       (10 vars)
│   ├── Colors/Tertiary/50 … 900        (10 vars)
│   ├── Colors/Semantic/Success/…        (3 vars)
│   ├── Colors/Semantic/Warning/…        (3 vars)
│   ├── Colors/Semantic/Error/…          (3 vars)
│   ├── Colors/Semantic/Info/…           (3 vars)
│   ├── Colors/Surface/…                 (6 vars)
│   ├── Colors/Text/…                    (6 vars)
│   ├── Colors/States/…                  (9 vars)
│   └── Colors/Badges/…                  (6 vars)
│
└── Primitives (collection)
    ├── Spacing/0 … 32                  (25 vars)
    ├── Border-Radius/None … Full       (10 vars)
    ├── Border-Width/0 … 8              (5 vars)
    ├── Icons/XS … 3XL                  (7 vars)
    ├── Typography/Font-Size/2XS … 9XL (14 vars)
    ├── Typography/Line-Height/…        (14 vars)
    ├── Typography/Paragraph-Spacing/… (3 vars)
    └── Typography/Font-Family/…        (2 strings)

Styles
├── Text Styles (22)
│   ├── Display/9XL, 8XL, 7XL
│   ├── Heading/H1–H6
│   ├── Body/XL, LG, MD, SM, XS
│   ├── Label/LG, MD, SM, XS
│   ├── Caption/MD, SM
│   └── Overline/MD, SM
│
└── Effect Styles (9)
    ├── Shadows/XS, SM, MD, LG, XL, 2XL
    ├── Shadows/Inner
    ├── Shadows/Gold-Glow
    └── Shadows/Card
```

---

*Generado para: Cine Colombia App · Dark Premium Theme*
