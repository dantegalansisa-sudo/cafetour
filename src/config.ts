// Datos de contacto del negocio. Editar aquí y se actualiza toda la web.
export const CONFIG = {
  brand: 'Café Tours',
  phoneDisplay: '+1 (809) 280-7227',
  phoneHref: 'tel:+18092807227',
  whatsapp: '18092807227',
  address: 'Las Terrenas, Samaná, República Dominicana',
  mapQuery: 'Las Terrenas, Samaná, República Dominicana',
  hours: 'Abierto 24 horas',
  instagram: 'cafetours_samana',
  // Correo donde llegan las reservas del formulario (vía FormSubmit.co).
  // Mientras esté vacío, el formulario envía la solicitud por WhatsApp.
  // La primera vez que llegue un envío, FormSubmit manda un correo de activación a esta dirección.
  bookingEmail: '',
};

export const waLink = (text: string) =>
  `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;

export const instagramUrl = `https://www.instagram.com/${CONFIG.instagram}/`;
