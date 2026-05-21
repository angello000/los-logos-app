// Loslogos — App container, navigation state, frame switcher

const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "dark": false,
  "device": "ios"
}/*EDITMODE-END*/;

function LoslogosApp() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [tweaksOpen, setTweaksOpen] = useState(false);

  // app state
  const [screen, setScreen] = useState('welcome'); // welcome | onboarding | home | camera | capture | generating | leads | detail | whatsapp | landing | favorites | config
  const [leads, setLeads] = useState(window.SEED_LEADS);
  const [activeLeadId, setActiveLeadId] = useState('l1');
  const [statusMenuOpen, setStatusMenuOpen] = useState(false);

  // tweaks panel host wiring
  useEffect(() => {
    const onMessage = (e) => {
      if (e.data?.type === '__activate_edit_mode') setTweaksOpen(true);
      if (e.data?.type === '__deactivate_edit_mode') setTweaksOpen(false);
    };
    window.addEventListener('message', onMessage);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMessage);
  }, []);

  const dark = tweaks.dark;
  const device = tweaks.device;

  // CSS theme vars
  const themeVars = dark ? {
    '--bg': '#13110F',
    '--paper': '#1F1C18',
    '--ink': '#F0E9DD',
    '--ink-2': 'rgba(240,233,221,0.7)',
    '--ink-3': 'rgba(240,233,221,0.45)',
    '--hairline': 'rgba(240,233,221,0.13)',
    '--accent': 'oklch(0.78 0.13 70)',
    '--accent-tint': 'rgba(214,164,90,0.12)',
  } : {
    '--bg': '#F6F2EC',
    '--paper': '#FFFCF7',
    '--ink': '#1A1816',
    '--ink-2': 'rgba(26,24,22,0.7)',
    '--ink-3': 'rgba(26,24,22,0.42)',
    '--hairline': 'rgba(26,24,22,0.10)',
    '--accent': 'oklch(0.72 0.13 70)',
    '--accent-tint': 'rgba(180,120,60,0.10)',
  };

  const activeLead = leads.find(l => l.id === activeLeadId) || leads[0];

  // navigation handlers
  const goWelcome = () => setScreen('welcome');
  const goOnboarding = () => setScreen('onboarding');
  const goHome = () => setScreen('home');
  const goCamera = () => setScreen('camera');
  const goCapture = () => setScreen('capture');
  const goGenerating = () => setScreen('generating');
  const goLeads = () => setScreen('leads');
  const goDetail = (id) => { setActiveLeadId(id); setScreen('detail'); };
  const goWhatsapp = () => setScreen('whatsapp');
  const goLanding = () => setScreen('landing');
  const goFavorites = () => setScreen('favorites');
  const goConfig = () => setScreen('config');

  const saveCapture = (data) => {
    const newLead = {
      id: 'l' + (leads.length + 1) + '_' + Date.now(),
      name: data.name,
      category: data.category,
      whatsapp: data.whatsapp,
      notes: data.notes,
      location: 'Captura actual',
      capturedAt: 'Justo ahora',
      status: 'nuevo',
      photoTone: '#8E6F4E',
      photoLabel: 'fachada · captura',
      initials: data.name.slice(0, 2).toUpperCase(),
      proposalsReady: false,
    };
    setLeads([newLead, ...leads]);
    setActiveLeadId(newLead.id);
    goGenerating();
  };

  const onGenerationDone = () => {
    setLeads(ls => ls.map(l => l.id === activeLeadId ? { ...l, proposalsReady: true } : l));
    setScreen('detail');
  };

  const cycleStatus = () => {
    const order = window.STATUS_ORDER;
    setLeads(ls => ls.map(l => {
      if (l.id !== activeLeadId) return l;
      const i = order.indexOf(l.status);
      return { ...l, status: order[(i + 1) % order.length] };
    }));
  };

  // current screen
  let content;
  if (screen === 'welcome') content = <ScreenWelcome onContinue={goOnboarding} />;
  else if (screen === 'onboarding') content = <ScreenOnboarding onContinue={goHome} />;
  else if (screen === 'home') content = <ScreenHome onNewClient={goCamera} onViewClients={goLeads} />;
  else if (screen === 'camera') content = <ScreenCamera onCapture={goCapture} onOpenLeads={goLeads} leadCount={leads.length} />;
  else if (screen === 'capture') content = <ScreenCaptureForm onSave={saveCapture} onCancel={goCamera} />;
  else if (screen === 'generating') content = <ScreenGenerating businessName={activeLead.name} onDone={onGenerationDone} />;
  else if (screen === 'leads') content = <ScreenLeadsList leads={leads} onSelectLead={goDetail} onBack={goHome} onNewLead={goCamera} />;
  else if (screen === 'favorites') content = <ScreenFavorites leads={leads} onSelectLead={goDetail} />;
  else if (screen === 'config') content = <ScreenConfig onBack={goHome} />;
  else if (screen === 'detail') content = <ScreenLeadDetail
    lead={activeLead}
    onBack={goLeads}
    onSendWhatsapp={goWhatsapp}
    onChangeStatus={cycleStatus}
    onRegenerate={() => { goGenerating(); }}
    onOpenLanding={goLanding}
  />;
  else if (screen === 'whatsapp') content = <ScreenWhatsapp lead={activeLead} onBack={() => setScreen('detail')} onSent={() => {
    setLeads(ls => ls.map(l => l.id === activeLeadId ? { ...l, status: 'contactado', lastContact: 'Hace un momento' } : l));
    setScreen('detail');
  }} />;
  else if (screen === 'landing') content = <ScreenLanding lead={activeLead} onBack={() => setScreen('detail')} />;

  // pick frame
  const showTabBar = ['home', 'camera', 'leads', 'favorites', 'config'].includes(screen);

  const wrapped = (
    <div style={{ ...themeVars, width: '100%', height: '100%', background: 'var(--bg)', position: 'relative' }}>
      {content}
      {showTabBar && (
        <TabBar
          active={screen}
          onHome={goHome}
          onLeads={goLeads}
          onCamera={goCamera}
          onFavorites={goFavorites}
          onConfig={goConfig}
        />
      )}
    </div>
  );

  let framedDevice;
  if (device === 'android') {
    framedDevice = <AndroidDevice width={400} height={870} dark={dark}>{wrapped}</AndroidDevice>;
  } else {
    framedDevice = <IOSDevice width={400} height={870} dark={dark}>{wrapped}</IOSDevice>;
  }

  // background canvas
  const canvasBg = dark ? '#0A0908' : '#EDE7DE';
  const canvasInk = dark ? 'rgba(240,233,221,0.5)' : 'rgba(26,24,22,0.55)';

  return (
    <div style={{
      ...themeVars,
      minHeight: '100vh', width: '100%',
      background: canvasBg,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '40px 20px',
      boxSizing: 'border-box',
      fontFamily: '"Inter Tight", sans-serif',
      position: 'relative',
    }}>
      {/* canvas chrome — editorial header */}
      <div style={{
        position: 'fixed', top: 24, left: 32, right: 32,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        pointerEvents: 'none',
        zIndex: 1,
      }}>
        <div style={{
          fontFamily: '"Roboto", serif',
          fontSize: 22, fontStyle: 'italic',
          color: canvasInk,
        }}>Loslogos</div>
        <div style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 10, letterSpacing: 1.5, color: canvasInk,
        }}>PROTOTIPO · {device.toUpperCase()} · {screen.toUpperCase()}</div>
      </div>

      {framedDevice}

      {/* bottom screen jumper */}
      <div style={{
        marginTop: 24,
        display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center',
        maxWidth: 720,
      }}>
        {[
          ['welcome', '00 Bienvenida'],
          ['onboarding', '01 Onboarding'],
          ['home', '02 Home'],
          ['camera', '03 Cámara'],
          ['capture', '04 Captura'],
          ['generating', '05 Generando'],
          ['leads', '06 Leads'],
          ['detail', '07 Detalle'],
          ['whatsapp', '08 WhatsApp'],
          ['landing', '09 Landing'],
          ['favorites', '10 Favoritos'],
          ['config', '11 Config'],
        ].map(([id, label]) => (
          <button key={id} onClick={() => setScreen(id)} style={{
            padding: '6px 10px',
            background: screen === id ? (dark ? '#F0E9DD' : '#1A1816') : 'transparent',
            color: screen === id ? (dark ? '#1A1816' : '#FFFCF7') : canvasInk,
            border: '1px solid ' + (screen === id ? (dark ? '#F0E9DD' : '#1A1816') : (dark ? 'rgba(240,233,221,0.18)' : 'rgba(26,24,22,0.18)')),
            cursor: 'pointer',
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 10, letterSpacing: 0.5,
          }}>{label}</button>
        ))}
      </div>

      {/* tweaks panel */}
      {tweaksOpen && (
        <TweaksPanel onClose={() => setTweaksOpen(false)}>
          <TweakSection title="Tema">
            <TweakToggle label="Modo oscuro" value={tweaks.dark} onChange={v => setTweak('dark', v)} />
          </TweakSection>
          <TweakSection title="Dispositivo">
            <TweakRadio
              value={tweaks.device}
              onChange={v => setTweak('device', v)}
              options={[
                { value: 'ios', label: 'iOS' },
                { value: 'android', label: 'Android' },
              ]}
            />
          </TweakSection>
        </TweaksPanel>
      )}
    </div>
  );
}

// ──────────────────────────────────────────
// Mount
// ──────────────────────────────────────────
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LoslogosApp />);
