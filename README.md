# Los Logos

Prototipo interactivo para gestión de leads y propuestas de logos con WhatsApp.

## Estructura

```
├── index.html          # Punto de entrada
├── src/
│   ├── app.jsx         # App principal y navegación
│   ├── data.jsx        # Datos de ejemplo (leads, estados, propuestas)
│   ├── primitives.jsx  # Componentes base reutilizables
│   ├── screens-1.jsx   # Pantallas: Onboarding, Cámara, Captura, Generando
│   ├── screens-2.jsx   # Pantallas: Leads, Detalle, WhatsApp, Landing
│   ├── ios-frame.jsx   # Marco visual iOS
│   ├── android-frame.jsx # Marco visual Android
│   └── tweaks-panel.jsx # Panel de ajustes (tema, dispositivo)
```

## Uso

Abre `index.html` directamente en tu navegador. No requiere servidor.

## Sincronización entre equipos

Este proyecto usa Git. Para trabajar desde otro equipo:

1. Clona el repositorio: `git clone <url>`
2. Abre `index.html` en el navegador
