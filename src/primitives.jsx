// Loslogos — design primitives shared across screens
// Editorial/agency aesthetic. Theme via CSS vars on parent.

// ──────────────────────────────────────────
// Photo placeholder — striped bg + mono label
// ──────────────────────────────────────────
function PhotoPlaceholder({ tone = '#C9A574', label = 'fachada', children, style = {}, dark = false }) {
  return (
    <div style={{
      position: 'relative',
      width: '100%', height: '100%',
      background: tone,
      overflow: 'hidden',
      ...style,
    }}>
      {/* subtle stripe overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0 8px, rgba(0,0,0,0.04) 8px 16px)`,
      }} />
      {/* darken overlay for legibility */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.35) 100%)',
      }} />
      {/* mono label bottom-left */}
      <div style={{
        position: 'absolute', left: 10, bottom: 8,
        fontFamily: '"JetBrains Mono", ui-monospace, monospace',
        fontSize: 9, letterSpacing: 0.4, textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.85)',
      }}>{label}</div>
      {children}
    </div>
  );
}

// ──────────────────────────────────────────
// Status dot + label
// ──────────────────────────────────────────
function StatusTag({ status, dark = false, size = 'sm' }) {
  const meta = window.STATUS_META[status];
  const fontSize = size === 'sm' ? 11 : 12;
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize, letterSpacing: 0.6, textTransform: 'uppercase',
      color: dark ? 'var(--ink-2)' : 'var(--ink-2)',
    }}>
      <span style={{
        width: 6, height: 6, borderRadius: '50%',
        background: meta.dot,
        boxShadow: dark ? `0 0 0 2px ${meta.tint}` : `0 0 0 2px ${meta.tint}`,
      }} />
      {meta.label}
    </div>
  );
}

// ──────────────────────────────────────────
// Logo proposal — rendered "logo" itself
// Three styles: serif / badge / sans
// ──────────────────────────────────────────
function ProposalLogo({ proposal, businessName, size = 140, monochrome = false }) {
  const bg = monochrome ? '#FFFCF7' : proposal.accent;
  const fg = monochrome ? '#1A1816' : proposal.swatch;

  const initials = businessName.split(' ').filter(w => w.length > 2).slice(0, 2).map(w => w[0]).join('') || businessName.slice(0, 2);
  const upper = businessName.toUpperCase();

  if (proposal.style === 'serif') {
    return (
      <div style={{
        width: size, height: size, background: bg,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: 16, boxSizing: 'border-box', textAlign: 'center',
      }}>
        <div style={{
          width: 36, height: 1, background: fg, marginBottom: 12,
        }} />
        <div style={{
          fontFamily: '"Roboto", serif',
          fontSize: size * 0.18, lineHeight: 1, color: fg,
          fontStyle: 'italic',
        }}>{upper.slice(0, 14)}</div>
        <div style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: size * 0.06, letterSpacing: 2, color: fg,
          marginTop: 10, opacity: 0.7,
        }}>EST · MMXXV</div>
        <div style={{
          width: 36, height: 1, background: fg, marginTop: 12,
        }} />
      </div>
    );
  }

  if (proposal.style === 'badge') {
    const r = size * 0.42;
    return (
      <div style={{
        width: size, height: size, background: bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative',
      }}>
        <svg width={size * 0.85} height={size * 0.85} viewBox="0 0 200 200">
          <defs>
            <path id={`circle-${proposal.id}`} d={`M 100 100 m -${r * 2.2} 0 a ${r * 2.2} ${r * 2.2} 0 1 1 ${r * 4.4} 0 a ${r * 2.2} ${r * 2.2} 0 1 1 -${r * 4.4} 0`} />
          </defs>
          <circle cx="100" cy="100" r="92" fill="none" stroke={fg} strokeWidth="2" />
          <circle cx="100" cy="100" r="80" fill="none" stroke={fg} strokeWidth="0.5" />
          <text fill={fg} style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: 4 }}>
            <textPath href={`#circle-${proposal.id}`} startOffset="50%" textAnchor="middle">
              {upper.slice(0, 24)} · ESTABLECIDO
            </textPath>
          </text>
          {/* center mark */}
          <path d="M 100 70 L 110 100 L 100 130 L 90 100 Z" fill={fg} />
          <circle cx="100" cy="100" r="4" fill={bg} />
        </svg>
      </div>
    );
  }

  // sans
  return (
    <div style={{
      width: size, height: size, background: bg,
      display: 'flex', flexDirection: 'column',
      alignItems: 'flex-start', justifyContent: 'flex-end',
      padding: 14, boxSizing: 'border-box',
    }}>
      <div style={{
        fontFamily: '"Inter Tight", "Inter", sans-serif',
        fontSize: size * 0.32, lineHeight: 0.85, fontWeight: 800,
        letterSpacing: -1.5, color: fg,
      }}>{initials}</div>
      <div style={{
        marginTop: 10,
        fontFamily: '"Inter Tight", sans-serif',
        fontSize: size * 0.075, fontWeight: 600,
        letterSpacing: 0.5, textTransform: 'uppercase',
        color: fg,
      }}>{upper.slice(0, 16)}</div>
      <div style={{
        marginTop: 4,
        width: '100%', height: 2, background: fg,
      }} />
    </div>
  );
}

// ──────────────────────────────────────────
// "Social media post" mockup — frame around a logo
// ──────────────────────────────────────────
function SocialMockup({ proposal, businessName, w = 200 }) {
  return (
    <div style={{
      width: w, background: 'var(--paper)',
      border: '1px solid var(--hairline)',
      fontFamily: '"Inter Tight", sans-serif',
    }}>
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px' }}>
        <div style={{
          width: 22, height: 22, borderRadius: '50%',
          background: proposal.swatch,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: proposal.accent,
          fontFamily: '"Roboto", serif', fontSize: 11,
        }}>
          {businessName[0]}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 10, fontWeight: 600, color: 'var(--ink)',
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>{businessName.toLowerCase().replace(/\s+/g, '_')}</div>
          <div style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 8, color: 'var(--ink-3)',
          }}>patrocinado</div>
        </div>
        <div style={{ display: 'flex', gap: 2 }}>
          {[0,1,2].map(i => <div key={i} style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--ink-3)' }} />)}
        </div>
      </div>
      {/* post */}
      <ProposalLogo proposal={proposal} businessName={businessName} size={w} />
      {/* actions */}
      <div style={{ display: 'flex', gap: 10, padding: '8px 10px', borderTop: '1px solid var(--hairline)' }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink-2)" strokeWidth="1.6"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink-2)" strokeWidth="1.6"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink-2)" strokeWidth="1.6"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
        <div style={{ flex: 1 }} />
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink-2)" strokeWidth="1.6"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────
// Primary button — agency feel
// ──────────────────────────────────────────
function PrimaryButton({ children, onClick, full = true, disabled = false, variant = 'ink' }) {
  const isInk = variant === 'ink';
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: full ? '100%' : 'auto',
        padding: '16px 24px',
        background: disabled ? 'var(--hairline)' : (isInk ? 'var(--ink)' : 'var(--accent)'),
        color: disabled ? 'var(--ink-3)' : (isInk ? 'var(--paper)' : 'var(--ink)'),
        border: 'none',
        fontFamily: '"Inter Tight", sans-serif',
        fontSize: 15, fontWeight: 600, letterSpacing: -0.2,
        cursor: disabled ? 'default' : 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        transition: 'opacity 0.15s',
      }}
      onMouseDown={e => !disabled && (e.currentTarget.style.opacity = '0.85')}
      onMouseUp={e => (e.currentTarget.style.opacity = '1')}
      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
    >
      {children}
    </button>
  );
}

function SecondaryButton({ children, onClick, full = true }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: full ? '100%' : 'auto',
        padding: '15px 24px',
        background: 'transparent',
        color: 'var(--ink)',
        border: '1px solid var(--ink)',
        fontFamily: '"Inter Tight", sans-serif',
        fontSize: 15, fontWeight: 500, letterSpacing: -0.2,
        cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      }}
    >
      {children}
    </button>
  );
}

// ──────────────────────────────────────────
// Editorial header — "01 / Captura" style
// ──────────────────────────────────────────
function SectionHeader({ index, label, action }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'baseline', gap: 12,
      padding: '0 20px',
      fontFamily: '"Inter Tight", sans-serif',
    }}>
      <span style={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 10, color: 'var(--ink-3)',
        letterSpacing: 1, paddingTop: 2,
      }}>{String(index).padStart(2, '0')}</span>
      <span style={{
        fontSize: 11, textTransform: 'uppercase', letterSpacing: 1.5,
        color: 'var(--ink-2)', fontWeight: 500,
      }}>{label}</span>
      <div style={{ flex: 1, height: 1, background: 'var(--hairline)' }} />
      {action}
    </div>
  );
}

// ──────────────────────────────────────────
// Hairline / divider
// ──────────────────────────────────────────
function Hairline({ style = {} }) {
  return <div style={{ height: 1, background: 'var(--hairline)', ...style }} />;
}

Object.assign(window, {
  PhotoPlaceholder, StatusTag, ProposalLogo, SocialMockup,
  PrimaryButton, SecondaryButton, SectionHeader, Hairline,
});
