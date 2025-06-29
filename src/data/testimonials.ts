export interface Testimonial {
  imageUrl: string;
  altText: string;
  quote: string;
  clientName: string;
}

export const testimonials: Testimonial[] = [
  {
    imageUrl: "https://via.placeholder.com/600x400/5A67D8/FFFFFF?text=Proyecto+1",
    altText: "Techo instalado en casa de cliente",
    quote: "El equipo de [Nombre de tu Empresa] superó nuestras expectativas. El techo quedó impecable y el servicio fue de primera. ¡Totalmente recomendados!",
    clientName: "Familia García",
  },
  {
    imageUrl: "https://via.placeholder.com/600x400/5A67D8/FFFFFF?text=Proyecto+2",
    altText: "Estructura metálica para almacén",
    quote: "Necesitábamos una estructura metálica robusta para nuestro almacén y [Nombre de tu Empresa] entregó un trabajo de excelente calidad, a tiempo y dentro del presupuesto.",
    clientName: "Industrias XYZ",
  },
  {
    imageUrl: "https://via.placeholder.com/600x400/5A67D8/FFFFFF?text=Proyecto+3",
    altText: "Pérgola metálica en jardín",
    quote: "Nuestra nueva pérgola es el centro de atención del jardín. El diseño y la instalación fueron perfectos. ¡Gracias por hacer realidad nuestro sueño!",
    clientName: "Sra. Rodríguez",
  },
  {
    imageUrl: "https://via.placeholder.com/600x400/5A67D8/FFFFFF?text=Proyecto+4",
    altText: "Revestimiento de fachada de edificio",
    quote: "El revestimiento metálico de la fachada le dio un aspecto moderno y elegante a nuestro edificio. El profesionalismo de [Nombre de tu Empresa] es inigualable.",
    clientName: "Edificio Central",
  },
  {
    imageUrl: "https://via.placeholder.com/600x400/5A67D8/FFFFFF?text=Proyecto+5",
    altText: "Instalación de canaletas",
    quote: "La instalación de las canaletas fue rápida y eficiente. Ahora no tenemos problemas con el agua de lluvia. ¡Un servicio muy confiable!",
    clientName: "Sr. Pérez",
  },
  {
    imageUrl: "https://via.placeholder.com/600x400/5A67D8/FFFFFF?text=Proyecto+6",
    altText: "Reparación de techo industrial",
    quote: "Teníamos una filtración importante en el techo de nuestra fábrica y [Nombre de tu Empresa] la reparó de inmediato, minimizando el impacto en nuestras operaciones.",
    clientName: "Fábrica ABC",
  },
];
