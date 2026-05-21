// Sketchy wireframe primitives — visual style from 99 Logos Wireframes design file

const sk = {
  ink:    '#1b1a17',
  ink2:   '#3a3835',
  muted:  '#7a766f',
  paper:  '#fbf8f1',
  accent: '#f5d65a',
  accent2:'#cfe3c2',
  line:   '#1b1a17',
};

// Inject CSS once
(function() {
  if (document.getElementById('sk-styles')) return;
  const el = document.createElement('style');
  el.id = 'sk-styles';
  el.textContent = `
    .sk   { font-family:'Patrick Hand',cursive; color:#1b1a17; }
    .sk-h { font-family:'Kalam','Patrick Hand',cursive; font-weight:700; }
    .sk-box      { border:1.5px solid #1b1a17; border-radius:6px; background:transparent; }
    .sk-box-soft { border:1.5px solid #1b1a17; border-radius:14px; }
    .sk-btn { border:1.5px solid #1b1a17; border-radius:6px; padding:6px 10px;
      display:inline-flex; align-items:center; gap:6px; background:#fff;
      font-family:'Patrick Hand',cursive; font-size:13px; cursor:pointer; }
    .sk-btn-primary { background:#f5d65a; }
    .sk-field { border:1.5px solid #1b1a17; border-radius:4px; padding:4px 8px;
      font-family:'Patrick Hand',cursive; font-size:13px; background:#fff;
      width:100%; box-sizing:border-box; outline:none; }
    .sk-line     { height:1.5px; background:#1b1a17; border-radius:1px; }
    .sk-line-dim { height:1.5px; background:#7a766f; opacity:.55; border-radius:1px; }
    .sk-pill { border:1.5px solid #1b1a17; border-radius:999px; padding:3px 10px;
      font-size:12px; display:inline-block; background:#fff;
      font-family:'Patrick Hand',cursive; cursor:pointer; }
    .sk-radio { width:16px; height:16px; border:1.5px solid #1b1a17;
      border-radius:50%; display:inline-block; flex:0 0 auto; cursor:pointer; }
    .sk-radio.on { background:#1b1a17; box-shadow:inset 0 0 0 3px #fbf8f1; }
    .sk-img { border:1.5px solid #1b1a17; border-radius:6px;
      background:repeating-linear-gradient(135deg,transparent 0 8px,rgba(0,0,0,.06) 8px 9px);
      display:flex; align-items:center; justify-content:center;
      color:#7a766f; font-size:11px; font-family:'Patrick Hand',cursive; }
    .sk-anno { font-family:'Caveat','Patrick Hand',cursive; color:#b3651e; font-size:14px; line-height:1.1; }
  `;
  document.head.appendChild(el);
})();

const W = 290;
const H = 580;

const TAB_SCREENS = ['home','clientes','camera','favoritos','config','historial','propuestas'];

function SkTabBar({ screen, nav }) {
  const tabs = [
    { id:'home',      icon:'⌂', active:['home'] },
    { id:'clientes',  icon:'≡', active:['clientes','historial','propuestas'] },
    { id:'camera',    icon:'◉', active:['camera'], circle:true },
    { id:'favoritos', icon:'♡', active:['favoritos'] },
    { id:'config',    icon:'⚙', active:['config'] },
  ];
  return (
    <div style={{
      borderTop:`1.5px solid ${sk.line}`,
      display:'flex', justifyContent:'space-around', alignItems:'center',
      padding:'8px 4px 10px', marginTop:6, fontSize:14, flexShrink:0,
    }}>
      {tabs.map(tab => {
        const on = tab.active.includes(screen);
        if (tab.circle) return (
          <button key={tab.id} onClick={() => nav.go(tab.id)} style={{
            width:26, height:26, border:`1.5px solid ${sk.line}`, borderRadius:'50%',
            display:'inline-flex', alignItems:'center', justifyContent:'center', fontSize:13,
            background: on ? sk.ink : '#fff', color: on ? sk.paper : sk.ink,
            cursor:'pointer', fontFamily:'inherit',
          }}>{tab.icon}</button>
        );
        return (
          <button key={tab.id} onClick={() => nav.go(tab.id)} style={{
            background:'none', border:'none', cursor:'pointer',
            fontSize:18, opacity: on ? 1 : 0.4,
            fontFamily:'inherit', fontWeight: on ? 'bold' : 'normal',
            color: sk.ink,
          }}>{tab.icon}</button>
        );
      })}
    </div>
  );
}

function Phone({ children, screen, nav }) {
  const showTab = TAB_SCREENS.includes(screen);
  return (
    <div style={{
      width:W, height:H, background:sk.paper,
      border:`2px solid ${sk.line}`, borderRadius:28,
      padding:'14px 14px 0', boxSizing:'border-box',
      display:'flex', flexDirection:'column',
      position:'relative', boxShadow:'2px 3px 0 rgba(0,0,0,.08)',
      fontFamily:"'Patrick Hand',cursive", color:sk.ink,
    }}>
      <div style={{
        display:'flex', justifyContent:'space-between',
        fontSize:11, color:sk.muted, marginBottom:4, flexShrink:0,
      }}>
        <span>9:41</span>
        <span style={{display:'flex',gap:6}}><span>···</span><span>▮▮</span></span>
      </div>
      <div style={{flex:1, display:'flex', flexDirection:'column', minHeight:0, gap:8, overflow:'hidden'}}>
        {children}
      </div>
      {showTab && <SkTabBar screen={screen} nav={nav} />}
    </div>
  );
}

function SkBack({ label='Atrás', onClick }) {
  return (
    <div onClick={onClick} style={{fontSize:12, color:sk.ink2, cursor:'pointer', userSelect:'none', flexShrink:0}}>
      ‹ {label}
    </div>
  );
}

function Corner({ down, flip }) {
  return <div style={{
    width:18, height:18,
    borderTop:    down ? 'none'           : '2px solid #fff',
    borderBottom: down ? '2px solid #fff' : 'none',
    borderLeft:   flip ? 'none'           : '2px solid #fff',
    borderRight:  flip ? '2px solid #fff' : 'none',
  }}/>;
}

Object.assign(window, { sk, W, H, Phone, SkTabBar, SkBack, Corner });
