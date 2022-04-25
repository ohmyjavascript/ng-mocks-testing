export interface Product {
  category: string;
  description: string;
  id?: number;
  image: string;
  price: number;
  rating?: Rating;
  title: string;
}

export interface Rating {
  count: number;
  rate: number;
}
