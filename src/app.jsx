// app.jsx — Navigation shell for 99 Logos wireframe prototype

const { useState } = React;

function LoslogosApp() {
  const [screen, setScreen]       = useState('intro');
  const [leads, setLeads]         = useState(window.SEED_LEADS);
  const [activeLeadId, setActive] = useState('l1');

  const activeLead = leads.find(l => l.id === activeLeadId) || leads[0];

  const nav = {
    go: (s) => setScreen(s),

    goDetail: (id) => {
      setActive(id);
      setScreen('historial');
    },

    goProgress: (data) => {
      const newLead = {
        id: 'l' + Date.now(),
        name: data.name || 'Nuevo cliente',
        category: data.category || 'Retail',
        whatsapp: data.phone || '',
        notes: data.notes || '',
        location: 'Captura actual',
        capturedAt: 'Justo ahora',
        status: 'nuevo',
        photoTone: '#8E6F4E',
        photoLabel: 'fachada · captura',
        initials: (data.name || 'NC').slice(0, 2).toUpperCase(),
        proposalsReady: false,
      };
      setLeads(ls => [newLead, ...ls]);
      setActive(newLead.id);
      setScreen('progress');
    },

    onProgressDone: () => {
      setLeads(ls => ls.map(l => l.id === activeLeadId ? { ...l, proposalsReady: true } : l));
      setScreen('resultados');
    },

    onSent: () => {
      setLeads(ls => ls.map(l => l.id === activeLeadId ? { ...l, status: 'contactado' } : l));
      setScreen('historial');
    },
  };

  let content;
  if      (screen === 'intro')      content = <ScreenIntro      nav={nav} />;
  else if (screen === 'home')       content = <ScreenHome       nav={nav} />;
  else if (screen === 'camera')     content = <ScreenCamera     nav={nav} />;
  else if (screen === 'datos')      content = <ScreenDatos      nav={nav} />;
  else if (screen === 'progress')   content = <ScreenProgress   nav={nav} leadName={activeLead.name} />;
  else if (screen === 'resultados') content = <ScreenResultados nav={nav} lead={activeLead} />;
  else if (screen === 'mensaje')    content = <ScreenMensaje    nav={nav} lead={activeLead} />;
  else if (screen === 'whatsapp')   content = <ScreenWhatsapp   nav={nav} lead={activeLead} />;
  else if (screen === 'clientes')   content = <ScreenClientes   nav={nav} leads={leads} />;
  else if (screen === 'historial')  content = <ScreenHistorial  nav={nav} lead={activeLead} />;
  else if (screen === 'propuestas') content = <ScreenPropuestas nav={nav} lead={activeLead} />;
  else if (screen === 'favoritos')  content = <ScreenFavoritos  nav={nav} leads={leads} />;
  else if (screen === 'config')     content = <ScreenConfig     nav={nav} />;

  const SCREENS = [
    ['intro','01 Intro'], ['home','02 Home'], ['camera','03 Cámara'],
    ['datos','04 Datos'], ['progress','05 Progress'], ['resultados','06 Resultados'],
    ['mensaje','07 Mensaje'], ['whatsapp','08 WhatsApp'], ['clientes','09 Clientes'],
    ['historial','10 Historial'], ['propuestas','11 Propuestas'],
    ['favoritos','12 Favoritos'], ['config','13 Config'],
  ];

  return (
    <div style={{
      minHeight:'100vh', background:'#f0eee9',
      display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'center',
      padding:'48px 20px 32px',
      fontFamily:"'Patrick Hand',cursive",
    }}>
      {/* canvas header */}
      <div style={{
        position:'fixed', top:16, left:24, right:24,
        display:'flex', justifyContent:'space-between', alignItems:'center',
        pointerEvents:'none', zIndex:10,
      }}>
        <div style={{fontFamily:"'Kalam',cursive", fontWeight:700, fontSize:16, color:'#1b1a17'}}>
          99 logos
        </div>
        <div style={{fontFamily:"'Caveat',cursive", fontSize:13, color:'#7a766f'}}>
          {screen.toUpperCase()}
        </div>
      </div>

      {content}

      {/* screen jumper */}
      <div style={{
        marginTop:24, display:'flex', flexWrap:'wrap',
        gap:4, justifyContent:'center', maxWidth:720,
      }}>
        {SCREENS.map(([id, label]) => (
          <button key={id} onClick={() => setScreen(id)} style={{
            padding:'4px 8px',
            background: screen === id ? '#1b1a17' : 'transparent',
            color:       screen === id ? '#fbf8f1' : '#7a766f',
            border: '1.5px solid ' + (screen === id ? '#1b1a17' : 'rgba(27,26,23,.25)'),
            cursor:'pointer', fontFamily:"'Patrick Hand',cursive",
            fontSize:11, borderRadius:4,
          }}>{label}</button>
        ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<LoslogosApp />);
