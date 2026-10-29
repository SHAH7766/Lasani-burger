export type Category = 'all' | 'burgers' | 'pizza' | 'shawarma' | 'bbq' | 'sides' | 'drinks';

export interface MenuItem {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: Category;
  price: number | null; // null if unconfirmed / "Ask for Price"
  image: string;
  featured?: boolean;
  spicyLevel?: number; // 0 to 3
  prepTime?: string;
  popular?: boolean;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  source: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}
