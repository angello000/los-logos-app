// screens-1.jsx — S01 Intro through S07 Mensaje

const { useState, useEffect } = React;

// S01 · Intro (splash ~2s, tap to skip)
function ScreenIntro({ nav }) {
  useEffect(() => {
    const t = setTimeout(() => nav.go('home'), 2000);
    return () => clearTimeout(t);
  }, []);
  return (
    <Phone screen="intro" nav={nav}>
      <div onClick={() => nav.go('home')} style={{
        flex:1, display:'flex', flexDirection:'column',
        alignItems:'center', justifyContent:'center', gap:20, paddingBottom:60, cursor:'pointer',
      }}>
        <div style={{
          width:90, height:90, border:`2px solid ${sk.line}`, borderRadius:'50%',
          display:'flex', alignItems:'center', justifyContent:'center',
          fontFamily:"'Kalam',cursive", fontWeight:700, fontSize:26, background:'#fff',
        }}>99</div>
        <div className="sk-h" style={{fontSize:24}}>logos</div>
        <div style={{fontSize:13, color:sk.muted, textAlign:'center', maxWidth:200}}>
          tu copiloto para<br/>propuestas de diseño
        </div>
        <div style={{fontSize:11, color:sk.muted, marginTop:8}}>toca para continuar</div>
      </div>
    </Phone>
  );
}

// S02 · Home
function ScreenHome({ nav }) {
  return (
    <Phone screen="home" nav={nav}>
      <div style={{display:'flex', justifyContent:'center', marginTop:8}}>
        <div style={{
          width:54, height:54, border:`1.5px solid ${sk.line}`, borderRadius:'50%',
          display:'flex', alignItems:'center', justifyContent:'center',
          fontFamily:"'Kalam',cursive", fontWeight:700, fontSize:18, background:'#fff',
        }}>99</div>
      </div>
      <div className="sk-h" style={{fontSize:18, textAlign:'center', marginTop:8}}>
        ¿Qué quieres<br/>hacer hoy?
      </div>
      <div style={{display:'flex', flexDirection:'column', gap:12, marginTop:16, padding:'0 8px'}}>
        <button className="sk-btn sk-btn-primary" style={{justifyContent:'center', padding:'12px'}}
          onClick={() => nav.go('camera')}>
          ＋ Nuevo cliente
        </button>
        <button className="sk-btn" style={{justifyContent:'center', padding:'12px'}}
          onClick={() => nav.go('clientes')}>
          👥 Ver clientes
        </button>
      </div>
    </Phone>
  );
}

// S03 · Cámara
function ScreenCamera({ nav }) {
  return (
    <Phone screen="camera" nav={nav}>
      <SkBack label="Home" onClick={() => nav.go('home')} />
      <div style={{
        flex:1, border:`1.5px solid ${sk.line}`, borderRadius:8, marginTop:4,
        background:'#1b1a17', color:'#fff',
        display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between',
        padding:'16px 8px',
      }}>
        <div style={{width:'100%', display:'flex', justifyContent:'space-between'}}>
          <Corner/><Corner flip/>
        </div>
        <div style={{textAlign:'center', fontSize:13, opacity:.75}}>
          Apunta al local<br/>de tu cliente
        </div>
        <div style={{width:'100%', display:'flex', justifyContent:'space-between'}}>
          <Corner down/><Corner down flip/>
        </div>
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:18, padding:'8px 0', flexShrink:0}}>
        <span style={{fontSize:18, opacity:.6}}>⚡</span>
        <div onClick={() => nav.go('datos')} style={{
          width:48, height:48, border:`2px solid ${sk.line}`, borderRadius:'50%',
          display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer',
        }}>
          <div style={{width:36, height:36, background:sk.line, borderRadius:'50%'}}/>
        </div>
        <span style={{fontSize:18, opacity:.6}}>↻</span>
      </div>
    </Phone>
  );
}

// S04 · Datos cliente
function ScreenDatos({ nav }) {
  const [name, setName]   = useState('Local de cortinas');
  const [phone, setPhone] = useState('+57 000 000 0000');
  const [notes, setNotes] = useState('Tienda pequeña, vidriera oscura…');
  const [cat, setCat]     = useState('Retail');
  const cats = ['Retail','Comida','Servicios','Salud','Moda','Hogar'];

  return (
    <Phone screen="datos" nav={nav}>
      <SkBack label="Cámara" onClick={() => nav.go('camera')} />
      <div className="sk-h" style={{fontSize:15, flexShrink:0}}>Foto tomada</div>
      <div className="sk-img" style={{height:78, position:'relative', flexShrink:0}}>
        <span>📷 local cliente</span>
        <button className="sk-btn" onClick={() => nav.go('camera')}
          style={{position:'absolute', right:4, bottom:4, padding:'2px 6px', fontSize:11}}>retomar</button>
      </div>

      <div style={{flex:1, overflow:'auto', display:'flex', flexDirection:'column', gap:6}}>
        <div className="sk-h" style={{fontSize:13}}>Datos</div>
        <input className="sk-field" value={name} onChange={e => setName(e.target.value)} placeholder="Nombre del negocio"/>
        <input className="sk-field" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Celular / WhatsApp"/>
        <textarea className="sk-field" value={notes} onChange={e => setNotes(e.target.value)}
          placeholder="Notas / descripción" rows={2} style={{resize:'none', fontFamily:'inherit'}}/>
        <div className="sk-h" style={{fontSize:13}}>Categorías</div>
        <div style={{display:'flex', flexWrap:'wrap', gap:6}}>
          {cats.map(c => (
            <span key={c} className="sk-pill" onClick={() => setCat(c)}
              style={c === cat ? {background:sk.accent} : undefined}>{c}</span>
          ))}
        </div>
      </div>

      <div style={{display:'flex', justifyContent:'center', paddingTop:8, paddingBottom:8, flexShrink:0}}>
        <button className="sk-btn sk-btn-primary" style={{padding:'8px 18px'}}
          onClick={() => nav.goProgress({ name, phone, notes, category: cat })}>
          Crear cliente →
        </button>
      </div>
    </Phone>
  );
}

// S05 · Progress
function ScreenProgress({ nav, leadName }) {
  useEffect(() => {
    const t = setTimeout(() => nav.onProgressDone(), 2500);
    return () => clearTimeout(t);
  }, []);
  return (
    <Phone screen="progress" nav={nav}>
      <div style={{
        flex:1, display:'flex', flexDirection:'column',
        alignItems:'center', justifyContent:'center', gap:24, paddingBottom:60,
      }}>
        <div style={{
          width:80, height:80, border:`2px dashed ${sk.line}`, borderRadius:'50%',
          display:'flex', alignItems:'center', justifyContent:'center', fontSize:24,
          animation:'spin 2s linear infinite',
        }}>◌</div>
        <div className="sk-h" style={{fontSize:18, letterSpacing:1}}>CREANDO...</div>
        <div style={{fontSize:12, color:sk.muted, textAlign:'center', maxWidth:200}}>
          generando 3 propuestas<br/>para <strong>{leadName}</strong>
        </div>
        <div style={{width:'70%', height:6, border:`1.5px solid ${sk.line}`, borderRadius:4, overflow:'hidden'}}>
          <div style={{width:'60%', height:'100%', background:sk.accent}}/>
        </div>
      </div>
    </Phone>
  );
}

// S06 · Resultados
function ScreenResultados({ nav, lead }) {
  const [selected, setSelected] = useState(3);
  const proposals = window.PROPOSAL_TEMPLATES || [
    {id:'p1', name:'Editorial'}, {id:'p2', name:'Sello'}, {id:'p3', name:'Moderno'},
  ];
  return (
    <Phone screen="resultados" nav={nav}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0}}>
        <SkBack label="Ver leads" onClick={() => nav.go('clientes')} />
        <div style={{display:'flex', gap:4}}><span>▦</span><span>≡</span></div>
      </div>
      <div style={{fontSize:13, flexShrink:0}}>
        <div style={{fontWeight:700}}>{lead ? lead.name : 'Cliente'}</div>
        <div style={{color:sk.muted, fontSize:11}}>Propuestas para tu cliente</div>
      </div>

      <div style={{flex:1, overflow:'auto', display:'flex', flexDirection:'column', gap:8}}>
        {proposals.map((p, i) => (
          <div key={p.id} className="sk-box-soft"
            onClick={() => setSelected(i + 1)}
            style={{padding:8, display:'flex', gap:8, alignItems:'center', background:'#fff', flexShrink:0, cursor:'pointer'}}>
            <div className="sk-img" style={{width:54, height:54, flex:'0 0 54px'}}>logo {i+1}</div>
            <div style={{flex:1, display:'flex', flexDirection:'column', gap:4}}>
              <div style={{fontWeight:700, fontSize:13}}>{p.name}</div>
              <div className="sk-line-dim" style={{width:'90%'}}/>
              <div className="sk-line-dim" style={{width:'60%'}}/>
            </div>
            <span className={`sk-radio${selected === i+1 ? ' on' : ''}`}/>
          </div>
        ))}
      </div>

      <div style={{display:'flex', justifyContent:'center', paddingTop:6, paddingBottom:8, flexShrink:0}}>
        <button className="sk-btn sk-btn-primary" style={{padding:'8px 20px'}}
          onClick={() => nav.go('mensaje')}>Siguiente →</button>
      </div>
    </Phone>
  );
}

// S07 · Edición mensaje
function ScreenMensaje({ nav, lead }) {
  const [msg, setMsg] = useState(
    `Hola${lead ? ' ' + lead.name.split(' ')[0] : ''}! Soy diseñador y preparé 3 propuestas de logo para tu negocio. ¿Quieres verlas?`
  );
  return (
    <Phone screen="mensaje" nav={nav}>
      <SkBack label="Volver" onClick={() => nav.go('resultados')} />
      <div className="sk-h" style={{fontSize:14}}>
        ¿Qué le quieres<br/>decir a tu cliente?
      </div>
      <div style={{fontSize:12, flexShrink:0}}>
        <div style={{color:sk.muted, fontSize:11}}>{lead ? lead.name : 'Cliente'}</div>
        <div>{lead && lead.whatsapp ? lead.whatsapp : '+57 000 000 0000'}</div>
      </div>

      <div className="sk-h" style={{fontSize:12}}>Mensaje</div>
      <textarea className="sk-field" rows={3} value={msg} onChange={e => setMsg(e.target.value)}
        style={{resize:'none', fontFamily:'inherit'}}/>

      <div className="sk-h" style={{fontSize:12}}>URL de la propuesta</div>
      <div style={{display:'flex', gap:6, alignItems:'center'}}>
        <span>🔗</span>
        <input className="sk-field" style={{flex:1}}
          defaultValue={lead ? `99logos.app/p/${lead.id}` : '99logos.app/p/x4k9'}/>
        <button className="sk-btn" style={{padding:'2px 8px', flexShrink:0}}>ver</button>
      </div>

      <div style={{marginTop:'auto', display:'flex', justifyContent:'center', paddingTop:6, paddingBottom:8}}>
        <button className="sk-btn sk-btn-primary" style={{padding:'8px 16px'}}
          onClick={() => nav.go('whatsapp')}>Guardar y enviar ↗</button>
      </div>
    </Phone>
  );
}

Object.assign(window, {
  ScreenIntro, ScreenHome, ScreenCamera, ScreenDatos,
  ScreenProgress, ScreenResultados, ScreenMensaje,
});
