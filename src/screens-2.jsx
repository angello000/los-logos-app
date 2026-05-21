// Loslogos — screens part 2: AI Generation, Lead Detail, WhatsApp, Public Landing

// ──────────────────────────────────────────
// 5. AI GENERATION (transparent stages)
// ──────────────────────────────────────────
function ScreenGenerating({ businessName, onDone }) {
  const [stage, setStage] = React.useState(0);
  const stages = [
    { mono: 'STAGE 01', label: 'Analizando categoría y contexto' },
    { mono: 'STAGE 02', label: 'Generando 3 direcciones tipográficas' },
    { mono: 'STAGE 03', label: 'Componiendo mockups en redes' },
  ];

  React.useEffect(() => {
    if (stage < stages.length - 1) {
      const t = setTimeout(() => setStage(stage + 1), 1100);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(onDone, 900);
      return () => clearTimeout(t);
    }
  }, [stage]);

  return (
    <div style={{
      width: '100%', height: '100%', background: 'var(--bg)',
      display: 'flex', flexDirection: 'column',
      padding: '60px 24px 40px', boxSizing: 'border-box',
    }}>
      <div style={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 10, letterSpacing: 1.5, color: 'var(--ink-3)',
      }}>04 · GENERANDO</div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 style={{
          fontFamily: '"Roboto", serif',
          fontSize: 44, lineHeight: 1, margin: 0, fontWeight: 400,
          color: 'var(--ink)', letterSpacing: -1.5,
        }}>
          Diseñando<br/>
          <span style={{ fontStyle: 'italic' }}>{businessName}</span>.
        </h1>

        <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {stages.map((s, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: 12,
              opacity: i > stage ? 0.3 : 1,
              transition: 'opacity 0.4s',
            }}>
              <div style={{
                width: 12, height: 12, borderRadius: '50%', marginTop: 4,
                background: i < stage ? 'var(--ink)' : 'transparent',
                border: '1px solid var(--ink)',
                position: 'relative',
              }}>
                {i === stage && (
                  <span style={{
                    position: 'absolute', inset: 2, borderRadius: '50%',
                    background: 'var(--ink)',
                    animation: 'pulse 1.2s ease-in-out infinite',
                  }} />
                )}
              </div>
              <div>
                <div style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: 9, letterSpacing: 1, color: 'var(--ink-3)',
                }}>{s.mono}</div>
                <div style={{
                  fontFamily: '"Inter Tight", sans-serif',
                  fontSize: 16, color: 'var(--ink)', marginTop: 2,
                }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 9, letterSpacing: 1, color: 'var(--ink-3)',
        textAlign: 'center',
      }}>~ 8 SEGUNDOS · NO CIERRES LA APP</div>
    </div>
  );
}

// ──────────────────────────────────────────
// 6. LEAD DETAIL — POLISHED, before/after stacked
// ──────────────────────────────────────────
function ScreenLeadDetail({ lead, onBack, onSendWhatsapp, onChangeStatus, onRegenerate, onOpenLanding }) {
  const [tab, setTab] = React.useState('propuestas');

  return (
    <div style={{
      width: '100%', height: '100%', background: 'var(--bg)',
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* nav */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 30,
        padding: '54px 16px 12px',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0))',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <button onClick={onBack} style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(10px)',
          border: 'none', cursor: 'pointer',
          color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <button style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(10px)',
          border: 'none', cursor: 'pointer',
          color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="4" height="16" viewBox="0 0 4 16" fill="currentColor"><circle cx="2" cy="2" r="2"/><circle cx="2" cy="8" r="2"/><circle cx="2" cy="14" r="2"/></svg>
        </button>
      </div>

      <div style={{ flex: 1, overflow: 'auto' }}>
        {/* hero */}
        <div style={{ height: 320, position: 'relative' }}>
          <PhotoPlaceholder tone={lead.photoTone} label={lead.photoLabel} />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: '40px 20px 24px',
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
            color: '#fff',
          }}>
            <div style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 10, letterSpacing: 1.5, color: 'rgba(255,255,255,0.7)',
            }}>LEAD · {lead.id.toUpperCase()}</div>
            <h1 style={{
              fontFamily: '"Roboto", serif',
              fontSize: 38, lineHeight: 1, margin: '6px 0 0',
              fontWeight: 400, letterSpacing: -1,
            }}>{lead.name}</h1>
            <div style={{
              marginTop: 8,
              fontFamily: '"Inter Tight", sans-serif',
              fontSize: 13, color: 'rgba(255,255,255,0.85)',
            }}>{lead.category} · {lead.location} · {lead.capturedAt}</div>
          </div>
        </div>

        {/* status row */}
        <div style={{
          padding: '14px 20px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderBottom: '1px solid var(--hairline)',
        }}>
          <StatusTag status={lead.status} size="md" />
          <button onClick={onChangeStatus} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: '"Inter Tight", sans-serif', fontSize: 12,
            color: 'var(--ink-2)', textDecoration: 'underline', textUnderlineOffset: 3,
          }}>Cambiar estado</button>
        </div>

        {/* tabs */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid var(--hairline)',
        }}>
          {[
            { id: 'propuestas', label: 'Propuestas' },
            { id: 'antes', label: 'Antes / Después' },
            { id: 'historial', label: 'Historial' },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              flex: 1, padding: '14px 8px',
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: '"Inter Tight", sans-serif',
              fontSize: 12, fontWeight: 500,
              letterSpacing: 0.4, textTransform: 'uppercase',
              color: tab === t.id ? 'var(--ink)' : 'var(--ink-3)',
              borderBottom: '2px solid ' + (tab === t.id ? 'var(--ink)' : 'transparent'),
              marginBottom: -1,
            }}>{t.label}</button>
          ))}
        </div>

        {/* tab content */}
        {tab === 'propuestas' && (
          <div style={{ padding: '20px 20px 40px' }}>
            <SectionHeader index={1} label="3 direcciones IA" action={
              <button onClick={onRegenerate} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 9, letterSpacing: 1, color: 'var(--ink-2)',
                display: 'flex', alignItems: 'center', gap: 4,
              }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>
                REGENERAR
              </button>
            } />
            <div style={{ marginTop: 16, padding: '0 0px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {window.PROPOSAL_TEMPLATES.map((p, i) => (
                  <ProposalRow key={p.id} proposal={p} businessName={lead.name} index={i + 1} />
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 'antes' && (
          <BeforeAfterStack lead={lead} />
        )}

        {tab === 'historial' && (
          <HistoryTimeline lead={lead} />
        )}

        {/* notes */}
        {tab === 'propuestas' && lead.notes && (
          <div style={{ padding: '0 20px 30px' }}>
            <SectionHeader index={2} label="Notas de campo" />
            <div style={{
              marginTop: 16,
              padding: '14px 16px',
              background: 'var(--paper)',
              border: '1px solid var(--hairline)',
              fontFamily: '"Roboto", serif',
              fontSize: 17, lineHeight: 1.4, color: 'var(--ink)',
              fontStyle: 'italic',
            }}>"{lead.notes}"</div>
          </div>
        )}
      </div>

      {/* sticky cta */}
      <div style={{
        padding: '12px 20px 30px',
        borderTop: '1px solid var(--hairline)',
        background: 'var(--bg)',
        display: 'flex', gap: 10,
      }}>
        <button onClick={onOpenLanding} style={{
          width: 50, height: 50,
          background: 'transparent', border: '1px solid var(--ink)',
          color: 'var(--ink)', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
        </button>
        <div style={{ flex: 1 }}>
          <PrimaryButton onClick={onSendWhatsapp}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
            Enviar por WhatsApp
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

function ProposalRow({ proposal, businessName, index }) {
  return (
    <div style={{
      background: 'var(--paper)',
      border: '1px solid var(--hairline)',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* header */}
      <div style={{
        padding: '10px 14px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '1px solid var(--hairline)',
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 9, letterSpacing: 1, color: 'var(--ink-3)',
          }}>0{index}</span>
          <span style={{
            fontFamily: '"Roboto", serif',
            fontSize: 20, color: 'var(--ink)', fontStyle: 'italic',
          }}>{proposal.name}</span>
        </div>
        <div style={{
          display: 'flex', gap: 4,
        }}>
          <button style={{
            width: 28, height: 28, background: 'none',
            border: '1px solid var(--hairline)', cursor: 'pointer',
            color: 'var(--ink-2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>
          </button>
          <button style={{
            width: 28, height: 28, background: 'none',
            border: '1px solid var(--hairline)', cursor: 'pointer',
            color: 'var(--ink-2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          </button>
        </div>
      </div>
      {/* mockup row */}
      <div style={{
        padding: '16px 14px',
        display: 'flex', gap: 10, alignItems: 'flex-start',
      }}>
        <div style={{ flex: '0 0 auto' }}>
          <SocialMockup proposal={proposal} businessName={businessName} w={150} />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <ProposalLogo proposal={proposal} businessName={businessName} size={88} />
          <ProposalLogo proposal={proposal} businessName={businessName} size={88} monochrome={true} />
        </div>
      </div>
      <div style={{
        padding: '0 14px 14px',
        fontFamily: '"Inter Tight", sans-serif',
        fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.4,
      }}>{proposal.description}</div>
    </div>
  );
}

function BeforeAfterStack({ lead }) {
  const [side, setSide] = React.useState('after'); // before | after
  const proposal = window.PROPOSAL_TEMPLATES[1];

  return (
    <div style={{ padding: '24px 20px 40px' }}>
      <SectionHeader index={1} label="Antes / Después" action={
        <div style={{
          display: 'flex', gap: 4,
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 9, letterSpacing: 1,
        }}>
          <button onClick={() => setSide('before')} style={{
            background: side === 'before' ? 'var(--ink)' : 'none',
            color: side === 'before' ? 'var(--paper)' : 'var(--ink-2)',
            border: 'none', cursor: 'pointer', padding: '4px 8px',
          }}>ANTES</button>
          <button onClick={() => setSide('after')} style={{
            background: side === 'after' ? 'var(--ink)' : 'none',
            color: side === 'after' ? 'var(--paper)' : 'var(--ink-2)',
            border: 'none', cursor: 'pointer', padding: '4px 8px',
          }}>DESPUÉS</button>
        </div>
      } />

      <div style={{ position: 'relative', marginTop: 24, height: 360 }}>
        {/* "after" card — back */}
        <div style={{
          position: 'absolute', top: side === 'after' ? 0 : 30, left: side === 'after' ? 0 : 14,
          right: side === 'after' ? 0 : -14, bottom: side === 'after' ? 60 : 30,
          background: 'var(--paper)',
          border: '1px solid var(--hairline)',
          padding: 18,
          transition: 'all 0.4s cubic-bezier(.4,.2,.2,1)',
          zIndex: side === 'after' ? 2 : 1,
          boxShadow: side === 'after' ? '0 20px 40px rgba(0,0,0,0.12)' : 'none',
        }}>
          <div style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 9, letterSpacing: 1, color: 'var(--ink-3)',
            marginBottom: 12,
          }}>DESPUÉS · PROPUESTA SELLO</div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ProposalLogo proposal={proposal} businessName={lead.name} size={200} />
          </div>
          <div style={{
            marginTop: 14,
            fontFamily: '"Inter Tight", sans-serif',
            fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.4, textAlign: 'center',
          }}>{proposal.description}</div>
        </div>

        {/* "before" card — front */}
        <div style={{
          position: 'absolute', top: side === 'before' ? 0 : 30, left: side === 'before' ? 0 : -14,
          right: side === 'before' ? 0 : 14, bottom: side === 'before' ? 60 : 30,
          background: lead.photoTone,
          border: '1px solid var(--hairline)',
          overflow: 'hidden',
          transition: 'all 0.4s cubic-bezier(.4,.2,.2,1)',
          zIndex: side === 'before' ? 2 : 1,
          boxShadow: side === 'before' ? '0 20px 40px rgba(0,0,0,0.12)' : 'none',
        }}>
          <PhotoPlaceholder tone={lead.photoTone} label="actual · capturado">
            <div style={{
              position: 'absolute', top: 12, left: 12,
              padding: '4px 8px',
              background: 'rgba(0,0,0,0.6)', color: '#fff',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 9, letterSpacing: 1,
            }}>ANTES</div>
          </PhotoPlaceholder>
        </div>
      </div>

      <div style={{
        marginTop: 12,
        fontFamily: '"Inter Tight", sans-serif',
        fontSize: 12, color: 'var(--ink-3)', textAlign: 'center',
      }}>Toca ANTES o DESPUÉS para alternar las tarjetas.</div>
    </div>
  );
}

function HistoryTimeline({ lead }) {
  const events = [
    { mono: 'AHORA', label: 'Recordatorio programado', detail: 'Día 5 · seguimiento si no responde' },
    { mono: lead.lastContact || 'AYER', label: 'Mensaje enviado por WhatsApp', detail: 'Vio el enlace, sin respuesta aún' },
    { mono: lead.capturedAt.toUpperCase(), label: 'Lead capturado', detail: lead.location },
  ];
  return (
    <div style={{ padding: '24px 20px 40px' }}>
      <SectionHeader index={1} label="Historial de contacto" />
      <div style={{ marginTop: 20, position: 'relative' }}>
        <div style={{
          position: 'absolute', left: 4, top: 8, bottom: 8,
          width: 1, background: 'var(--hairline)',
        }} />
        {events.map((e, i) => (
          <div key={i} style={{
            display: 'flex', gap: 16, paddingBottom: 20,
            position: 'relative',
          }}>
            <div style={{
              width: 9, height: 9, borderRadius: '50%',
              background: i === 0 ? 'var(--accent)' : 'var(--ink)',
              marginTop: 6, flexShrink: 0, position: 'relative', zIndex: 1,
            }} />
            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 9, letterSpacing: 1, color: 'var(--ink-3)',
              }}>{e.mono}</div>
              <div style={{
                fontFamily: '"Inter Tight", sans-serif',
                fontSize: 14, fontWeight: 500, color: 'var(--ink)',
                marginTop: 2,
              }}>{e.label}</div>
              <div style={{
                fontFamily: '"Inter Tight", sans-serif',
                fontSize: 12, color: 'var(--ink-2)', marginTop: 2,
              }}>{e.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ──────────────────────────────────────────
// 7. WHATSAPP SEND
// ──────────────────────────────────────────
function ScreenWhatsapp({ lead, onBack, onSent }) {
  const [message, setMessage] = React.useState(
    `Hola ${lead.name.split(' ')[0]}, soy diseñador y pasé por su negocio hoy. Preparé 3 propuestas de logo para ustedes — sin compromiso. Pueden verlas aquí:\n\nloslogos.app/${lead.id}\n\n¿Les gusta alguna?`
  );

  return (
    <div style={{
      width: '100%', height: '100%', background: 'var(--bg)',
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{
        padding: '60px 20px 14px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <button onClick={onBack} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: '"Inter Tight", sans-serif', fontSize: 14,
          color: 'var(--ink-2)',
        }}>← Atrás</button>
        <span style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 10, letterSpacing: 1.5, color: 'var(--ink-3)',
        }}>05 · WHATSAPP</span>
        <div style={{ width: 50 }} />
      </div>

      <div style={{ padding: '16px 20px 0' }}>
        <h1 style={{
          fontFamily: '"Roboto", serif',
          fontSize: 40, lineHeight: 1, margin: 0, fontWeight: 400,
          color: 'var(--ink)', letterSpacing: -1.5,
        }}>Mensaje al<br/><span style={{ fontStyle: 'italic' }}>cliente</span>.</h1>
      </div>

      {/* recipient */}
      <div style={{
        margin: '24px 20px 0',
        padding: '12px 14px',
        background: 'var(--paper)',
        border: '1px solid var(--hairline)',
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{ width: 36, height: 36, flexShrink: 0 }}>
          <PhotoPlaceholder tone={lead.photoTone} label="" />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: '"Inter Tight", sans-serif',
            fontSize: 14, fontWeight: 600, color: 'var(--ink)',
          }}>{lead.name}</div>
          <div style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 10, color: 'var(--ink-3)',
          }}>{lead.whatsapp || '+52 55 — sin número'}</div>
        </div>
      </div>

      {/* message editor */}
      <div style={{ padding: '20px 20px 0', flex: 1, overflow: 'auto' }}>
        <SectionHeader index={1} label="Mensaje · editable" />
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          rows={8}
          style={{
            marginTop: 12,
            width: '100%',
            padding: '14px 16px',
            background: 'var(--paper)',
            border: '1px solid var(--hairline)',
            fontFamily: '"Inter Tight", sans-serif',
            fontSize: 14, lineHeight: 1.5, color: 'var(--ink)',
            outline: 'none', resize: 'none', boxSizing: 'border-box',
          }}
        />

        <div style={{ marginTop: 20 }}>
          <SectionHeader index={2} label="Vista previa del enlace" />
          <div style={{
            marginTop: 12,
            background: 'var(--paper)',
            border: '1px solid var(--hairline)',
            padding: 14,
            display: 'flex', gap: 12, alignItems: 'center',
          }}>
            <div style={{ width: 56, height: 56, flexShrink: 0 }}>
              <ProposalLogo proposal={window.PROPOSAL_TEMPLATES[0]} businessName={lead.name} size={56} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 9, letterSpacing: 1, color: 'var(--ink-3)',
              }}>LOSLOGOS.APP</div>
              <div style={{
                fontFamily: '"Roboto", serif',
                fontSize: 17, color: 'var(--ink)',
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>3 propuestas para {lead.name}</div>
              <div style={{
                fontFamily: '"Inter Tight", sans-serif',
                fontSize: 11, color: 'var(--ink-2)',
              }}>Mira tu antes / después y elige.</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        padding: '12px 20px 30px',
        borderTop: '1px solid var(--hairline)',
        background: 'var(--bg)',
      }}>
        <PrimaryButton onClick={onSent}>
          Abrir WhatsApp y enviar
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
        </PrimaryButton>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────
// 8. PUBLIC LANDING (per business) — shown in full screen
// ──────────────────────────────────────────
function ScreenLanding({ lead, onBack }) {
  return (
    <div style={{
      width: '100%', height: '100%', background: 'var(--bg)',
      display: 'flex', flexDirection: 'column', overflow: 'auto',
    }}>
      <div style={{
        padding: '54px 20px 14px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <button onClick={onBack} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: '"Inter Tight", sans-serif', fontSize: 13,
          color: 'var(--ink-2)',
        }}>← Cerrar vista</button>
        <span style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 10, letterSpacing: 1, color: 'var(--ink-3)',
        }}>LOSLOGOS.APP/{lead.id.toUpperCase()}</span>
      </div>

      {/* hero */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 10, letterSpacing: 1.5, color: 'var(--ink-3)',
        }}>UNA PROPUESTA PRIVADA PARA</div>
        <h1 style={{
          fontFamily: '"Roboto", serif',
          fontSize: 44, lineHeight: 0.95, margin: '6px 0 0',
          fontWeight: 400, letterSpacing: -1.5, color: 'var(--ink)',
        }}>{lead.name}</h1>
        <p style={{
          marginTop: 14,
          fontFamily: '"Inter Tight", sans-serif',
          fontSize: 14, lineHeight: 1.5, color: 'var(--ink-2)',
          maxWidth: 320,
        }}>Pasamos por su negocio y nos imaginamos cómo podría verse. Aquí tres direcciones — elija la que más le hable.</p>
      </div>

      {/* before/after side-by-side */}
      <div style={{ padding: '24px 20px 0' }}>
        <SectionHeader index={1} label="Antes / Después" />
        <div style={{
          marginTop: 14,
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8,
        }}>
          <div>
            <div style={{ aspectRatio: '1', position: 'relative' }}>
              <PhotoPlaceholder tone={lead.photoTone} label="actual" />
            </div>
            <div style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 9, letterSpacing: 1, color: 'var(--ink-3)', marginTop: 6,
            }}>ANTES</div>
          </div>
          <div>
            <div style={{ aspectRatio: '1' }}>
              <ProposalLogo proposal={window.PROPOSAL_TEMPLATES[1]} businessName={lead.name} size={160} />
            </div>
            <div style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 9, letterSpacing: 1, color: 'var(--ink-3)', marginTop: 6,
            }}>DESPUÉS</div>
          </div>
        </div>
      </div>

      {/* proposals */}
      <div style={{ padding: '28px 20px 0' }}>
        <SectionHeader index={2} label="3 direcciones" />
        <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {window.PROPOSAL_TEMPLATES.map((p, i) => (
            <div key={p.id} style={{
              background: 'var(--paper)',
              border: '1px solid var(--hairline)',
              display: 'flex', gap: 12, padding: 12,
            }}>
              <div style={{ flexShrink: 0 }}>
                <ProposalLogo proposal={p} businessName={lead.name} size={88} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: 9, letterSpacing: 1, color: 'var(--ink-3)',
                }}>OPCIÓN 0{i + 1}</div>
                <div style={{
                  fontFamily: '"Roboto", serif',
                  fontSize: 22, color: 'var(--ink)', fontStyle: 'italic',
                  lineHeight: 1.1, marginTop: 2,
                }}>{p.name}</div>
                <div style={{
                  fontFamily: '"Inter Tight", sans-serif',
                  fontSize: 11, color: 'var(--ink-2)', lineHeight: 1.4, marginTop: 6,
                }}>{p.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '32px 20px 60px' }}>
        <div style={{
          background: 'var(--ink)',
          color: 'var(--paper)',
          padding: '28px 22px',
        }}>
          <div style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 10, letterSpacing: 1.5, opacity: 0.6,
          }}>SI LE GUSTA ALGUNA</div>
          <h2 style={{
            fontFamily: '"Roboto", serif',
            fontSize: 32, lineHeight: 1, margin: '6px 0 0',
            fontWeight: 400, letterSpacing: -1,
          }}>Hagámoslo<br/><span style={{ fontStyle: 'italic' }}>realidad</span>.</h2>
          <p style={{
            marginTop: 12,
            fontFamily: '"Inter Tight", sans-serif',
            fontSize: 13, opacity: 0.85, lineHeight: 1.4,
          }}>Diseño final, archivos para impresión y manual de marca. Desde $4,800.</p>
          <button style={{
            marginTop: 18, width: '100%', padding: '14px',
            background: 'var(--paper)', color: 'var(--ink)',
            border: 'none', cursor: 'pointer',
            fontFamily: '"Inter Tight", sans-serif',
            fontSize: 14, fontWeight: 600,
          }}>Me interesa →</button>
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────
// 9. FAVORITOS
// ──────────────────────────────────────────
function ScreenFavorites({ leads, onSelectLead }) {
  const favorited = leads.filter(l => l.favorited && l.proposalsReady);

  return (
    <div style={{
      width: '100%', height: '100%', background: 'var(--bg)',
      display: 'flex', flexDirection: 'column',
      paddingBottom: 62,
    }}>
      {/* nav */}
      <div style={{
        padding: '60px 20px 14px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ width: 36 }} />
        <span style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 10, letterSpacing: 1.5, color: 'var(--ink-3)',
        }}>FAVORITOS</span>
        <div style={{ width: 36 }} />
      </div>

      {/* header */}
      <div style={{ padding: '8px 20px 0' }}>
        <h1 style={{
          fontFamily: '"Roboto", serif',
          fontSize: 56, lineHeight: 0.95, margin: 0,
          fontWeight: 400, color: 'var(--ink)', letterSpacing: -2,
        }}>
          Favoritos
          <span style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 13, color: 'var(--ink-3)', letterSpacing: 0,
            marginLeft: 12, verticalAlign: 'top',
          }}>{String(favorited.length).padStart(2, '0')}</span>
        </h1>
        <div style={{
          marginTop: 6,
          fontFamily: '"Inter Tight", sans-serif',
          fontSize: 13, color: 'var(--ink-2)',
        }}>Propuestas que guardaste para presentar.</div>
      </div>

      {/* list */}
      <div style={{ flex: 1, overflow: 'auto', padding: '20px 20px 20px' }}>
        {favorited.length === 0 ? (
          <div style={{
            padding: '60px 0', textAlign: 'center',
            fontFamily: '"Roboto", serif', fontSize: 22, fontStyle: 'italic',
            color: 'var(--ink-3)',
          }}>Sin favoritos aún.</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {favorited.map(lead => (
              <FavoriteCard key={lead.id} lead={lead} onView={() => onSelectLead(lead.id)} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FavoriteCard({ lead, onView }) {
  return (
    <div style={{
      background: 'var(--paper)',
      border: '1px solid var(--hairline)',
      padding: 14,
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        marginBottom: 12,
      }}>
        <div>
          <div style={{
            fontFamily: '"Roboto", serif',
            fontSize: 18, color: 'var(--ink)', lineHeight: 1.1,
          }}>{lead.name}</div>
          <div style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 9, letterSpacing: 1, color: 'var(--ink-3)', marginTop: 4,
          }}>{lead.capturedAt.toUpperCase()}</div>
        </div>
        <div style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 9, color: 'var(--ink-3)', letterSpacing: 0.5,
          display: 'flex', alignItems: 'center', gap: 4,
        }}>
          2 / 3
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <div style={{ flex: 1, height: 80 }}>
          <ProposalLogo proposal={window.PROPOSAL_TEMPLATES[1]} businessName={lead.name} size={80} />
        </div>
        <button onClick={onView} style={{
          padding: '10px 16px',
          background: 'var(--ink)', color: 'var(--paper)',
          border: 'none', cursor: 'pointer',
          fontFamily: '"Inter Tight", sans-serif',
          fontSize: 13, fontWeight: 600,
        }}>ver →</button>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────
// 10. CONFIGURACIÓN
// ──────────────────────────────────────────
function ScreenConfig({ onBack }) {
  const settings = [
    { label: 'Correo electrónico', value: 'sebastian@99logos.app' },
    { label: 'Celular vinculado', value: '+52 55 0000 0000' },
    { label: 'Estilo visual', value: 'Minimal · clásico' },
    { label: 'Idioma', value: 'Español' },
    { label: 'Plan', value: 'Pro · mensual' },
  ];

  return (
    <div style={{
      width: '100%', height: '100%', background: 'var(--bg)',
      display: 'flex', flexDirection: 'column',
      paddingBottom: 62,
    }}>
      {/* nav */}
      <div style={{
        padding: '60px 20px 14px',
        display: 'flex', alignItems: 'center',
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
          flex: 1, textAlign: 'center',
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 10, letterSpacing: 1.5, color: 'var(--ink-3)',
        }}>AJUSTES</span>
        <div style={{ width: 36 }} />
      </div>

      {/* header */}
      <div style={{ padding: '8px 20px 0' }}>
        <h1 style={{
          fontFamily: '"Roboto", serif',
          fontSize: 56, lineHeight: 0.95, margin: 0,
          fontWeight: 400, color: 'var(--ink)', letterSpacing: -2,
        }}>Configuración</h1>
      </div>

      {/* settings list */}
      <div style={{ flex: 1, overflow: 'auto', padding: '24px 20px 0' }}>
        {settings.map((s, i) => (
          <div key={s.label} style={{
            padding: '16px 0',
            borderBottom: `1px dashed var(--hairline)`,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <div>
              <div style={{
                fontFamily: '"Inter Tight", sans-serif',
                fontSize: 14, fontWeight: 500, color: 'var(--ink)',
              }}>{s.label}</div>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 9, letterSpacing: 0.5, color: 'var(--ink-3)', marginTop: 3,
              }}>{s.value}</div>
            </div>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--ink-3)" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
          </div>
        ))}

        <button style={{
          marginTop: 28, padding: 0, background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: '"Inter Tight", sans-serif',
          fontSize: 14, color: '#C24A2C', letterSpacing: -0.2,
        }}>Cerrar sesión</button>
      </div>
    </div>
  );
}

Object.assign(window, {
  ScreenGenerating, ScreenLeadDetail, ScreenWhatsapp, ScreenLanding,
  ScreenFavorites, FavoriteCard, ScreenConfig,
  ProposalRow, BeforeAfterStack, HistoryTimeline,
});
