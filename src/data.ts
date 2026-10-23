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
    id: 'playa-fronton',
    name: 'Playa Frontón en lancha',
    image: '/images/barco-proa.webp',
    text: 'Acantilados, arrecife y agua cristalina. Una playa escondida que solo se alcanza por mar, ideal para snorkel.',
    tags: ['Lancha', 'Snorkel', 'Arrecife'],
    featured: true,
  },
  {
    id: 'playa-madama',
    name: 'Playa Madama',
    image: '/images/barco-tobogan.webp',
    text: 'Una pequeña cala rodeada de selva y rocas, tranquila y perfecta para nadar.',
    tags: ['Cala', 'Selva', 'Relax'],
  },
  {
    id: 'playa-rincon',
    name: 'Playa Rincón',
    image: '/images/playa-grupo.webp',
    text: 'Kilómetros de arena blanca y palmeras, considerada una de las playas más bellas del Caribe.',
    tags: ['Arena blanca', 'Palmeras', 'Caribe'],
  },
  {
    id: 'ballenas',
    name: 'Avistamiento de ballenas',
    image: '/images/barco-grupo.webp',
    text: 'Navega la bahía de Samaná y mira de cerca a las ballenas jorobadas en temporada.',
    tags: ['Bahía', 'Ene – Mar', 'Lancha'],
  },
];

export const EXPERIENCES = [
  { id: 'combo', name: 'Combo 3 playas en lancha', image: '/images/catamaran.webp' },
  { id: 'snorkel', name: 'Snorkel en el arrecife', image: '/images/catamaran-piscina.webp' },
  { id: 'privado', name: 'Lancha privada', image: '/images/catamaran-2.webp' },
  { id: 'grupos', name: 'Paseos en grupo', image: '/images/barco-amigos.webp' },
  { id: 'fiesta', name: 'Fiesta en el mar', image: '/images/barco-fiesta.webp' },
];

// Opciones para el selector de reservas
export const BOOKING_OPTIONS = [...TOURS.map((t) => t.name), ...EXPERIENCES.map((e) => e.name)];

// Orden pensado para que la rejilla (4 columnas, altas = 2 filas) cierre sin huecos
export const GALLERY = [
  { tall: true, src: '/images/catamaran-2.webp', alt: 'Lancha en una cala de Samaná' },
  { src: '/images/barco-amigos.webp', alt: 'Amigos celebrando a bordo' },
  { src: '/images/playa-grupo.webp', alt: 'Grupo disfrutando en la playa' },
  { tall: true, src: '/images/catamaran-piscina.webp', alt: 'Paseo en el mar turquesa' },
  { src: '/images/barco-tobogan.webp', alt: 'Chapuzón en aguas cristalinas' },
  { src: '/images/barco-fiesta.webp', alt: 'Fiesta en el mar con amigos' },
];
