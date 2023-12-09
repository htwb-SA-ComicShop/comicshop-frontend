import { SimpleGrid } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import { ProductGridProps } from '../types';

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <SimpleGrid columns={3} spacing={4}>
      {products.map(
        ({ title, authors, publisher, pages, price, description, imgLink }) => (
          <ProductCard
            title={title}
            authors={authors}
            publisher={publisher}
            pages={pages}
            price={price}
            description={description}
            imgLink={imgLink}
          />
        )
      )}
    </SimpleGrid>
  );
};

export default ProductGrid;
