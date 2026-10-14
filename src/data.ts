export type Tour = {
  id: string;
  name: string;
  image: string;
  text: string;
  tags: string[];
  featured?: boolean;
};

export const TOURS: Tour[] = [
  {
    id: 'buggy-samana',
    name: 'Buggy Aventura',
    image: '/images/buggy-rio.webp',
    text: 'Cruza ríos, caminos de tierra y senderos tropicales en plena naturaleza de Samaná.',
    tags: ['Río', 'Lodo', 'Senderos'],
    featured: true,
  },
  {
    id: 'salto-limon',
    name: 'Salto del Limón',
    image: '/images/caballos.webp',
    text: 'Cabalgata entre montañas y selva hasta una de las cascadas más famosas del país.',
    tags: ['Cascada', 'Cabalgata', 'Naturaleza'],
  },
  {
    id: 'ballenas',
    name: 'Avistamiento de ballenas',
    image: '/images/barco-proa.webp',
    text: 'Navega la bahía de Samaná y mira de cerca a las ballenas jorobadas en temporada.',
    tags: ['Bahía', 'Ene – Mar', 'Barco'],
  },
  {
    id: 'four-wheel',
    name: 'Four Wheel 4x4',
    image: '/images/atv-rio.webp',
    text: 'Tu propio four wheel para sentir el agua y la velocidad en cada curva del recorrido.',
    tags: ['ATV', 'Agua', 'Adrenalina'],
  },
];

export const EXPERIENCES = [
  { id: 'playas', name: 'Playa Ermitaño & playas', image: '/images/playa-grupo.webp' },
  { id: 'barco', name: 'Paseos en barco & catamarán', image: '/images/barco-fiesta.webp' },
  { id: 'buggy-playa', name: 'Buggy por la costa', image: '/images/buggy-playa.webp' },
  { id: 'grupos', name: 'Tours en grupo', image: '/images/buggy-18-agua.webp' },
  { id: 'privados', name: 'Tours privados', image: '/images/grupo-buggies.webp' },
];

// Opciones para el selector de reservas
export const BOOKING_OPTIONS = [
  ...TOURS.map((t) => t.name),
  ...EXPERIENCES.map((e) => e.name),
  'Transporte / traslado',
  'Combo de excursiones',
];

// Orden pensado para que la rejilla (4 columnas, altas = 2 filas) cierre sin huecos
export const GALLERY = [
  { tall: true, src: '/images/buggies-rojos.webp', alt: 'Caravana de buggies' },
  { src: '/images/grupo-buggies.webp', alt: 'Grupo celebrando después de la excursión' },
  { src: '/images/barco-grupo.webp', alt: 'Amigos en la proa del barco' },
  { tall: true, src: '/images/atv-luces.webp', alt: 'Four wheel cruzando el río' },
  { src: '/images/catamaran-piscina.webp', alt: 'Catamarán con piscina' },
  { src: '/images/buggy-playa.webp', alt: 'Buggies en la arena' },
  { tall: true, src: '/images/buggy-crucero-2.webp', alt: 'Buggy en la costa con vista al mar' },
  { src: '/images/playa-grupo.webp', alt: 'Grupo disfrutando en la playa' },
  { src: '/images/catamaran.webp', alt: 'Catamarán en aguas turquesa' },
  { tall: true, src: '/images/atv-playa.webp', alt: 'Four wheel en la playa' },
  { src: '/images/buggy-18-agua.webp', alt: 'Buggies cruzando el agua' },
  { src: '/images/barco-fiesta.webp', alt: 'Paseo en barco con amigos' },
];
