// Catálogo de excursiones. Cada una tiene su propia página en /excursiones/<slug>.
// ⚠️ Demo: precios, duración y "incluye" son de ejemplo y se reemplazan con la info real del cliente.

export type Excursion = {
  slug: string;
  name: string;
  category: 'playa' | 'experiencia';
  image: string; // portada (tarjetas)
  gallery: string[]; // fotos de la página de detalle
  short: string; // una línea para la tarjeta
  description: string;
  tags: string[];
  duration: string;
  schedule: string;
  priceUSD?: number; // vacío = "Consultar precio"
  per: 'persona' | 'lancha'; // cómo se cuenta el total
  perNote?: string; // ej. 'hasta 10 personas'
  note?: string; // aviso destacado
  includes: string[];
  bring: string[];
  highlights: string[];
  featured?: boolean;
};

const BRING_BEACH = ['Traje de baño', 'Toalla', 'Protector solar', 'Gafas de sol', 'Bolsa seca para el celular'];
const BASE_INCLUDES = ['Paseo en lancha ida y vuelta desde Las Galeras', 'Capitán local', 'Chalecos salvavidas para todos'];

export const EXCURSIONS: Excursion[] = [
  {
    slug: 'playa-fronton',
    name: 'Playa Frontón en lancha',
    category: 'playa',
    image: '/images/barco-proa.webp',
    gallery: ['/images/barco-proa.webp', '/images/barco-tobogan.webp', '/images/catamaran.webp', '/images/barco-amigos.webp'],
    short: 'Acantilados, arrecife y agua cristalina. Solo se llega por mar.',
    description:
      'Salimos en lancha desde la playa de Las Galeras bordeando los acantilados de la península hasta Playa Frontón, una playa escondida entre montañas y selva a la que solo se llega por mar o caminando más de una hora. Tendrás tiempo para nadar, hacer snorkel en el arrecife lleno de peces de colores, tomar fotos y descansar bajo las palmeras. El capitán te espera y regresamos juntos a Las Galeras.',
    tags: ['Lancha', 'Snorkel', 'Arrecife'],
    duration: '4 horas',
    schedule: 'Salidas todos los días a las 9:00 a. m. y a la 1:00 p. m.',
    priceUSD: 35,
    per: 'persona',
    note: 'Niños menores de 5 años gratis. Pregunta por precios para grupos.',
    includes: [...BASE_INCLUDES, 'Equipo de snorkel', 'Agua fría a bordo', 'Tiempo libre en la playa (2 horas)'],
    bring: BRING_BEACH,
    highlights: ['Playa virgen solo accesible por mar', 'Snorkel en el arrecife', 'Vistas de los acantilados', 'Ideal para fotos'],
    featured: true,
  },
  {
    slug: 'playa-madama',
    name: 'Playa Madama',
    category: 'playa',
    image: '/images/barco-tobogan.webp',
    gallery: ['/images/barco-tobogan.webp', '/images/catamaran-2.webp', '/images/playa-grupo.webp', '/images/barco-proa.webp'],
    short: 'Una cala pequeña rodeada de selva, tranquila y perfecta para nadar.',
    description:
      'Playa Madama es una pequeña cala de arena blanca protegida por rocas y vegetación tropical, con agua calmada y transparente. Llegamos en lancha en pocos minutos desde Las Galeras, así que es el paseo ideal si viajas con niños o quieres una mañana relajada. Nada, flota y disfruta del silencio de una playa casi privada.',
    tags: ['Cala', 'Selva', 'Relax'],
    duration: '3 horas',
    schedule: 'Salidas todos los días a las 9:00 a. m., 11:00 a. m. y 2:00 p. m.',
    priceUSD: 30,
    per: 'persona',
    includes: [...BASE_INCLUDES, 'Agua fría a bordo', 'Tiempo libre en la playa (1 h 30 min)'],
    bring: BRING_BEACH,
    highlights: ['Agua calmada para niños', 'Playa casi privada', 'Muy cerca de Las Galeras', 'Arena blanca'],
  },
  {
    slug: 'playa-rincon',
    name: 'Playa Rincón',
    category: 'playa',
    image: '/images/playa-grupo.webp',
    gallery: ['/images/playa-grupo.webp', '/images/catamaran.webp', '/images/barco-grupo.webp', '/images/barco-amigos.webp'],
    short: 'Kilómetros de arena blanca y palmeras, una de las playas más bellas del Caribe.',
    description:
      'Navegamos por la costa de Samaná hasta Playa Rincón, varias veces elegida entre las playas más bonitas del Caribe: casi 3 km de arena blanca, palmeras y agua turquesa. Al final de la playa está el río Caño Frío, donde puedes bañarte en agua dulce y cristalina. Puedes almorzar pescado fresco en los ranchos de la playa (no incluido) antes de regresar en lancha.',
    tags: ['Arena blanca', 'Palmeras', 'Caño Frío'],
    duration: '6 horas',
    schedule: 'Salida a las 9:00 a. m. y regreso a las 3:00 p. m.',
    priceUSD: 45,
    per: 'persona',
    includes: [...BASE_INCLUDES, 'Agua fría a bordo', 'Visita al río Caño Frío', 'Tiempo libre en la playa (4 horas)'],
    bring: [...BRING_BEACH, 'Efectivo para el almuerzo'],
    highlights: ['Una de las mejores playas del Caribe', 'Río Caño Frío', 'Almuerzo de pescado fresco', 'Día completo en el mar'],
  },
  {
    slug: 'ballenas',
    name: 'Avistamiento de ballenas',
    category: 'playa',
    image: '/images/barco-grupo.webp',
    gallery: ['/images/barco-grupo.webp', '/images/barco-proa.webp', '/images/catamaran.webp'],
    short: 'Mira de cerca a las ballenas jorobadas en la bahía de Samaná.',
    description:
      'Cada invierno miles de ballenas jorobadas llegan a la bahía de Samaná para aparearse y tener a sus crías. Salimos en lancha con un capitán que conoce sus rutas para verlas saltar, mostrar la cola y nadar junto a sus ballenatos, siempre respetando la distancia y las normas de protección. Una experiencia que no se olvida.',
    tags: ['Bahía', '15 ene – 31 mar', 'Lancha'],
    duration: '3 a 4 horas',
    schedule: 'Temporada del 15 de enero al 31 de marzo. Salidas a las 8:30 a. m.',
    priceUSD: 65,
    per: 'persona',
    note: 'Solo en temporada de ballenas (15 de enero al 31 de marzo). Reserva con tiempo: es la excursión más pedida.',
    includes: [...BASE_INCLUDES, 'Observación según las normas de protección', 'Agua fría a bordo'],
    bring: ['Gafas de sol', 'Gorra', 'Protector solar', 'Pastilla para el mareo si la necesitas', 'Cámara o celular'],
    highlights: ['Ballenas jorobadas y ballenatos', 'Saltos y colas fuera del agua', 'Capitán con experiencia', 'Respeto por la naturaleza'],
  },
  {
    slug: 'combo-3-playas',
    name: 'Combo 3 playas en lancha',
    category: 'experiencia',
    image: '/images/catamaran.webp',
    gallery: ['/images/catamaran.webp', '/images/barco-proa.webp', '/images/playa-grupo.webp', '/images/barco-tobogan.webp'],
    short: 'Frontón, Madama y Rincón en un solo día.',
    description:
      'El paseo más completo: en un solo día visitas Playa Madama, Playa Frontón y Playa Rincón en lancha. Snorkel en el arrecife de Frontón, un chapuzón en la cala de Madama y la tarde en la arena blanca de Rincón. Es la mejor forma de conocer lo más bonito de Las Galeras si tienes poco tiempo.',
    tags: ['3 playas', 'Snorkel', 'Día completo'],
    duration: '7 horas',
    schedule: 'Salida a las 8:30 a. m. y regreso a las 3:30 p. m.',
    priceUSD: 75,
    per: 'persona',
    featured: true,
    includes: [...BASE_INCLUDES, 'Equipo de snorkel', 'Agua y refrescos a bordo', 'Frutas tropicales'],
    bring: [...BRING_BEACH, 'Efectivo para el almuerzo'],
    highlights: ['Las 3 playas más famosas', 'Snorkel en Frontón', 'Mejor precio que por separado', 'Ideal para tu primera visita'],
  },
  {
    slug: 'snorkel',
    name: 'Snorkel en el arrecife',
    category: 'experiencia',
    image: '/images/catamaran-piscina.webp',
    gallery: ['/images/catamaran-piscina.webp', '/images/barco-tobogan.webp', '/images/barco-proa.webp'],
    short: 'Peces de colores y coral en agua transparente.',
    description:
      'Te llevamos en lancha a los mejores puntos de snorkel de Las Galeras, con agua transparente, corales y peces tropicales. El capitán te explica cómo usar el equipo y te acompaña durante todo el paseo. Perfecto para principiantes y familias.',
    tags: ['Snorkel', 'Arrecife', 'Peces'],
    duration: '2 a 3 horas',
    schedule: 'Salidas todos los días a las 9:00 a. m. y a las 2:00 p. m.',
    priceUSD: 40,
    per: 'persona',
    includes: [...BASE_INCLUDES, 'Equipo de snorkel (máscara, tubo y aletas)', 'Explicación para principiantes', 'Agua fría a bordo'],
    bring: BRING_BEACH,
    highlights: ['Corales y peces tropicales', 'Apto para principiantes', 'Agua transparente', '2 puntos de snorkel'],
  },
  {
    slug: 'lancha-privada',
    name: 'Lancha privada',
    category: 'experiencia',
    image: '/images/catamaran-2.webp',
    gallery: ['/images/catamaran-2.webp', '/images/catamaran.webp', '/images/barco-amigos.webp', '/images/playa-grupo.webp'],
    short: 'La lancha solo para ti y los tuyos. Tú eliges playas y horario.',
    description:
      'Reserva la lancha completa para tu familia, tu pareja o tu grupo de amigos. Tú decides las playas, las paradas y la hora de salida, y el capitán arma la ruta a tu medida. Ideal para celebraciones, propuestas de matrimonio o simplemente para disfrutar sin prisa.',
    tags: ['Privado', 'A tu medida', 'Hasta 10 personas'],
    duration: '4 u 8 horas',
    schedule: 'Horario a tu elección, todos los días.',
    priceUSD: 280,
    per: 'lancha',
    perNote: 'hasta 10 personas',
    includes: ['Lancha completa solo para tu grupo', 'Capitán local', 'Chalecos salvavidas', 'Ruta a tu medida', 'Equipo de snorkel', 'Agua y refrescos a bordo'],
    bring: BRING_BEACH,
    highlights: ['Solo tu grupo a bordo', 'Tú eliges las playas', 'Horario flexible', 'Ideal para celebraciones'],
  },
  {
    slug: 'fiesta-en-el-mar',
    name: 'Fiesta en el mar',
    category: 'experiencia',
    image: '/images/barco-fiesta.webp',
    gallery: ['/images/barco-fiesta.webp', '/images/barco-amigos.webp', '/images/barco-grupo.webp'],
    short: 'Música, bebidas y amigos navegando por Samaná.',
    description:
      'Un paseo en lancha con música, bebidas y paradas para bañarte en el mar. El plan perfecto para cumpleaños, despedidas o para celebrar tus vacaciones con amigos en el agua turquesa de Las Galeras.',
    tags: ['Música', 'Bebidas', 'Grupos'],
    duration: '4 horas',
    schedule: 'Salidas los fines de semana o cuando tu grupo quiera.',
    priceUSD: 55,
    per: 'persona',
    includes: [...BASE_INCLUDES, 'Música a bordo', 'Bebidas (refrescos, cerveza y ron)', 'Paradas para nadar'],
    bring: BRING_BEACH,
    highlights: ['Ambiente de fiesta', 'Bebidas incluidas', 'Paradas para nadar', 'Ideal para celebraciones'],
  },
];

export const excursionPath = (slug: string) => `/excursiones/${slug}`;
export const findExcursion = (slug?: string) => EXCURSIONS.find((e) => e.slug === slug);
export const TOURS = EXCURSIONS.filter((e) => e.category === 'playa');
export const EXPERIENCES = EXCURSIONS.filter((e) => e.category === 'experiencia');
export const fmt = (n: number) => `US$${n.toLocaleString('en-US')}`;

// Opciones para el selector de reservas
export const BOOKING_OPTIONS = EXCURSIONS.map((e) => e.name);

// Orden pensado para que la rejilla (4 columnas, altas = 2 filas) cierre sin huecos
export const GALLERY = [
  { tall: true, src: '/images/catamaran-2.webp', alt: 'Lancha en una cala de Samaná' },
  { src: '/images/barco-amigos.webp', alt: 'Amigos celebrando a bordo' },
  { src: '/images/playa-grupo.webp', alt: 'Grupo disfrutando en la playa' },
  { tall: true, src: '/images/catamaran-piscina.webp', alt: 'Paseo en el mar turquesa' },
  { src: '/images/barco-tobogan.webp', alt: 'Chapuzón en aguas cristalinas' },
  { src: '/images/barco-fiesta.webp', alt: 'Fiesta en el mar con amigos' },
];
