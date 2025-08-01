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

// Service interface
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name?: string;
    short_description?: string;
    detailed_description?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    starting_price?: string;
    key_features?: string[];
    service_category?: {
      key: string;
      value: string;
    };
  };
}

// Team Member interface
export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    full_name?: string;
    job_title?: string;
    profile_photo?: {
      url: string;
      imgix_url: string;
    };
    bio?: string;
    years_experience?: number;
    email?: string;
    linkedin_url?: string;
    twitter_url?: string;
    specialties?: string[];
  };
}

// Case Study interface
export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    project_title?: string;
    client_name?: string;
    project_overview?: string;
    challenge?: string;
    solution?: string;
    results?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    project_gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    services_used?: Service[];
    project_duration?: string;
    live_url?: string;
  };
}

// Testimonial interface
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name?: string;
    client_title?: string;
    company_name?: string;
    testimonial_quote?: string;
    rating?: {
      key: string;
      value: string;
    };
    client_photo?: {
      url: string;
      imgix_url: string;
    };
    company_logo?: {
      url: string;
      imgix_url: string;
    };
    project_type?: string;
  };
}

// Service categories type literal
export type ServiceCategory = 'web_dev' | 'marketing' | 'design' | 'consulting';

// Rating type literal
export type Rating = '5' | '4' | '3';

// Cosmic API response interface
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards
export function isService(obj: CosmicObject): obj is Service {
  return obj.type === 'services';
}

export function isTeamMember(obj: CosmicObject): obj is TeamMember {
  return obj.type === 'team-members';
}

export function isCaseStudy(obj: CosmicObject): obj is CaseStudy {
  return obj.type === 'case-studies';
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}

// Component prop interfaces
export interface ServiceCardProps {
  service: Service;
  className?: string;
}

export interface TeamMemberCardProps {
  member: TeamMember;
  className?: string;
}

export interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  className?: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}