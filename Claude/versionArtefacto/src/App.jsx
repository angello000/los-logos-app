import { useState, useRef, useEffect } from "react";

// ── Design Tokens (Eon Dark System) ──────────────────────────────────────────
const C = {
  surface: "#0c141d", surfaceDim: "#070f17", surfaceLow: "#141c25",
  surfaceContainer: "#182029", surfaceHigh: "#232b34", surfaceHighest: "#2e353f",
  onSurface: "#dbe3f0", onSurfaceVariant: "#e7bdb2",
  primary: "#ffb5a0", primaryAction: "#ff5625",
  secondary: "#46eaed",
  outline: "#ad887e", outlineVariant: "#5d4038",
  error: "#ffb4ab",
};

const glass = {
  background: "rgba(24,32,41,0.7)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 12,
};

const st = {
  app: { background: "#0c141d", minHeight: "100vh", fontFamily: "Roboto, sans-serif", color: "#dbe3f0", display: "flex", justifyContent: "center" },
  phone: { width: 390, minHeight: "100vh", background: "#070f17", position: "relative", display: "flex", flexDirection: "column", overflow: "hidden" },
  screen: { flex: 1, display: "flex", flexDirection: "column", padding: "0 16px 80px", overflowY: "auto" },
  topBar: { display: "flex", alignItems: "center", padding: "52px 16px 8px", gap: 8 },
  back: { background: "none", border: "none", color: "#46eaed", fontSize: 14, fontWeight: 500, cursor: "pointer", display: "flex", alignItems: "center", gap: 4, padding: 0, letterSpacing: "0.04em" },
  title: { fontSize: 20, fontWeight: 600, lineHeight: "28px", color: "#dbe3f0", margin: 0 },
  subtitle: { fontSize: 14, color: "#e7bdb2", margin: "4px 0 0", lineHeight: "20px" },
  btnPrimary: { background: "#ff5625", color: "#fff", border: "none", borderRadius: 9999, padding: "14px 24px", fontSize: 14, fontWeight: 700, letterSpacing: "0.02em", cursor: "pointer", width: "100%", marginTop: 8 },
  btnSecondary: { background: "transparent", color: "#46eaed", border: "2px solid #46eaed", borderRadius: 9999, padding: "12px 24px", fontSize: 14, fontWeight: 700, cursor: "pointer", width: "100%", marginTop: 8 },
  btnGhost: { background: "transparent", color: "#e7bdb2", border: "1px solid #5d4038", borderRadius: 9999, padding: "12px 24px", fontSize: 14, fontWeight: 500, cursor: "pointer", width: "100%", marginTop: 8 },
  input: { background: "#070f17", border: "1px solid #5d4038", borderRadius: 12, padding: "12px 14px", fontSize: 14, color: "#dbe3f0", width: "100%", outline: "none", fontFamily: "Roboto, sans-serif", lineHeight: "20px", boxSizing: "border-box" },
  label: { fontSize: 12, fontWeight: 500, color: "#e7bdb2", letterSpacing: "0.04em", marginBottom: 6, display: "block" },
  card: { background: "rgba(24,32,41,0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 16, marginBottom: 12 },
  chip: { background: "rgba(255,181,160,0.15)", color: "#ffb5a0", borderRadius: 9999, padding: "4px 12px", fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", display: "inline-block" },
  chipCyan: { background: "rgba(70,234,237,0.15)", color: "#46eaed", borderRadius: 9999, padding: "4px 12px", fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", display: "inline-block" },
  divider: { height: 1, background: "rgba(255,255,255,0.06)", margin: "12px 0" },
};

// ── Tabler Icons (outline, inline SVG) ───────────────────────────────────────
const ICON_PATHS = {
  home:     ["M5 12l-2 0l9-9l9 9l-2 0","M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7","M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"],
  users:    ["M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0","M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2","M16 3.13a4 4 0 0 1 0 7.75","M21 21v-2a4 4 0 0 0-3-3.85"],
  camera:   ["M5 7h1a2 2 0 0 0 2-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2","M9 13a3 3 0 1 0 6 0a3 3 0 1 0-6 0"],
  bookmark: ["M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3V6a2 2 0 0 1 2-2"],
  settings: ["M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c.996.608 2.296.07 2.572-1.065zM12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6z"],
};

function Icon({ name, size, color }) {
  const sz = size || 20;
  const cl = color || "currentColor";
  return (
    <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none"
      stroke={cl} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {(ICON_PATHS[name] || []).map(function(d, i) { return <path key={i} d={d} />; })}
    </svg>
  );
}

// ── Logo Components ───────────────────────────────────────────────────────────
// NOTA: Reemplazar con el PNG oficial de /images/isotipo.png e /images/logo-horizontal.png
// cuando estén disponibles en el proyecto.

function Isotipo({ size }) {
  const sz = size || 40;
  return (
    <svg width={sz} height={sz} viewBox="0 0 80 80" fill="none">
      <path d="M10 28 C10 14 20 6 32 6 C44 6 54 14 54 28 C54 42 44 50 32 50 L32 74"
        stroke="#FF4500" strokeWidth="9" strokeLinecap="round" fill="none"/>
      <path d="M70 52 C70 66 60 74 48 74 C36 74 26 66 26 52 C26 38 36 30 48 30 L48 6"
        stroke="#FF4500" strokeWidth="9" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

function Wordmark({ height }) {
  const h = height || 22;
  const w = Math.round(110 * h / 22);
  return (
    <svg width={w} height={h} viewBox="0 0 110 22" fill="none">
      <text fontFamily="Roboto, sans-serif" fontSize="18" fontWeight="800" letterSpacing="1" fill="#FF4500">
        <tspan x="0" y="17">LOG</tspan>
      </text>
      <rect x="48" y="3" width="16" height="14" rx="7" fill="none" stroke="#46eaed" strokeWidth="2.5"/>
      <text fontFamily="Roboto, sans-serif" fontSize="18" fontWeight="800" letterSpacing="1" fill="#FF4500">
        <tspan x="66" y="17">S</tspan>
      </text>
    </svg>
  );
}

function LogoHorizontal({ isotopoSize }) {
  const sz = isotopoSize || 32;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <Isotipo size={sz} />
      <Wordmark height={18} />
    </div>
  );
}

// ── Bottom Nav ────────────────────────────────────────────────────────────────
const NAV = [
  { icon: "home",     label: "Home",      screen: "home" },
  { icon: "users",    label: "Clientes",  screen: "clients" },
  { icon: "camera",   label: "",          screen: "camera" },
  { icon: "bookmark", label: "Favoritos", screen: "favorites" },
  { icon: "settings", label: "Config",    screen: "settings" },
];

function BottomNav({ current, navigate }) {
  return (
    <div style={{ position: "fixed", bottom: 0, width: 390, background: "rgba(12,20,29,0.95)", backdropFilter: "blur(16px)", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-around", alignItems: "center", padding: "8px 0 20px", zIndex: 100 }}>
      {NAV.map(function(item, i) {
        var isCenter = i === 2;
        var active = current === item.screen;
        return (
          <button key={i} onClick={function() { navigate(item.screen); }} style={{ background: isCenter ? "#ff5625" : "none", border: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 2, cursor: "pointer", padding: isCenter ? "10px" : "4px 8px", borderRadius: isCenter ? 9999 : 8, minWidth: isCenter ? 48 : "auto", marginTop: isCenter ? -20 : 0, boxShadow: isCenter ? "0 0 20px rgba(255,86,37,0.5)" : "none" }}>
            <Icon name={item.icon} size={isCenter ? 22 : 18} color={isCenter ? "#fff" : active ? "#ffb5a0" : "rgba(219,227,240,0.4)"} />
            {!isCenter && <span style={{ fontSize: 9, color: active ? "#ffb5a0" : "rgba(219,227,240,0.4)", fontWeight: active ? 700 : 400, letterSpacing: "0.06em" }}>{item.label}</span>}
          </button>
        );
      })}
    </div>
  );
}

// ── Screens ───────────────────────────────────────────────────────────────────

function IntroScreen({ navigate }) {
  const [phase, setPhase] = useState(0);
  useEffect(function() {
    var t1 = setTimeout(function() { setPhase(1); }, 300);
    var t2 = setTimeout(function() { setPhase(2); }, 1100);
    var t3 = setTimeout(function() { setPhase(3); }, 1900);
    return function() { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 40, textAlign: "center", minHeight: "100vh", background: "#000" }}>
      <style>{"@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}} @keyframes fadeIn{from{opacity:0}to{opacity:1}} @keyframes drawBar{from{stroke-dashoffset:200}to{stroke-dashoffset:0}} .p1{animation:fadeUp 0.8s cubic-bezier(.22,1,.36,1) both} .p2{animation:fadeUp 0.6s cubic-bezier(.22,1,.36,1) both} .p3{animation:fadeIn 0.5s ease both} .bar{stroke-dasharray:200;animation:drawBar 0.9s ease forwards}"}</style>

      {phase >= 1 && (
        <div className="p1" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, marginBottom: 40 }}>
          <Isotipo size={100} />
          <svg width="48" height="2"><line x1="0" y1="1" x2="48" y2="1" stroke="#FF4500" strokeWidth="1.5" className="bar"/></svg>
          <Wordmark height={26} />
        </div>
      )}
      {phase >= 2 && (
        <div className="p2">
          <p style={{ fontSize: 15, color: "rgba(219,227,240,0.7)", lineHeight: "22px", margin: "0 0 6px" }}>Captura negocios, genera propuestas de marca con IA</p>
          <p style={{ fontSize: 13, color: "#46eaed", letterSpacing: "0.06em", fontWeight: 600, margin: 0 }}>Y VENDELAS POR WHATSAPP</p>
        </div>
      )}
      {phase >= 3 && (
        <div className="p3" style={{ width: "100%", marginTop: 48 }}>
          <button onClick={function() { navigate("home"); }} style={{ background: "#FF4500", color: "#fff", border: "none", borderRadius: 9999, padding: "14px 24px", fontSize: 14, fontWeight: 700, letterSpacing: "0.08em", cursor: "pointer", width: 260 }}>
            COMENZAR
          </button>
        </div>
      )}
    </div>
  );
}

function HomeScreen({ navigate, clients }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "52px 16px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <LogoHorizontal isotopoSize={30} />
        <span style={st.chipCyan}>{clients.length} leads</span>
      </div>
      <div style={{ padding: "0 16px 0", marginBottom: 8 }}>
        <p style={{ fontSize: 14, color: "#e7bdb2", margin: 0 }}>Bienvenido</p>
        <h1 style={{ fontSize: 22, fontWeight: 600, color: "#dbe3f0", margin: "2px 0 0" }}>Que quieres hacer hoy?</h1>
      </div>
      <div style={{ padding: "0 16px", flex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
          <button onClick={function() { navigate("camera"); }} style={{ background: "rgba(255,86,37,0.08)", border: "1px solid rgba(255,86,37,0.3)", borderRadius: 12, padding: 20, cursor: "pointer", textAlign: "left", color: "#dbe3f0" }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>📷</div>
            <div style={{ fontSize: 14, fontWeight: 600 }}>Nuevo Cliente</div>
            <div style={{ fontSize: 11, color: "#e7bdb2", marginTop: 2 }}>Captura un aviso</div>
          </button>
          <button onClick={function() { navigate("clients"); }} style={{ background: "rgba(24,32,41,0.7)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 20, cursor: "pointer", textAlign: "left", color: "#dbe3f0" }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>👥</div>
            <div style={{ fontSize: 14, fontWeight: 600 }}>Ver Clientes</div>
            <div style={{ fontSize: 11, color: "#e7bdb2", marginTop: 2 }}>{clients.length} registrados</div>
          </button>
        </div>
        {clients.length > 0 && (
          <div>
            <p style={{ fontSize: 12, fontWeight: 500, color: "#e7bdb2", letterSpacing: "0.04em", marginBottom: 10 }}>RECIENTES</p>
            {clients.slice(-2).reverse().map(function(c, i) {
              return (
                <div key={i} style={{ ...st.card, display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(255,86,37,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🏪</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>{c.name}</div>
                    <div style={{ fontSize: 11, color: "#e7bdb2" }}>{c.category} · {(c.proposals || []).length} propuestas</div>
                  </div>
                  <span style={st.chipCyan}>NUEVO</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function CameraScreen({ navigate }) {
  var fileRef = useRef();
  var [preview, setPreview] = useState(null);
  function handleFile(e) {
    var f = e.target.files[0];
    if (f) setPreview(URL.createObjectURL(f));
  }
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={st.topBar}><button style={st.back} onClick={function() { navigate("home"); }}>← Atras</button></div>
      <div style={{ ...st.screen, paddingTop: 8 }}>
        <h2 style={st.title}>Capturar aviso</h2>
        <p style={st.subtitle}>Toma una foto del negocio o sube una imagen</p>
        <div style={{ background: "rgba(24,32,41,0.7)", backdropFilter: "blur(12px)", border: preview ? "1px solid rgba(255,255,255,0.1)" : "2px dashed #5d4038", borderRadius: 12, marginTop: 20, height: 220, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", overflow: "hidden" }}
          onClick={function() { fileRef.current.click(); }}>
          {preview
            ? <img src={preview} alt="preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            : <div style={{ textAlign: "center" }}><div style={{ fontSize: 40, marginBottom: 8 }}>📷</div><div style={{ fontSize: 14, color: "#e7bdb2" }}>Toca para tomar foto</div></div>
          }
        </div>
        <input ref={fileRef} type="file" accept="image/*" capture="environment" style={{ display: "none" }} onChange={handleFile} />
        {preview && <button style={st.btnPrimary} onClick={function() { navigate("clientData", { photo: preview }); }}>Usar esta foto →</button>}
        <button style={st.btnGhost} onClick={function() { navigate("clientData", { photo: null }); }}>Continuar sin foto</button>
      </div>
    </div>
  );
}

var CATS = ["Restaurante", "Tienda", "Salud", "Belleza", "Tecnologia", "Servicios", "Educacion", "Otro"];

function ClientDataScreen({ navigate, photo }) {
  var [form, setForm] = useState({ name: "", local: "", phone: "+57 ", price: "", notes: "", category: "" });
  function setField(k, v) { setForm(function(p) { return Object.assign({}, p, { [k]: v }); }); }
  var valid = form.name && form.local && form.phone.length > 4 && form.category;
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={st.topBar}><button style={st.back} onClick={function() { navigate("camera"); }}>← Camara</button></div>
      <div style={st.screen}>
        <h2 style={st.title}>Datos del cliente</h2>
        {photo && <div style={{ borderRadius: 12, marginBottom: 16, overflow: "hidden", height: 120 }}><img src={photo} alt="aviso" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>}
        {[
          { k: "name",  label: "NOMBRE DEL NEGOCIO",    placeholder: "Ej. Peluqueria El Estilo" },
          { k: "local", label: "LOCAL DE CONTACTO",     placeholder: "Direccion o referencia" },
          { k: "price", label: "PRESUPUESTO APROX ($)", placeholder: "Ej. $150.000" },
        ].map(function(f) {
          return (
            <div key={f.k} style={{ marginBottom: 14 }}>
              <label style={st.label}>{f.label}</label>
              <input style={st.input} placeholder={f.placeholder} value={form[f.k]} onChange={function(e) { setField(f.k, e.target.value); }} />
            </div>
          );
        })}
        <div style={{ marginBottom: 14 }}>
          <label style={st.label}>CEL / WHATSAPP</label>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <div style={{ background: "#070f17", border: "1px solid #5d4038", borderRadius: 12, padding: "12px 14px", color: "#46eaed", fontWeight: 700, whiteSpace: "nowrap", flexShrink: 0 }}>🇨🇴 +57</div>
            <input style={{ ...st.input, flex: 1 }} placeholder="300 000 0000"
              value={form.phone.replace("+57 ", "")}
              onChange={function(e) { setField("phone", "+57 " + e.target.value.replace(/\D/g, "").slice(0, 10)); }} />
          </div>
          <span style={{ fontSize: 11, color: "#e7bdb2", marginTop: 4, display: "block" }}>Numero: {form.phone.replace(/\s/g, "")}</span>
        </div>
        <div style={{ marginBottom: 14 }}>
          <label style={st.label}>NOTAS / DESCRIPCION</label>
          <textarea style={{ ...st.input, minHeight: 80, resize: "vertical" }} placeholder="Que hace este negocio? Que lo hace unico?" value={form.notes} onChange={function(e) { setField("notes", e.target.value); }} />
        </div>
        <label style={st.label}>CATEGORIA</label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
          {CATS.map(function(cat) {
            return (
              <button key={cat} onClick={function() { setField("category", cat); }} style={{ background: form.category === cat ? "#ff5625" : "rgba(255,255,255,0.05)", color: form.category === cat ? "#fff" : "#e7bdb2", border: form.category === cat ? "none" : "1px solid #5d4038", borderRadius: 9999, padding: "6px 14px", fontSize: 12, fontWeight: 500, cursor: "pointer" }}>{cat}</button>
            );
          })}
        </div>
        <button style={{ ...st.btnPrimary, opacity: valid ? 1 : 0.4 }} disabled={!valid}
          onClick={function() { navigate("progress", { client: Object.assign({}, form, { photo: photo, proposals: [], id: Date.now() }) }); }}>
          Crear cliente →
        </button>
      </div>
    </div>
  );
}

function ProgressScreen({ navigate, client, addClient }) {
  var [error, setError] = useState(null);
  var started = useRef(false);

  useEffect(function() {
    if (started.current) return;
    started.current = true;

    var prompt = "Eres un experto en branding y diseno de identidad visual para pequenos negocios latinoamericanos.\n\nUn disenador esta visitando el siguiente negocio para ofrecerle una nueva propuesta de logotipo:\n- Nombre del negocio: " + client.name + "\n- Categoria: " + client.category + "\n- Descripcion: " + (client.notes || "Sin descripcion adicional") + "\n\nGenera exactamente 3 propuestas de REDISENO DE LOGOTIPO para el mismo nombre. El objetivo es mostrarle al dueno como su negocio podria verse con una identidad visual profesional.\n\nResponde SOLO con JSON valido, sin texto adicional ni bloques de codigo:\n{\"proposals\":[{\"style\":\"Nombre del estilo visual\",\"concept\":\"Concepto creativo en 1 oracion\",\"logoDescription\":\"Descripcion visual detallada del logotipo\",\"colors\":[{\"name\":\"Nombre\",\"hex\":\"#XXXXXX\"},{\"name\":\"Nombre\",\"hex\":\"#XXXXXX\"},{\"name\":\"Nombre\",\"hex\":\"#XXXXXX\"}],\"typography\":\"Familia tipografica sugerida\",\"pitch\":\"Argumento de venta en 1 oracion\"}]}";

    fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1200, messages: [{ role: "user", content: prompt }] }),
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
      var text = (data.content || []).map(function(i) { return i.text || ""; }).join("");
      var parsed = JSON.parse(text.replace(/```json|```/g, "").trim());
      var updated = Object.assign({}, client, { proposals: parsed.proposals });
      addClient(updated);
      navigate("results", { client: updated, proposals: parsed.proposals });
    })
    .catch(function() { setError("Error generando propuestas. Intenta de nuevo."); });
  }, []);

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, textAlign: "center" }}>
      <style>{"@keyframes spin{to{transform:rotate(360deg)}}"}</style>
      {error ? (
        <div>
          <div style={{ fontSize: 48, marginBottom: 16 }}>⚠️</div>
          <p style={{ color: "#ffb4ab" }}>{error}</p>
          <button style={st.btnPrimary} onClick={function() { navigate("clientData"); }}>Volver</button>
        </div>
      ) : (
        <div>
          <div style={{ width: 64, height: 64, borderRadius: 9999, border: "3px solid #ff5625", borderTop: "3px solid transparent", animation: "spin 1s linear infinite", marginBottom: 24 }} />
          <h2 style={{ ...st.title, marginBottom: 8 }}>Creando propuestas...</h2>
          <p style={st.subtitle}>La IA esta disenando 3 propuestas de logotipo para <strong style={{ color: "#ffb5a0" }}>{client && client.name}</strong></p>
        </div>
      )}
    </div>
  );
}

function ResultsScreen({ navigate, client, proposals }) {
  var [selected, setSelected] = useState(null);
  var list = proposals || [];

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={st.topBar}><button style={st.back} onClick={function() { navigate("clients"); }}>← Ver leads</button></div>
      <div style={st.screen}>
        <h2 style={st.title}>Propuestas de logotipo</h2>
        <p style={st.subtitle}>Para: <strong style={{ color: "#ffb5a0" }}>{client && client.name}</strong></p>
        <div style={st.divider} />
        {list.map(function(p, i) {
          var isSel = selected === i;
          return (
            <button key={i} onClick={function() { setSelected(isSel ? null : i); }}
              style={{ background: "rgba(24,32,41,0.7)", backdropFilter: "blur(12px)", border: isSel ? "2px solid #ff5625" : "1px solid rgba(255,255,255,0.08)", borderRadius: 12, width: "100%", textAlign: "left", cursor: "pointer", marginBottom: 12, color: "#dbe3f0", boxShadow: isSel ? "0 0 20px rgba(255,86,37,0.2)" : "none", padding: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={st.chip}>OPCION {i + 1}</span>
                <span style={{ color: isSel ? "#ff5625" : "#5d4038" }}>{isSel ? "✓" : "○"}</span>
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 2 }}>{p.style}</div>
              <div style={{ fontSize: 13, color: "#46eaed", fontStyle: "italic", marginBottom: isSel ? 10 : 0 }}>"{p.concept}"</div>
              {isSel && (
                <div>
                  <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: 10, padding: "20px 16px", marginBottom: 12, textAlign: "center", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ fontSize: 18, fontWeight: 800, color: "#fff", letterSpacing: 2, marginBottom: 6 }}>{client && client.name && client.name.toUpperCase()}</div>
                    <div style={{ fontSize: 11, color: "#e7bdb2", lineHeight: "16px" }}>{p.logoDescription}</div>
                  </div>
                  <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                    {(p.colors || []).map(function(c, j) {
                      return (
                        <div key={j} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                          <div style={{ width: 28, height: 28, borderRadius: 9999, background: c.hex, border: "1px solid rgba(255,255,255,0.15)" }} />
                          <span style={{ fontSize: 9, color: "#e7bdb2", textAlign: "center", maxWidth: 44 }}>{c.name}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div style={{ fontSize: 12, color: "#e7bdb2", marginBottom: 8 }}>✍️ {p.typography}</div>
                  <div style={st.divider} />
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#dbe3f0" }}>💬 "{p.pitch}"</div>
                </div>
              )}
            </button>
          );
        })}
        <button style={{ ...st.btnPrimary, opacity: selected !== null ? 1 : 0.4 }} disabled={selected === null}
          onClick={function() { navigate("editMessage", { client: client, proposal: list[selected] }); }}>
          Enviar propuesta →
        </button>
      </div>
    </div>
  );
}

function EditMessageScreen({ navigate, client, proposal }) {
  var defaultMsg = "Hola, soy disenador de identidad de marca y vi tu negocio *" + (client && client.name) + "*.\n\nTe prepare 3 propuestas de logotipo profesional - completamente gratis.\n\nEstilo: *" + (proposal && proposal.style) + "*\n\"" + (proposal && proposal.concept) + "\"\n\n" + (proposal && proposal.pitch) + "\n\nTe gustaria verlos esta semana? 🚀";
  var [msg, setMsg] = useState(defaultMsg);
  var phone = ((client && client.phone) || "").replace(/\D/g, "");

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={st.topBar}><button style={st.back} onClick={function() { navigate("results", { client: client, proposals: client && client.proposals }); }}>← Volver</button></div>
      <div style={st.screen}>
        <h2 style={st.title}>Editar mensaje</h2>
        <div style={{ ...st.card, marginTop: 16 }}>
          <div style={{ fontSize: 12, color: "#46eaed", fontWeight: 700, marginBottom: 8 }}>PROPUESTA SELECCIONADA</div>
          <div style={{ fontSize: 15, fontWeight: 700 }}>{proposal && proposal.style}</div>
          <div style={{ fontSize: 13, color: "#e7bdb2", fontStyle: "italic" }}>"{proposal && proposal.concept}"</div>
        </div>
        <label style={{ ...st.label, marginTop: 8 }}>MENSAJE</label>
        <textarea style={{ ...st.input, minHeight: 160, resize: "vertical", lineHeight: "20px" }} value={msg} onChange={function(e) { setMsg(e.target.value); }} />
        <label style={{ ...st.label, marginTop: 16 }}>NUMERO DESTINO</label>
        <input style={{ ...st.input, color: "#46eaed" }} readOnly value={"+" + phone} />
        <button style={{ ...st.btnPrimary, marginTop: 20 }} onClick={function() { window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(msg), "_blank"); }}>
          📱 Abrir en WhatsApp
        </button>
        <button style={st.btnGhost} onClick={function() { navigate("clients"); }}>Guardar y cerrar</button>
      </div>
    </div>
  );
}

function ClientsScreen({ navigate, clients }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "52px 16px 8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div><h2 style={st.title}>Clientes</h2><p style={st.subtitle}>{clients.length} leads capturados</p></div>
        <button onClick={function() { navigate("camera"); }} style={{ background: "#ff5625", border: "none", borderRadius: 9999, width: 40, height: 40, fontSize: 20, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
      </div>
      <div style={st.screen}>
        {clients.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 0" }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>🏪</div>
            <p style={{ color: "#e7bdb2" }}>Aun no tienes clientes. Captura tu primer negocio!</p>
            <button style={{ ...st.btnPrimary, marginTop: 20 }} onClick={function() { navigate("camera"); }}>Capturar negocio</button>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {clients.map(function(c, i) {
              return (
                <button key={i} onClick={function() { navigate("clientDetail", { client: c }); }} style={{ background: "rgba(24,32,41,0.7)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 14, textAlign: "left", cursor: "pointer", color: "#dbe3f0" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, marginBottom: 10, background: "rgba(255,86,37,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🏪</div>
                  <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 2 }}>{c.name}</div>
                  <div style={{ fontSize: 10, color: "#e7bdb2", marginBottom: 8 }}>{c.category}</div>
                  <span style={st.chipCyan}>{(c.proposals || []).length} props</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function ClientDetailScreen({ navigate, client }) {
  var [tab, setTab] = useState("historial");
  var proposals = (client && client.proposals) || [];
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={st.topBar}><button style={st.back} onClick={function() { navigate("clients"); }}>← Clientes</button></div>
      <div style={st.screen}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(255,86,37,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🏪</div>
          <div>
            <h2 style={{ ...st.title, fontSize: 18 }}>{client && client.name}</h2>
            <p style={st.subtitle}>{client && client.local} · {client && client.phone}</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          {["historial", "propuestas"].map(function(t) {
            return <button key={t} onClick={function() { setTab(t); }} style={{ flex: 1, padding: "10px", borderRadius: 9999, fontSize: 12, fontWeight: 700, cursor: "pointer", textTransform: "capitalize", background: tab === t ? "#ff5625" : "rgba(255,255,255,0.05)", color: tab === t ? "#fff" : "#e7bdb2", border: "none" }}>{t}</button>;
          })}
        </div>
        {tab === "historial" && (proposals.length > 0 ? proposals.map(function(p, i) {
          return (
            <div key={i} style={st.card}>
              <div style={{ fontSize: 10, color: "#e7bdb2", marginBottom: 4 }}>{new Date().toLocaleDateString("es-CO")}</div>
              <div style={{ fontSize: 15, fontWeight: 600 }}>{p.style}</div>
              <div style={{ fontSize: 12, color: "#46eaed", fontStyle: "italic" }}>"{p.concept}"</div>
            </div>
          );
        }) : <p style={{ color: "#e7bdb2", textAlign: "center", padding: 32 }}>Sin propuestas aun</p>)}
        {tab === "propuestas" && proposals.map(function(p, i) {
          return (
            <div key={i} style={st.card}>
              <span style={st.chip}>PROPUESTA {i + 1}</span>
              <div style={{ fontSize: 16, fontWeight: 700, marginTop: 8 }}>{p.style}</div>
              <div style={{ fontSize: 13, color: "#e7bdb2", marginTop: 4 }}>{p.logoDescription}</div>
              <button onClick={function() { navigate("editMessage", { client: client, proposal: p }); }} style={{ ...st.btnSecondary, marginTop: 10 }}>Enviar por WhatsApp</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FavoritesScreen({ navigate, clients }) {
  var withProps = clients.filter(function(c) { return c.proposals && c.proposals.length > 0; });
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "52px 16px 8px" }}><h2 style={st.title}>Favoritos</h2><p style={st.subtitle}>Clientes con propuestas generadas</p></div>
      <div style={st.screen}>
        {withProps.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 0" }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>🔖</div>
            <p style={{ color: "#e7bdb2" }}>Aqui apareceran los clientes con propuestas</p>
          </div>
        ) : withProps.map(function(c, i) {
          return (
            <div key={i} style={{ ...st.card, display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(255,86,37,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🏪</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{c.name}</div>
                <div style={{ fontSize: 11, color: "#e7bdb2" }}>{c.proposals.length} propuesta(s)</div>
              </div>
              <button onClick={function() { navigate("clientDetail", { client: c }); }} style={{ background: "#ff5625", border: "none", borderRadius: 8, padding: "6px 12px", fontSize: 11, color: "#fff", fontWeight: 700, cursor: "pointer" }}>VER</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SettingsScreen() {
  var [email, setEmail] = useState("");
  var [cel, setCel] = useState("+57 ");
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "52px 16px 8px" }}><h2 style={st.title}>Configuracion</h2></div>
      <div style={st.screen}>
        <div style={{ marginBottom: 16 }}>
          <label style={st.label}>CORREO ELECTRONICO</label>
          <input style={st.input} value={email} onChange={function(e) { setEmail(e.target.value); }} placeholder="tu@correo.com" />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={st.label}>CELULAR VINCULADO</label>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ background: "#070f17", border: "1px solid #5d4038", borderRadius: 12, padding: "12px 14px", color: "#46eaed", fontWeight: 700, whiteSpace: "nowrap", flexShrink: 0 }}>🇨🇴 +57</div>
            <input style={{ ...st.input, flex: 1 }} placeholder="300 000 0000"
              value={cel.replace("+57 ", "")}
              onChange={function(e) { setCel("+57 " + e.target.value.replace(/\D/g, "").slice(0, 10)); }} />
          </div>
        </div>
        <div style={{ background: "rgba(24,32,41,0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(70,234,237,0.3)", borderRadius: 12, padding: 16, marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <span style={{ fontSize: 18 }}>🔔</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#46eaed", letterSpacing: "0.04em" }}>PENDIENTE — INTEGRACION IA IMAGENES</span>
          </div>
          <p style={{ fontSize: 13, color: "#e7bdb2", lineHeight: "18px", margin: 0 }}>
            Conectar gpt-image-1 (OpenAI) para generar propuestas visuales reales de logotipos. Flujo: Claude genera prompt → OpenAI genera imagen.
          </p>
          <div style={st.divider} />
          <p style={{ fontSize: 11, color: "#e7bdb2", margin: 0 }}>Consigue tu API key en platform.openai.com e ingresala aqui.</p>
          <input style={{ ...st.input, marginTop: 10 }} placeholder="sk-..." />
          <button style={{ ...st.btnSecondary, marginTop: 8, fontSize: 12 }}>Guardar API Key</button>
        </div>
        <button style={st.btnPrimary}>Guardar cambios</button>
      </div>
    </div>
  );
}

// ── Router ────────────────────────────────────────────────────────────────────
export default function App() {
  var [screen, setScreen] = useState("intro");
  var [params, setParams] = useState({});
  var [clients, setClients] = useState([]);

  function navigate(sc, p) { setScreen(sc); setParams(p || {}); }
  function addClient(c) {
    setClients(function(prev) {
      var idx = prev.findIndex(function(x) { return x.id === c.id; });
      return idx >= 0 ? prev.map(function(x, i) { return i === idx ? c : x; }) : prev.concat([c]);
    });
  }

  var noNav = ["intro", "progress"];

  function renderScreen() {
    if (screen === "intro")        return <IntroScreen navigate={navigate} />;
    if (screen === "home")         return <HomeScreen navigate={navigate} clients={clients} />;
    if (screen === "camera")       return <CameraScreen navigate={navigate} />;
    if (screen === "clientData")   return <ClientDataScreen navigate={navigate} photo={params.photo} />;
    if (screen === "progress")     return <ProgressScreen navigate={navigate} client={params.client} addClient={addClient} />;
    if (screen === "results")      return <ResultsScreen navigate={navigate} client={params.client} proposals={params.proposals || (params.client && params.client.proposals)} />;
    if (screen === "editMessage")  return <EditMessageScreen navigate={navigate} client={params.client} proposal={params.proposal} />;
    if (screen === "clients")      return <ClientsScreen navigate={navigate} clients={clients} />;
    if (screen === "clientDetail") return <ClientDetailScreen navigate={navigate} client={params.client} />;
    if (screen === "favorites")    return <FavoritesScreen navigate={navigate} clients={clients} />;
    if (screen === "settings")     return <SettingsScreen />;
    return <HomeScreen navigate={navigate} clients={clients} />;
  }

  return (
    <div style={st.app}>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <div style={st.phone}>
        {renderScreen()}
        {noNav.indexOf(screen) === -1 && <BottomNav current={screen} navigate={navigate} />}
      </div>
    </div>
  );
}
