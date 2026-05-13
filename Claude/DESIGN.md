---
name: Eon Dark System
colors:
  surface: '#0c141d'
  surface-dim: '#0c141d'
  surface-bright: '#323a44'
  surface-container-lowest: '#070f17'
  surface-container-low: '#141c25'
  surface-container: '#182029'
  surface-container-high: '#232b34'
  surface-container-highest: '#2e353f'
  on-surface: '#dbe3f0'
  on-surface-variant: '#e7bdb2'
  inverse-surface: '#dbe3f0'
  inverse-on-surface: '#29313b'
  outline: '#ad887e'
  outline-variant: '#5d4038'
  surface-tint: '#ffb5a0'
  primary: '#ffb5a0'
  on-primary: '#601400'
  primary-container: '#ff5625'
  on-primary-container: '#541100'
  inverse-primary: '#b12d00'
  secondary: '#46eaed'
  on-secondary: '#003738'
  secondary-container: '#00cdd0'
  on-secondary-container: '#005253'
  tertiary: '#c8c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#929090'
  on-tertiary-container: '#2a2a2a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ffb5a0'
  on-primary-fixed: '#3b0900'
  on-primary-fixed-variant: '#872000'
  secondary-fixed: '#5af8fb'
  secondary-fixed-dim: '#2ddbde'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#004f51'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#0c141d'
  on-background: '#dbe3f0'
  surface-variant: '#2e353f'
typography:
  headline-lg:
    fontFamily: Roboto
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Roboto
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Roboto
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: '0'
  body-lg:
    fontFamily: Roboto
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: '0'
  body-md:
    fontFamily: Roboto
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  body-sm:
    fontFamily: Roboto
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: '0'
  label-lg:
    fontFamily: Roboto
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Roboto
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Roboto
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 48px
  4xl: 64px
---

## Brand & Style
This design system utilizes a **Glassmorphic-Industrial** aesthetic, blending high-tech precision with ethereal depth. It is designed for professional, data-intensive environments where focus and clarity are paramount. The visual language relies on deep charcoal surfaces contrasted by vibrant accent strikes and sophisticated semi-transparent layers. 

The mood is authoritative, futuristic, and highly organized. By combining a rigid 4px grid with soft glass effects, the interface achieves a balance between structural integrity and modern visual appeal.

## Colors
The palette is rooted in a **Deep Charcoal (#1A1A1A)** base to minimize eye strain and maximize the impact of accents. 
- **Eon Orange (#FF4500)** is the primary action color, used for high-priority calls to action.
- **Cyan (#00CED1)** serves as a secondary accent for data visualization and alternate actions.
- **Semantic Colors** are calibrated for high legibility against the dark background, using desaturated yet vibrant tones to communicate status without vibrating against the charcoal.
- **Glass Surfaces** utilize a 60% opacity of the base surface color paired with a 12px backdrop blur to create a sense of depth and physical layering.

## Typography
Roboto provides a mechanical yet approachable structure. 
- **Headings** use tighter tracking and heavier weights to establish clear hierarchy.
- **Body text** maintains standard line heights for optimal readability in data-rich layouts.
- **Labels** utilize increased letter spacing and medium-to-bold weights to remain distinct even at small sizes.
- On mobile, `headline-lg` should scale down to 28px to prevent excessive line-breaking.

## Layout & Spacing
This system follows a strict 4px-based geometric progression.
- **Grid:** Use a 12-column fluid grid for desktop with 24px gutters and margins.
- **Mobile:** Transition to a 4-column grid with 16px margins.
- **Rhythm:** Internal component spacing should rely on the `xs` to `lg` tokens, while section-level separation should use `xl` through `4xl`. Consistent use of these increments ensures a rhythmic, industrial balance.

## Elevation & Depth
Depth is communicated through a combination of backdrop blurs and layered shadows.
- **Small (Level 1):** 1px Y-offset, 2px Blur. Used for subtle separation of flat cards.
- **Medium (Level 2):** 4px Y-offset, 8px Blur. Used for hovering elements and dropdowns.
- **Large (Level 3):** 12px Y-offset, 24px Blur. Used for modal dialogs and primary overlays.
All shadows should use a semi-transparent black base with a subtle light-source effect (top-down) to enhance the tactile feel of the UI. Hairline borders (1px) are used on all elevated surfaces to provide crisp definition against the dark background.

## Shapes
The design system employs a consistent **8px corner radius** (Level 2/Rounded) for all standard containers and buttons. This softening of the industrial grid makes the UI more approachable without losing its precision.
- **Standard Borders:** 1px width for general containment and glass separation.
- **Heavy Borders:** 2px width reserved for focus states and primary selection indicators.

## Components
- **Buttons:** Primary buttons use Eon Orange with white or near-black text for maximum contrast. Ghost buttons use Cyan borders.
- **States:**
  - *Hover:* Increase surface brightness by 5% or add a subtle outer glow.
  - *Focus:* A 2px Cyan ring with a 2px offset.
  - *Pressed:* Reduce surface brightness by 10% and shift the element 1px down.
  - *Disabled:* 30% opacity across the entire component; disable all pointer events.
- **Glass Cards:** Used for dashboards and sidebars, featuring the 12px backdrop blur and 1px hairline border (rgba 255, 255, 255, 0.1).
- **Inputs:** Darker than the background (#121212) with a 1px border. The border shifts to Eon Orange on active focus.
- **Chips:** Small, rounded-full elements using semantic background tints (20% opacity) with 100% opacity text for status indicators.