export interface ProductCardProps {
  title: string;
  authors: string;
  publisher: string;
  pages: number;
  price: number;
  description: string;
  imgLink: string;
}

export interface ProductGridProps {
  products: ProductCardProps[];
}
