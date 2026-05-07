// Loslogos — Welcome screen with logo animation

function ScreenWelcome({ onContinue }) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#383737',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      boxSizing: 'border-box',
      position: 'relative',
    }}>
      {/* Logo with animation */}
      <div style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(30px)',
        transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28,
        padding: '0 40px',
      }}>
        <img
          src="images/logo99logos.png"
          alt="Los Logos"
          style={{
            width: 180,
            height: 'auto',
            filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.08))',
          }}
        />

        {/* Slogan */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(15px)',
          transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: '"Inter Tight", sans-serif',
            fontSize: 14,
            lineHeight: 1.5,
            color: '#00E676',
            fontWeight: 500,
            letterSpacing: 0.3,
            maxWidth: 260,
          }}>
            Emprendimiento para creación de marca
          </p>
        </div>
      </div>

      {/* Continue button */}
      <div style={{
        position: 'absolute',
        bottom: 60,
        left: 0, right: 0,
        display: 'flex', justifyContent: 'center',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s',
      }}>
        <button onClick={onContinue} style={{
          padding: '16px 48px',
          background: '#FFFFFF',
          color: '#383737',
          border: 'none',
          borderRadius: 100,
          fontFamily: '"Inter Tight", sans-serif',
          fontSize: 15,
          fontWeight: 600,
          letterSpacing: -0.2,
          cursor: 'pointer',
          transition: 'opacity 0.2s, transform 0.2s',
        }}
        onMouseDown={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'scale(0.98)'; }}
        onMouseUp={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
        onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
        >
          Comenzar
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { ScreenWelcome });
