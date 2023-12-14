export interface Comic {
  name: string;
  author: string;
  publisher: string;
  pages: number;
  price: number;
  description: string;
  imgUrl: string;
}

export interface ProductGridProps {
  products: Comic[];
}
