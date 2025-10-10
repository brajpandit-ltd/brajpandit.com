export interface PujaService {
  title: string;
  slug: string;
  category: string;
  trending?: string[];
  tags?: string[];
  description: string | any;
  bannerImage: string;
  images?: string[];
  count?: number;
  price: number;
  duration: string;
  popular: boolean;
  rating: number;
  packages: any[];
}

export interface SearchPujaFiltersParams {
  searchQuery?: string;
  category?: string;
  trending?: string;
  tags?: string[];
}

export interface PujaCategory {
  title: string;
  slug: string;
  image: string;
}
