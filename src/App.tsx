import { Heading, VStack } from '@chakra-ui/react';
import NavBar from './components/NavBar';

function App() {
  return (
    <main>
      <NavBar />
      <VStack w='80%' mx='auto'>
        <Heading>Hello world!</Heading>
      </VStack>
    </main>
  );
}

export default App;
