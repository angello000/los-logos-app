// Sample data for Loslogos prototype

const SEED_LEADS = [
  {
    id: 'l1',
    name: 'Panadería La Esquina',
    category: 'Panadería',
    location: 'Av. Insurgentes 240',
    capturedAt: 'Hace 12 min',
    status: 'nuevo',
    whatsapp: '+52 55 1234 5678',
    notes: 'Logo pintado a mano sobre la cortina. Buena exposición de calle.',
    photoTone: '#C9A574',
    photoLabel: 'fachada · panadería',
    initials: 'LE',
    proposalsReady: true,
  },
  {
    id: 'l2',
    name: 'Estética Marisol',
    category: 'Belleza',
    location: 'Calle 5 de Mayo 88',
    capturedAt: 'Hace 1 h',
    status: 'contactado',
    whatsapp: '+52 55 8765 4321',
    notes: 'Letrero decolorado. Dueña interesada en redes.',
    photoTone: '#D9A4B5',
    photoLabel: 'fachada · estética',
    initials: 'EM',
    proposalsReady: true,
    lastContact: 'Ayer · 18:42',
  },
  {
    id: 'l3',
    name: 'Ferretería Don Beto',
    category: 'Ferretería',
    location: 'Eje 4 Sur 1102',
    capturedAt: 'Ayer',
    status: 'interesado',
    whatsapp: '+52 55 2244 6688',
    notes: 'Pidió ver opciones más serias. Color rojo predominante.',
    photoTone: '#A85D4E',
    photoLabel: 'fachada · ferretería',
    initials: 'DB',
    proposalsReady: true,
    lastContact: 'Hace 2 días',
  },
  {
    id: 'l4',
    name: 'Tacos El Güero',
    category: 'Comida',
    location: 'Mercado Medellín, L-12',
    capturedAt: 'Hace 3 días',
    status: 'cerrado',
    whatsapp: '+52 55 9911 3344',
    notes: 'Cerrado por $4,800. Entrega el viernes.',
    photoTone: '#E0A24E',
    photoLabel: 'puesto · tacos',
    initials: 'TG',
    proposalsReady: true,
    lastContact: 'Hace 3 días',
  },
  {
    id: 'l5',
    name: 'Lavandería Burbujas',
    category: 'Servicios',
    location: 'Roma Norte',
    capturedAt: 'Hace 4 días',
    status: 'nuevo',
    whatsapp: '',
    notes: '',
    photoTone: '#7BA9C4',
    photoLabel: 'fachada · lavandería',
    initials: 'LB',
    proposalsReady: false,
  },
  {
    id: 'l6',
    name: 'Cafetería Granos & Co.',
    category: 'Café',
    location: 'Condesa',
    capturedAt: 'Hace 5 días',
    status: 'interesado',
    whatsapp: '+52 55 5050 6060',
    notes: 'Quiere algo "minimal pero cálido". Referencia: cafés de Tokio.',
    photoTone: '#8F7259',
    photoLabel: 'cafetería · interior',
    initials: 'GC',
    proposalsReady: true,
    lastContact: 'Hoy · 09:15',
  },
];

const STATUS_META = {
  nuevo:       { label: 'Nuevo',       dot: '#1A1816', tint: 'rgba(26,24,22,0.06)' },
  contactado:  { label: 'Contactado',  dot: '#9C6E2F', tint: 'rgba(156,110,47,0.10)' },
  interesado:  { label: 'Interesado',  dot: '#3F7A53', tint: 'rgba(63,122,83,0.10)' },
  cerrado:     { label: 'Cerrado',     dot: '#C24A2C', tint: 'rgba(194,74,44,0.10)' },
};

const STATUS_ORDER = ['nuevo', 'contactado', 'interesado', 'cerrado'];

// Three logo proposals for a given lead — described, not drawn
const PROPOSAL_TEMPLATES = [
  {
    id: 'p1',
    name: 'Editorial',
    description: 'Tipografía serif clásica, versalitas y un detalle de filete superior. Formal, aire de tradición.',
    style: 'serif',
    swatch: '#1A1816',
    accent: '#F6F2EC',
  },
  {
    id: 'p2',
    name: 'Sello',
    description: 'Marca circular con el nombre alrededor y un símbolo abstracto al centro. Memorable en redes.',
    style: 'badge',
    swatch: '#7A4A2B',
    accent: '#F0E2C8',
  },
  {
    id: 'p3',
    name: 'Moderno',
    description: 'Logotipo geométrico con sans-serif condensado. Limpio, fácil de aplicar en fachada y digital.',
    style: 'sans',
    swatch: '#2E3A2F',
    accent: '#E8E2D4',
  },
];

window.SEED_LEADS = SEED_LEADS;
window.STATUS_META = STATUS_META;
window.STATUS_ORDER = STATUS_ORDER;
window.PROPOSAL_TEMPLATES = PROPOSAL_TEMPLATES;
