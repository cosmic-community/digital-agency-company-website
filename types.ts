// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Services
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name: string;
    description: string;
    starting_price?: string;
    service_icon?: {
      url: string;
      imgix_url: string;
    };
    key_features?: string[];
  };
}

// Team Members
export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    full_name: string;
    job_title: string;
    bio?: string;
    profile_photo?: {
      url: string;
      imgix_url: string;
    };
    email?: string;
    linkedin_url?: string;
  };
}

// Testimonials
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name: string;
    company: string;
    position?: string;
    testimonial_text: string;
    rating?: {
      key: string;
      value: string;
    };
    client_photo?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Case Studies
export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    project_title: string;
    client_name: string;
    project_overview: string;
    challenge?: string;
    solution?: string;
    results?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    services_used?: Service[];
  };
}

// Pages
export interface Page extends CosmicObject {
  type: 'pages';
  metadata: {
    page_title: string;
    content: string;
    seo_description?: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Contact Form
export interface ContactForm extends CosmicObject {
  type: 'contact-forms';
  metadata: {
    name: string;
    email: string;
    company?: string;
    service_interest?: string;
    message: string;
    budget_range?: string;
  };
}

// API Response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards
export function isService(obj: CosmicObject): obj is Service {
  return obj.type === 'services';
}

export function isTeamMember(obj: CosmicObject): obj is TeamMember {
  return obj.type === 'team-members';
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}

export function isCaseStudy(obj: CosmicObject): obj is CaseStudy {
  return obj.type === 'case-studies';
}

export function isPage(obj: CosmicObject): obj is Page {
  return obj.type === 'pages';
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service_interest?: string;
  message: string;
  budget_range?: string;
}

// Service Interest options
export type ServiceInterest = 'web-dev' | 'design' | 'seo' | 'consulting' | 'other';

// Budget Range options
export type BudgetRange = '5k-10k' | '10k-25k' | '25k-50k' | '50k+';