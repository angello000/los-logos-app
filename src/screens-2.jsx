// screens-2.jsx — S08 WhatsApp through S13 Config

// S08 · WhatsApp cliente
function ScreenWhatsapp({ nav, lead }) {
  return (
    <Phone screen="whatsapp" nav={nav}>
      <div style={{display:'flex', alignItems:'center', gap:8, borderBottom:`1.5px solid ${sk.line}`, paddingBottom:6, flexShrink:0}}>
        <span style={{fontSize:12, cursor:'pointer'}} onClick={() => nav.go('mensaje')}>‹</span>
        <div style={{
          width:22, height:22, borderRadius:'50%', border:`1.5px solid ${sk.line}`,
          display:'flex', alignItems:'center', justifyContent:'center', fontSize:10,
        }}>99</div>
        <div style={{flex:1, fontSize:12}}>
          <div style={{fontWeight:700}}>99 logos</div>
          <div style={{fontSize:10, color:sk.muted}}>en línea</div>
        </div>
        <span style={{fontSize:14}}>📞</span>
      </div>

      <div style={{flex:1, display:'flex', flexDirection:'column', gap:6, paddingTop:8, overflow:'auto'}}>
        <div style={{
          alignSelf:'flex-start', maxWidth:'80%',
          border:`1.5px solid ${sk.line}`, borderRadius:'10px 10px 10px 2px',
          background:'#fff', padding:'6px 8px', fontSize:11, lineHeight:1.3,
        }}>
          Hola {lead ? lead.name.split(' ')[0] : 'cliente'}, soy el diseñador y preparé 3 propuestas que quiero mostrarte.
        </div>
        <div style={{
          alignSelf:'flex-start', maxWidth:'80%',
          border:`1.5px solid ${sk.line}`, borderRadius:'10px 10px 10px 2px',
          background:'#fff', padding:'6px 8px', fontSize:11,
        }}>
          🔗 99logos.app/p/{lead ? lead.id : 'x4k9'}
        </div>
        <div style={{
          alignSelf:'flex-end', maxWidth:'50%',
          border:`1.5px solid ${sk.line}`, borderRadius:'10px 10px 2px 10px',
          background:sk.accent2, padding:'6px 8px', fontSize:11,
        }}>Sí! 👀</div>
      </div>

      <div style={{display:'flex', gap:6, alignItems:'center', borderTop:`1.5px solid ${sk.line}`, paddingTop:6, paddingBottom:4, flexShrink:0}}>
        <span style={{fontSize:14}}>＋</span>
        <input className="sk-field" style={{flex:1, padding:'4px 8px'}} placeholder="Mensaje"/>
        <span style={{fontSize:14}}>🎤</span>
      </div>
      <div style={{display:'flex', justifyContent:'center', paddingBottom:8, flexShrink:0}}>
        <button className="sk-btn sk-btn-primary" style={{padding:'6px 14px'}}
          onClick={() => nav.onSent()}>
          ✓ Enviado → ver historial
        </button>
      </div>
    </Phone>
  );
}

// S09 · Clientes
function ScreenClientes({ nav, leads }) {
  const [filter, setFilter] = React.useState('Todos');
  const all = leads || [];
  const filtered = filter === 'Todos' ? all : all.filter(l => l.category === filter);
  const filters = ['Todos', ...new Set(all.map(l => l.category))];

  return (
    <Phone screen="clientes" nav={nav}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0}}>
        <SkBack onClick={() => nav.go('home')} />
        <div style={{display:'flex', gap:6}}><span>▦</span><span>≡</span></div>
      </div>
      <div className="sk-h" style={{fontSize:18, flexShrink:0}}>Clientes</div>

      <div style={{display:'flex', gap:6, flexWrap:'wrap', flexShrink:0}}>
        {filters.slice(0,4).map(f => (
          <span key={f} className="sk-pill" onClick={() => setFilter(f)}
            style={f === filter ? {background:sk.accent} : undefined}>{f}</span>
        ))}
      </div>

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, overflow:'auto', flex:1}}>
        {filtered.map(lead => (
          <div key={lead.id} className="sk-box-soft" style={{padding:6, background:'#fff'}}>
            <div className="sk-img" style={{height:60, marginBottom:4}}>
              {lead.initials || lead.name.slice(0,2)}
            </div>
            <div style={{fontSize:11, fontWeight:700, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{lead.name}</div>
            <div style={{fontSize:10, color:sk.muted}}>{lead.capturedAt}</div>
            <button className="sk-btn" onClick={() => nav.goDetail(lead.id)}
              style={{padding:'2px 6px', fontSize:10, marginTop:4}}>ver →</button>
          </div>
        ))}
      </div>
    </Phone>
  );
}

// S10 · Detalle / Historial
function ScreenHistorial({ nav, lead }) {
  const events = [
    ['hoy',  'propuesta enviada'],
    ['ayer', '3 logos generados'],
    ['lun',  'cliente creado'],
    ['lun',  'foto tomada'],
  ];
  return (
    <Phone screen="historial" nav={nav}>
      <SkBack onClick={() => nav.go('clientes')} />
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0}}>
        <div className="sk-h" style={{fontSize:17}}>{lead ? lead.name : 'Cliente'}</div>
        <span style={{fontSize:14}}>✎</span>
      </div>

      <div style={{display:'flex', gap:6, borderBottom:`1.5px solid ${sk.line}`, flexShrink:0}}>
        <div style={{padding:'4px 10px', borderBottom:`3px solid ${sk.accent}`, fontWeight:700, fontSize:12}}>Historial</div>
        <div style={{padding:'4px 10px', color:sk.muted, fontSize:12, cursor:'pointer'}}
          onClick={() => nav.go('propuestas')}>Propuestas</div>
      </div>

      <div style={{flex:1, paddingTop:6, overflow:'auto'}}>
        {events.map(([d, t], i) => (
          <div key={i} style={{display:'flex', gap:8, alignItems:'flex-start', marginBottom:10}}>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
              <div style={{
                width:10, height:10, borderRadius:'50%',
                background: i === 0 ? sk.accent : sk.paper,
                border:`1.5px solid ${sk.line}`,
              }}/>
              {i < 3 && <div style={{width:1.5, height:24, background:sk.line, opacity:.4}}/>}
            </div>
            <div>
              <div style={{fontSize:11, color:sk.muted}}>{d}</div>
              <div style={{fontSize:12}}>{t}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{display:'flex', justifyContent:'center', paddingBottom:8, flexShrink:0}}>
        <button className="sk-btn sk-btn-primary"
          onClick={() => nav.go('mensaje')}>Enviar propuesta →</button>
      </div>
    </Phone>
  );
}

// S11 · Detalle / Propuestas
function ScreenPropuestas({ nav, lead }) {
  return (
    <Phone screen="propuestas" nav={nav}>
      <SkBack onClick={() => nav.go('clientes')} />
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0}}>
        <div className="sk-h" style={{fontSize:17}}>{lead ? lead.name : 'Cliente'}</div>
        <span style={{fontSize:14}}>✎</span>
      </div>

      <div style={{display:'flex', gap:6, borderBottom:`1.5px solid ${sk.line}`, flexShrink:0}}>
        <div style={{padding:'4px 10px', color:sk.muted, fontSize:12, cursor:'pointer'}}
          onClick={() => nav.go('historial')}>Historial</div>
        <div style={{padding:'4px 10px', borderBottom:`3px solid ${sk.accent}`, fontWeight:700, fontSize:12}}>Propuestas</div>
      </div>

      <div style={{flex:1, overflow:'auto', display:'flex', flexDirection:'column', gap:8, paddingTop:4}}>
        {['01 / 03 / 2026','06 / 01 / 2026'].map(d => (
          <div key={d} style={{display:'flex', flexDirection:'column', gap:4}}>
            <div style={{display:'flex', justifyContent:'space-between', fontSize:11}}>
              <span>{d}</span><span style={{color:sk.muted}}>2 / 3</span>
            </div>
            <div className="sk-box-soft" style={{
              padding:6, display:'flex', alignItems:'center',
              justifyContent:'space-between', background:'#fff',
            }}>
              <span style={{fontSize:14}}>‹</span>
              <div className="sk-img" style={{width:64, height:48}}>logo</div>
              <span style={{fontSize:14}}>🔍</span>
              <span style={{fontSize:14}}>›</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{display:'flex', justifyContent:'center', paddingBottom:8, flexShrink:0}}>
        <button className="sk-btn sk-btn-primary"
          onClick={() => nav.go('mensaje')}>Enviar propuesta →</button>
      </div>
    </Phone>
  );
}

// S12 · Favoritos
function ScreenFavoritos({ nav, leads }) {
  const favs = (leads || []).filter(l => l.favorited);
  return (
    <Phone screen="favoritos" nav={nav}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0}}>
        <div/>
        <div style={{display:'flex', gap:6}}><span>▦</span><span>≡</span></div>
      </div>
      <div className="sk-h" style={{fontSize:18, flexShrink:0}}>Favoritos</div>

      <div style={{flex:1, overflow:'auto', display:'flex', flexDirection:'column', gap:8}}>
        {favs.length === 0 ? (
          <div style={{fontSize:13, color:sk.muted, textAlign:'center', paddingTop:40}}>
            Sin favoritos aún.<br/>Marca clientes con ♡
          </div>
        ) : favs.map(lead => (
          <div key={lead.id} className="sk-box-soft" style={{padding:8, background:'#fff'}}>
            <div style={{display:'flex', justifyContent:'space-between', fontSize:12, marginBottom:4}}>
              <span style={{fontWeight:700}}>{lead.name}</span>
              <span style={{color:sk.muted, fontSize:11}}>2 / 3 ♡</span>
            </div>
            <div style={{display:'flex', gap:6, alignItems:'center'}}>
              <div className="sk-img" style={{flex:1, height:60}}>logo guardado</div>
              <button className="sk-btn" onClick={() => nav.goDetail(lead.id)}
                style={{padding:'2px 6px', fontSize:10}}>ver →</button>
            </div>
          </div>
        ))}
      </div>
    </Phone>
  );
}

// S13 · Configuración
function ScreenConfig({ nav }) {
  const rows = [
    ['Correo electrónico','sebastian@99logos.app'],
    ['Celular vinculado','+57 000 000 0000'],
    ['Estilo visual','Minimal · clásico'],
    ['Idioma','Español'],
    ['Plan','Pro · mensual'],
  ];
  return (
    <Phone screen="config" nav={nav}>
      <SkBack onClick={() => nav.go('home')} />
      <div className="sk-h" style={{fontSize:18, flexShrink:0}}>Configuración</div>

      <div style={{flex:1, overflow:'auto'}}>
        {rows.map(([k, v]) => (
          <div key={k} style={{
            display:'flex', justifyContent:'space-between', alignItems:'center',
            padding:'8px 4px', borderBottom:`1.5px dashed ${sk.muted}`,
          }}>
            <div>
              <div style={{fontSize:12}}>{k}</div>
              <div style={{fontSize:10, color:sk.muted}}>{v}</div>
            </div>
            <span style={{fontSize:14, color:sk.muted}}>›</span>
          </div>
        ))}
        <div style={{marginTop:6, fontSize:11, color:'#a44', cursor:'pointer'}}>
          Cerrar sesión
        </div>
      </div>
    </Phone>
  );
}

Object.assign(window, {
  ScreenWhatsapp, ScreenClientes, ScreenHistorial,
  ScreenPropuestas, ScreenFavoritos, ScreenConfig,
});
