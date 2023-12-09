import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import { ProductCardProps } from '../types';

const ProductCard = ({
  title,
  authors,
  publisher,
  pages,
  price,
  description,
  imgLink,
}: ProductCardProps): ReactElement => {
  return (
    <Card maxW='sm' variant='filled'>
      <CardBody>
        <Image
          src={imgLink}
          alt={`Opened ${name} comic book`}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{title}</Heading>
          <Heading size='sm' color='teal.400'>
            {authors}
          </Heading>
          <Text>
            Published by <strong>{publisher}</strong>
          </Text>
          <Text>{pages} Pages</Text>
          <Text>{description}</Text>
          <Text color='teal.600' fontSize='2xl'>
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='teal'>
            Add to cart
          </Button>
          <Button variant='ghost' colorScheme='teal'>
            More information
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
