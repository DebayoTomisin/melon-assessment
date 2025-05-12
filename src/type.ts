export interface Product {
  category: string;
  description: string;
  id: string | number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
}
