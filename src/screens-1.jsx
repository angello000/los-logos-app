// Loslogos — screens part 1: Onboarding, Home/Camera, Capture, Leads list

// ──────────────────────────────────────────
// 1. ONBOARDING
// ──────────────────────────────────────────
function ScreenOnboarding({ onContinue }) {
  const [step, setStep] = React.useState(0);
  const [phone, setPhone] = React.useState('');

  const steps = [
    {
      kind: 'intro',
      title: 'Captura negocios.\nVende identidad.',
      sub: 'Loslogos convierte fachadas en oportunidades de branding en menos de 10 segundos.',
      cta: 'Comenzar',
    },
    {
      kind: 'phone',
      title: 'Tu número.',
      sub: 'Lo usamos para recordatorios y enlaces de tus propuestas.',
      cta: 'Verificar',
    },
    {
      kind: 'permissions',
      title: 'Dos permisos.',
      sub: 'Cámara para capturar negocios. Ubicación para situarlos en el mapa.',
      cta: 'Activar y entrar',
    },
  ];

  const cur = steps[step];

  return (
    <div style={{
      width: '100%', height: '100%',
      background: 'var(--bg)',
      display: 'flex', flexDirection: 'column',
      paddingTop: 60, paddingBottom: 40,
      boxSizing: 'border-box',
      position: 'relative',
    }}>
      {/* progress dots */}
      <div style={{ display: 'flex', gap: 6, padding: '0 24px' }}>
        {steps.map((_, i) => (
          <div key={i} style={{
            flex: 1, height: 2,
            background: i <= step ? 'var(--ink)' : 'var(--hairline)',
            transition: 'background 0.3s',
          }} />
        ))}
      </div>

      {/* meta */}
      <div style={{
        padding: '32px 24px 0',
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 10, letterSpacing: 1, color: 'var(--ink-3)',
        textTransform: 'uppercase',
      }}>
        {String(step + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')} · Bienvenida
      </div>

      {/* content */}
      <div style={{ flex: 1, padding: '40px 24px', display: 'flex', flexDirection: 'column' }}>
        <h1 style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: 52, lineHeight: 1.0, margin: 0,
          fontWeight: 400, color: 'var(--ink)',
          letterSpacing: -1.5, whiteSpace: 'pre-line',
          textWrap: 'pretty',
        }}>{cur.title}</h1>

        <p style={{
          marginTop: 24,
          fontFamily: '"Inter Tight", sans-serif',
          fontSize: 16, lineHeight: 1.45,
          color: 'var(--ink-2)', maxWidth: 320,
        }}>{cur.sub}</p>

        {cur.kind === 'phone' && (
          <div style={{ marginTop: 36 }}>
            <div style={{
              display: 'flex', alignItems: 'center',
              borderBottom: '1px solid var(--ink)',
              padding: '8px 0',
            }}>
              <span style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: 28, color: 'var(--ink-2)', marginRight: 10,
              }}>+52</span>
              <input
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="55 0000 0000"
                style={{
                  flex: 1,
                  fontFamily: '"Instrument Serif", serif',
                  fontSize: 28,
                  color: 'var(--ink)',
                  background: 'transparent',
                  border: 'none', outline: 'none',
                }}
              />
            </div>
            <div style={{
              marginTop: 10,
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 10, letterSpacing: 0.5,
              color: 'var(--ink-3)',
            }}>RECIBIRÁS UN CÓDIGO POR SMS</div>
          </div>
        )}

        {cur.kind === 'permissions' && (
          <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--hairline)' }}>
            {[
              { name: 'Cámara', mono: 'CAMERA', desc: 'para capturar fachadas' },
              { name: 'Ubicación', mono: 'LOCATION', desc: 'para situar leads' },
              { name: 'Notificaciones', mono: 'PUSH', desc: 'para recordatorios' },
            ].map(p => (
              <div key={p.name} style={{
                background: 'var(--paper)',
                padding: '16px 20px',
                display: 'flex', alignItems: 'center', gap: 14,
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'var(--ink)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--paper)',
                  fontFamily: '"Instrument Serif", serif', fontSize: 18,
                  fontStyle: 'italic',
                }}>{p.name[0]}</div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: '"Inter Tight", sans-serif',
                    fontSize: 15, fontWeight: 600, color: 'var(--ink)',
                  }}>{p.name}</div>
                  <div style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: 10, color: 'var(--ink-3)', letterSpacing: 0.5,
                  }}>{p.mono} · {p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{ flex: 1 }} />

        <PrimaryButton
          onClick={() => {
            if (step < steps.length - 1) setStep(step + 1);
            else onContinue();
          }}
          disabled={cur.kind === 'phone' && phone.length < 8}
        >
          {cur.cta}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </PrimaryButton>

        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            style={{
              marginTop: 12, padding: 8, background: 'none', border: 'none',
              fontFamily: '"Inter Tight", sans-serif', fontSize: 13,
              color: 'var(--ink-3)', cursor: 'pointer',
            }}
          >← Atrás</button>
        )}
      </div>
    </div>
  );
}

// ──────────────────────────────────────────
// 2. HOME / CAMERA
// ──────────────────────────────────────────
function ScreenCamera({ onCapture, onOpenLeads, leadCount }) {
  const [flash, setFlash] = React.useState(false);

  const handleShoot = () => {
    setFlash(true);
    setTimeout(() => {
      setFlash(false);
      onCapture();
    }, 320);
  };

  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#0E0C0A',
      position: 'relative', overflow: 'hidden',
      color: '#fff',
    }}>
      {/* viewfinder = photo placeholder */}
      <PhotoPlaceholder tone="#8E6F4E" label="visor · enfocando">
        {/* corner brackets */}
        {[
          { top: 90, left: 30 }, { top: 90, right: 30 },
          { bottom: 240, left: 30 }, { bottom: 240, right: 30 },
        ].map((pos, i) => (
          <div key={i} style={{
            position: 'absolute', ...pos,
            width: 22, height: 22,
            borderTop: pos.top !== undefined ? '1.5px solid rgba(255,255,255,0.7)' : 'none',
            borderBottom: pos.bottom !== undefined ? '1.5px solid rgba(255,255,255,0.7)' : 'none',
            borderLeft: pos.left !== undefined ? '1.5px solid rgba(255,255,255,0.7)' : 'none',
            borderRight: pos.right !== undefined ? '1.5px solid rgba(255,255,255,0.7)' : 'none',
          }} />
        ))}

        {/* AI hint chip — center top */}
        <div style={{
          position: 'absolute', top: 70, left: '50%', transform: 'translateX(-50%)',
          padding: '8px 14px',
          background: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(12px)',
          color: '#fff', borderRadius: 100,
          display: 'flex', alignItems: 'center', gap: 8,
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 10, letterSpacing: 1,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: '#9FCB7A',
            animation: 'pulse 1.6s ease-in-out infinite',
          }} />
          DETECTANDO NEGOCIO
        </div>

        {/* AI suggestion overlay */}
        <div style={{
          position: 'absolute', bottom: 280, left: 24, right: 24,
          padding: '14px 16px',
          background: 'rgba(255,252,247,0.95)',
          color: '#1A1816',
          backdropFilter: 'blur(20px)',
          fontFamily: '"Inter Tight", sans-serif',
        }}>
          <div style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 9, letterSpacing: 1, color: '#1A1816',
            opacity: 0.55, marginBottom: 4,
          }}>SUGERENCIA · IA</div>
          <div style={{ fontSize: 14, fontWeight: 600 }}>Panadería La Esquina</div>
          <div style={{ fontSize: 12, color: 'rgba(26,24,22,0.6)' }}>Categoría: Panadería · Av. Insurgentes 240</div>
        </div>
      </PhotoPlaceholder>

      {/* top bar */}
      <div style={{
        position: 'absolute', top: 14, left: 16, right: 16, zIndex: 10,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <button style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)',
          border: 'none', color: '#fff', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        </button>
        <div style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: 22, fontStyle: 'italic',
          color: '#fff',
        }}>Loslogos</div>
        <button style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)',
          border: 'none', color: '#fff', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h.01M12 3v.01M21 12h-.01M12 21v-.01"/></svg>
        </button>
      </div>

      {/* bottom controls */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 10,
        padding: '20px 24px 50px',
        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 60%)',
      }}>
        {/* mode tabs */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 24,
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 10, letterSpacing: 1.5,
        }}>
          {['NEGOCIO', 'LOGO EXISTENTE', 'NOTA'].map((m, i) => (
            <span key={m} style={{
              color: i === 0 ? '#fff' : 'rgba(255,255,255,0.45)',
              borderBottom: i === 0 ? '1px solid #fff' : 'none',
              paddingBottom: 4,
            }}>{m}</span>
          ))}
        </div>

        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* leads pill */}
          <button onClick={onOpenLeads} style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '10px 14px',
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.18)',
            color: '#fff', cursor: 'pointer',
          }}>
            <div style={{
              width: 24, height: 24, background: '#fff', color: '#000',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: '"Instrument Serif", serif', fontSize: 14, fontWeight: 600,
            }}>{leadCount}</div>
            <span style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 10, letterSpacing: 1,
            }}>LEADS</span>
          </button>

          {/* shutter */}
          <button onClick={handleShoot} style={{
            width: 76, height: 76, borderRadius: '50%',
            background: 'transparent',
            border: '2px solid rgba(255,255,255,0.9)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', padding: 0,
          }}>
            <div style={{
              width: 62, height: 62, borderRadius: '50%',
              background: '#fff',
            }} />
          </button>

          {/* flip */}
          <button style={{
            width: 44, height: 44, borderRadius: '50%',
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.18)',
            color: '#fff', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M21 7.5l-3-3m3 3l-3 3m3-3H8a4 4 0 00-4 4M3 16.5l3 3m-3-3l3-3m-3 3h13a4 4 0 004-4"/></svg>
          </button>
        </div>
      </div>

      {/* flash */}
      {flash && (
        <div style={{
          position: 'absolute', inset: 0, background: '#fff', zIndex: 100,
          opacity: 0, animation: 'flash 0.32s ease-out forwards',
        }} />
      )}
    </div>
  );
}

// ──────────────────────────────────────────
// 3. CAPTURE FORM
// ──────────────────────────────────────────
function ScreenCaptureForm({ onSave, onCancel }) {
  const [name, setName] = React.useState('Panadería La Esquina');
  const [category, setCategory] = React.useState('Panadería');
  const [whatsapp, setWhatsapp] = React.useState('');
  const [notes, setNotes] = React.useState('');

  const categories = ['Panadería', 'Café', 'Belleza', 'Ferretería', 'Comida', 'Servicios', 'Otro'];

  return (
    <div style={{
      width: '100%', height: '100%', background: 'var(--bg)',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* header */}
      <div style={{
        padding: '60px 20px 16px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <button onClick={onCancel} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: '"Inter Tight", sans-serif', fontSize: 14,
          color: 'var(--ink-2)', padding: 0,
        }}>Cancelar</button>
        <span style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 10, letterSpacing: 1.5, color: 'var(--ink-3)',
        }}>NUEVO LEAD · 02</span>
        <div style={{ width: 56 }} />
      </div>

      {/* photo preview */}
      <div style={{ padding: '0 20px' }}>
        <div style={{ height: 180, position: 'relative' }}>
          <PhotoPlaceholder tone="#8E6F4E" label="captura · 09:41" />
          <div style={{
            position: 'absolute', top: 10, right: 10,
            padding: '4px 8px',
            background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)',
            color: '#fff',
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 9, letterSpacing: 0.5,
          }}>RETOMAR</div>
        </div>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '20px 0 24px' }}>
        {/* AI banner */}
        <div style={{
          margin: '0 20px 20px',
          padding: '10px 12px',
          background: 'var(--accent-tint)',
          borderLeft: '2px solid var(--accent)',
          fontFamily: '"Inter Tight", sans-serif',
          fontSize: 12, color: 'var(--ink-2)',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
          IA detectó este negocio. Revisa y guarda.
        </div>

        {/* fields */}
        <FormField label="Nombre" mono="01">
          <input value={name} onChange={e => setName(e.target.value)} style={inputStyle} />
        </FormField>

        <FormField label="Categoría" mono="02">
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 6, paddingTop: 4,
          }}>
            {categories.map(c => (
              <button key={c} onClick={() => setCategory(c)} style={{
                padding: '7px 12px',
                background: c === category ? 'var(--ink)' : 'transparent',
                color: c === category ? 'var(--paper)' : 'var(--ink-2)',
                border: '1px solid ' + (c === category ? 'var(--ink)' : 'var(--hairline)'),
                fontFamily: '"Inter Tight", sans-serif',
                fontSize: 12, cursor: 'pointer',
              }}>{c}</button>
            ))}
          </div>
        </FormField>

        <FormField label="WhatsApp · opcional" mono="03">
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{
              fontFamily: '"Instrument Serif", serif', fontSize: 18,
              color: 'var(--ink-2)',
            }}>+52</span>
            <input
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
              placeholder="55 0000 0000"
              style={inputStyle}
            />
          </div>
        </FormField>

        <FormField label="Notas" mono="04">
          <textarea
            value={notes} onChange={e => setNotes(e.target.value)}
            placeholder="Detalles que recordar…"
            rows={2}
            style={{ ...inputStyle, resize: 'none', lineHeight: 1.4 }}
          />
        </FormField>
      </div>

      <div style={{
        padding: '12px 20px 30px',
        borderTop: '1px solid var(--hairline)',
        background: 'var(--bg)',
      }}>
        <PrimaryButton onClick={() => onSave({ name, category, whatsapp, notes })}>
          Guardar y generar logos
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </PrimaryButton>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  background: 'transparent',
  border: 'none', outline: 'none',
  fontFamily: '"Instrument Serif", serif',
  fontSize: 22, color: 'var(--ink)',
  padding: 0,
};

function FormField({ label, mono, children }) {
  return (
    <div style={{
      padding: '14px 20px',
      borderTop: '1px solid var(--hairline)',
    }}>
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6,
      }}>
        <span style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 9, letterSpacing: 1, color: 'var(--ink-3)',
        }}>{mono}</span>
        <span style={{
          fontFamily: '"Inter Tight", sans-serif',
          fontSize: 11, textTransform: 'uppercase', letterSpacing: 1.2,
          color: 'var(--ink-2)', fontWeight: 500,
        }}>{label}</span>
      </div>
      {children}
    </div>
  );
}

// ──────────────────────────────────────────
// 4. LEADS LIST (CRM) — POLISHED
// ──────────────────────────────────────────
function ScreenLeadsList({ leads, onSelectLead, onBack, onNewLead }) {
  const [filter, setFilter] = React.useState('todos');
  const [view, setView] = React.useState('cards'); // cards | list

  const filtered = leads.filter(l => filter === 'todos' || l.status === filter);

  const counts = {
    todos: leads.length,
    ...Object.fromEntries(window.STATUS_ORDER.map(s => [s, leads.filter(l => l.status === s).length])),
  };

  return (
    <div style={{
      width: '100%', height: '100%', background: 'var(--bg)',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* nav */}
      <div style={{
        padding: '60px 20px 14px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <button onClick={onBack} style={{
          width: 36, height: 36, background: 'none',
          border: '1px solid var(--hairline)',
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--ink)',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <span style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 10, letterSpacing: 1.5, color: 'var(--ink-3)',
        }}>03 · CRM</span>
        <div style={{ display: 'flex', gap: 0 }}>
          <button onClick={() => setView('cards')} style={{
            width: 36, height: 36, background: view === 'cards' ? 'var(--ink)' : 'none',
            color: view === 'cards' ? 'var(--paper)' : 'var(--ink)',
            border: '1px solid ' + (view === 'cards' ? 'var(--ink)' : 'var(--hairline)'),
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
          </button>
          <button onClick={() => setView('list')} style={{
            width: 36, height: 36, background: view === 'list' ? 'var(--ink)' : 'none',
            color: view === 'list' ? 'var(--paper)' : 'var(--ink)',
            border: '1px solid ' + (view === 'list' ? 'var(--ink)' : 'var(--hairline)'),
            borderLeft: 'none',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </div>

      {/* editorial header */}
      <div style={{ padding: '18px 20px 0' }}>
        <h1 style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: 56, lineHeight: 0.95, margin: 0,
          fontWeight: 400, color: 'var(--ink)',
          letterSpacing: -2,
        }}>
          Leads
          <span style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 13, color: 'var(--ink-3)', letterSpacing: 0,
            marginLeft: 12, verticalAlign: 'top',
          }}>{String(leads.length).padStart(2, '0')}</span>
        </h1>
        <div style={{
          marginTop: 6,
          fontFamily: '"Inter Tight", sans-serif',
          fontSize: 13, color: 'var(--ink-2)',
        }}>Tus oportunidades de branding, ordenadas por captura.</div>
      </div>

      {/* filters */}
      <div style={{
        marginTop: 18, padding: '0 20px',
        display: 'flex', gap: 6, overflowX: 'auto',
        scrollbarWidth: 'none',
      }}>
        {['todos', ...window.STATUS_ORDER].map(f => {
          const meta = f === 'todos' ? { label: 'Todos' } : window.STATUS_META[f];
          const active = filter === f;
          return (
            <button key={f} onClick={() => setFilter(f)} style={{
              flex: '0 0 auto',
              padding: '8px 12px',
              background: active ? 'var(--ink)' : 'transparent',
              color: active ? 'var(--paper)' : 'var(--ink-2)',
              border: '1px solid ' + (active ? 'var(--ink)' : 'var(--hairline)'),
              cursor: 'pointer',
              fontFamily: '"Inter Tight", sans-serif',
              fontSize: 12, fontWeight: 500,
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              {f !== 'todos' && (
                <span style={{
                  width: 5, height: 5, borderRadius: '50%',
                  background: window.STATUS_META[f].dot,
                }} />
              )}
              {meta.label}
              <span style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 9, opacity: 0.6,
              }}>{counts[f]}</span>
            </button>
          );
        })}
      </div>

      {/* list */}
      <div style={{ flex: 1, overflow: 'auto', padding: '20px 20px 100px' }}>
        {view === 'cards' ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {filtered.map((lead, i) => (
              <LeadCard key={lead.id} lead={lead} index={i} onClick={() => onSelectLead(lead.id)} />
            ))}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {filtered.map((lead, i) => (
              <LeadRow key={lead.id} lead={lead} index={i} onClick={() => onSelectLead(lead.id)} isLast={i === filtered.length - 1} />
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div style={{
            padding: '60px 20px', textAlign: 'center',
            fontFamily: '"Instrument Serif", serif', fontSize: 22, fontStyle: 'italic',
            color: 'var(--ink-3)',
          }}>Sin leads en este estado.</div>
        )}
      </div>

      {/* FAB */}
      <button onClick={onNewLead} style={{
        position: 'absolute', bottom: 40, right: 20, zIndex: 20,
        width: 64, height: 64, borderRadius: '50%',
        background: 'var(--ink)', color: 'var(--paper)',
        border: 'none', cursor: 'pointer',
        boxShadow: '0 12px 28px rgba(0,0,0,0.25)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
      </button>
    </div>
  );
}

function LeadCard({ lead, index, onClick }) {
  return (
    <div onClick={onClick} style={{
      cursor: 'pointer',
      background: 'var(--paper)',
      border: '1px solid var(--hairline)',
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ height: 120, position: 'relative' }}>
        <PhotoPlaceholder tone={lead.photoTone} label={lead.photoLabel} />
        <div style={{
          position: 'absolute', top: 8, left: 8,
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 8, letterSpacing: 0.5, color: 'rgba(255,255,255,0.85)',
          background: 'rgba(0,0,0,0.4)', padding: '2px 5px',
        }}>#{String(index + 1).padStart(3, '0')}</div>
      </div>
      <div style={{ padding: '10px 12px 12px' }}>
        <div style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: 17, lineHeight: 1.1, color: 'var(--ink)',
          marginBottom: 4,
          overflow: 'hidden', textOverflow: 'ellipsis',
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
          minHeight: 36,
        }}>{lead.name}</div>
        <div style={{
          fontFamily: '"Inter Tight", sans-serif',
          fontSize: 11, color: 'var(--ink-3)',
          marginBottom: 8,
        }}>{lead.category} · {lead.capturedAt}</div>
        <StatusTag status={lead.status} />
      </div>
    </div>
  );
}

function LeadRow({ lead, index, onClick, isLast }) {
  return (
    <div onClick={onClick} style={{
      cursor: 'pointer',
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '12px 0',
      borderBottom: isLast ? 'none' : '1px solid var(--hairline)',
    }}>
      <div style={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 10, color: 'var(--ink-3)', width: 24,
      }}>{String(index + 1).padStart(2, '0')}</div>
      <div style={{ width: 44, height: 44, flexShrink: 0 }}>
        <PhotoPlaceholder tone={lead.photoTone} label="" />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: 17, color: 'var(--ink)', lineHeight: 1.1,
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>{lead.name}</div>
        <div style={{
          fontFamily: '"Inter Tight", sans-serif',
          fontSize: 11, color: 'var(--ink-3)', marginTop: 2,
        }}>{lead.category} · {lead.capturedAt}</div>
      </div>
      <StatusTag status={lead.status} />
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--ink-3)" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
    </div>
  );
}

Object.assign(window, {
  ScreenOnboarding, ScreenCamera, ScreenCaptureForm,
  ScreenLeadsList, LeadCard, LeadRow, FormField,
});
