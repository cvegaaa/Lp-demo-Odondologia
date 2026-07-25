export const CLINIC = {
  name: 'Sonrisas de Córdoba',
  fullName: 'Centro Odontológico Especializado Sonrisas de Córdoba',
  city: 'Cereté, Córdoba',
  phoneDisplay: '+57 302 000 0000',
  phoneE164: '+573020000000',
  whatsapp: '573020000000',
  email: 'contacto@sonrisasdecordoba.com',
  address: 'Calle 23 #6-42, Centro, Cereté, Córdoba',
  hours: [
    { day: 'Lunes – Viernes', time: '8:00 a.m. – 6:00 p.m.' },
    { day: 'Sábados', time: '8:00 a.m. – 1:00 p.m.' },
    { day: 'Domingos', time: 'Cerrado' },
  ],
  mapsEmbed:
    'https://www.google.com/maps?q=Cerete+Cordoba+Colombia&output=embed',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Cereté+Córdoba+Colombia',
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
};

export const WHATSAPP_MESSAGE =
  'Hola Sonrisas de Córdoba, me gustaría agendar una cita de valoración. Vengo desde su página web.';

export function whatsappLink(message: string = WHATSAPP_MESSAGE): string {
  return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function telLink(): string {
  return `tel:${CLINIC.phoneE164}`;
}

export const SERVICES = [
  {
    slug: 'ortodoncia',
    name: 'Ortodoncia',
    short: 'Brackets metálicos y estéticos, alineadores y correctores de mordida.',
    description:
      'Alineamos tus dientes con brackets tradicionales, estéticos o alineadores invisibles. Plan personalizado con control mensual y resultados predecibles.',
    bullets: ['Brackets metálicos y zafiro', 'Alineadores invisibles', 'Control mensual'],
    image:
      'https://images.pexels.com/photos/6627838/pexels-photo-6627838.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    slug: 'diseno-sonrisa',
    name: 'Diseño de Sonrisa',
    short: 'Carillas, blanqueamiento y armonización estética del rostro.',
    description:
      'Diseñamos digitalmente tu sonrisa antes de tocarla. Carillas de porcelana, blanqueamiento y armonización de la sonrisa con tu rostro.',
    bullets: ['Diseño digital previo', 'Carillas de porcelana', 'Blanqueamiento LED'],
    image:
      'https://images.pexels.com/photos/3946835/pexels-photo-3946835.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    slug: 'endodoncia',
    name: 'Endodoncia',
    short: 'Tratamiento de conducto sin dolor para salvar tu diente.',
    description:
      'Tratamiento de conducto con tecnología moderna y anestesia avanzada para eliminar el dolor y conservar tu diente natural.',
    bullets: ['Tecnología rotatoria', 'Sin dolor', 'Conserva el diente'],
    image:
      'https://images.pexels.com/photos/3952008/pexels-photo-3952008.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    slug: 'rehabilitacion-oral',
    name: 'Rehabilitación Oral',
    short: 'Implantes, prótesis y reconstrucción completa de la boca.',
    description:
      'Reconstruimos tu boca con implantes, prótesis fijas y removibles para devolverte la función y la confianza al sonreír.',
    bullets: ['Implantes dentales', 'Prótesis fijas y removibles', 'Reconstrucción completa'],
    image:
      'https://images.pexels.com/photos/4269948/pexels-photo-4269948.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    slug: 'odontologia-general',
    name: 'Odontología General',
    short: 'Limpiezas, profilaxis, caries y control de salud bucal.',
    description:
      'Cuidamos tu salud bucal con profilaxis, detartraje, tratamiento de caries y revisiones periódicas para prevenir problemas mayores.',
    bullets: ['Profilaxis y limpieza', 'Tratamiento de caries', 'Revisiones periódicas'],
    image:
      'https://images.pexels.com/photos/4270379/pexels-photo-4270379.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
] as const;

export const VALUE_PROPS = [
  {
    icon: 'ShieldCheck',
    title: 'Tranquilidad total',
    text: 'Atención odontológica especializada con técnicas mínimamente invasivas. Sin dolor, sin estrés.',
  },
  {
    icon: 'MapPin',
    title: 'Comodidad y tiempo',
    text: 'Todos los tratamientos de alta complejidad en un solo lugar. Sin desplazamientos innecesarios.',
  },
  {
    icon: 'Award',
    title: 'Confianza duradera',
    text: 'Materiales de alta calidad y especialistas certificados para resultados estéticos que perduran.',
  },
] as const;

export const STEPS = [
  {
    n: '01',
    title: 'Contáctanos',
    text: 'Escríbenos por WhatsApp en segundos. Te orientamos y agendamos tu valoración.',
  },
  {
    n: '02',
    title: 'Asiste a tu valoración',
    text: 'Diagnóstico especializado con tecnología moderna. Un plan claro y transparente, sin compromiso.',
  },
  {
    n: '03',
    title: 'Recupera tu sonrisa',
    text: 'Iniciamos tu plan de tratamiento con seguimiento cercano hasta el resultado final.',
  },
] as const;

export const TESTIMONIALS = [
  {
    name: 'María Camila T.',
    treatment: 'Diseño de Sonrisa',
    rating: 5,
    text: 'Tenía miedo de ir al odontólogo, pero el equipo me hizo sentir tranquila desde el primer día. Mi sonrisa cambió por completo y sin dolor.',
  },
  {
    name: 'Jorge Eliécer M.',
    treatment: 'Ortodoncia',
    rating: 5,
    text: 'Llevo un año con brackets y los resultados se ven. Atención puntual, explicaciones claras y precios honestos desde la valoración.',
  },
  {
    name: 'Diana Patricia P.',
    treatment: 'Rehabilitación Oral',
    rating: 5,
    text: 'Me colocaron implantes después de años sin dientes. Volví a sonreír sin pena. La clínica es moderna y muy higiénica.',
  },
] as const;

export const STATS = [
  { value: '12+', label: 'Años cuidando sonrisas en Córdoba' },
  { value: '5.000+', label: 'Pacientes atendidos' },
  { value: '5', label: 'Especialidades en un solo lugar' },
  { value: '5.0', label: 'Calificación de pacientes' },
] as const;
