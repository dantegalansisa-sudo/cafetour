export const CONFIG = {
  brand: 'D Daniel Tours',
  phoneDisplay: '+1 (829) 359-4745',
  phoneHref: 'tel:+18293594745',
  whatsapp: '18293594745',
  address: 'Las Galeras, Samaná, República Dominicana',
  mapQuery: 'Playa Las Galeras, Samaná, República Dominicana',
  hours: 'Salidas todos los días',
  tiktok: 'danielespinal84',
  bookingEmail: '',
};

export const waLink = (text: string) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
export const tiktokUrl = `https://www.tiktok.com/@${CONFIG.tiktok}`;
