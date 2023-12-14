import { Spinner, VStack } from '@chakra-ui/react';
import NavBar from './misc/NavBar/components';
import ProductGrid from './product/components/ProductGrid';
import { useEffect, useState } from 'react';
import { Comic } from './product/types';

function App() {
  const [comics, setComics] = useState<Comic[]>([]);
  useEffect(() => {
    async function fetchComics() {
      const response = await fetch('http://localhost:8080/products');
      const receivedComics: Comic[] = await response.json();
      setComics(receivedComics);
    }
    fetchComics();
  }, []);

  return (
    <main>
      <NavBar />
      <VStack w='80%' mx='auto'>
        {comics.length > 0 ? (
          <ProductGrid products={comics} />
        ) : (
          <Spinner
            my={40}
            size='xl'
            emptyColor='teal.200'
            color='teal.500'
            speed='0.75s'
            thickness='5px'
          />
        )}
      </VStack>
    </main>
  );
}

export default App;
