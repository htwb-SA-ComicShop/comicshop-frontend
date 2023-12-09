import { VStack } from '@chakra-ui/react';
import NavBar from './misc/NavBar/components';
import ProductGrid from './product/components/ProductGrid';
import { data } from './data/data';

function App() {
  return (
    <main>
      <NavBar />
      <VStack w='80%' mx='auto'>
        <ProductGrid products={data} />
      </VStack>
    </main>
  );
}

export default App;
