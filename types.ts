
export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
}
