 
export interface NavItem {
  title: string;
  href: string;
  openInNewWindow?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  company: string;
  category: string;
  certificationDate: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  link: string;
  type: 'article' | 'video' | 'guide';
}

 