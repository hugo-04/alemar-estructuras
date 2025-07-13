/**
 * Utilidades auxiliares para el proyecto ALEMAR Estructuras
 */

/**
 * Convierte un string en slug para URLs
 * @param text - Texto a convertir
 * @returns Slug formateado
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Formatea un número de teléfono
 * @param phone - Número de teléfono
 * @returns Número formateado
 */
export function formatPhone(phone: string): string {
  return phone.replace(/(\d{3})(\d{3})(\d{3})/, '+$1 $2 $3');
}

/**
 * Valida si una URL es válida
 * @param url - URL a validar
 * @returns true si es válida
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Obtiene la categoría de un servicio por slug
 * @param slug - Slug del servicio
 * @param services - Array de servicios
 * @returns Categoría del servicio
 */
export function getServiceCategory(slug: string, services: any[]): string | null {
  const service = services.find(s => s.slug === slug);
  return service?.category || null;
} 