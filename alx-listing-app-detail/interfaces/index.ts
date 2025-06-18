// interfaces/index.ts

export interface Address {
  city: string;
  country: string;
}

export interface Review {
  name: string;
  rating: number;
  avatar: string;
  comment: string;
}

export interface PropertyProps {
  name: string;
  rating: number;
  address: Address;
  image: string;
  description: string;
  category: string[];
  price: number;
  reviews: Review[];
}
