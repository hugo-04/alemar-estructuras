// Global type definitions for the Astro project

declare module 'astro:content' {
  interface Render {
    '.md': Promise<{
      Content: import('astro').MarkdownInstance<{}>['Content'];
      headings: import('astro').MarkdownHeading[];
      remarkPluginFrontmatter: Record<string, any>;
    }>;
  }
}

// Environment variables
interface ImportMetaEnv {
  readonly SITE_URL: string;
  readonly SITE_NAME: string;
  readonly CONTACT_EMAIL: string;
  readonly CONTACT_PHONE: string;
  readonly WHATSAPP_NUMBER: string;
  readonly GOOGLE_ANALYTICS_ID?: string;
  readonly GOOGLE_TAG_MANAGER_ID?: string;
  readonly FACEBOOK_URL?: string;
  readonly INSTAGRAM_URL?: string;
  readonly LINKEDIN_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Common component props
export interface BaseComponentProps {
  class?: string;
  id?: string;
  'data-testid'?: string;
}

// Image types
export interface OptimizedImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
}

// SEO types
export interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  category: string;
}

// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  category: string;
  location: string;
  date: string;
  tags: string[];
}
