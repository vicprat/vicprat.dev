import NextLink from 'next/link';
import { Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react';
import AnimatedGradientText from '../components/animated-gradient-text';

const NotFound = () => {
  return (
    <Container>
      <Box align="center" mt={16}>
        <Text fontWeight="bold" fontSize="2xl">
          Not Found
        </Text>
        <AnimatedGradientText fontSize="4xl">404</AnimatedGradientText>
        <Text>La página que buscas aparentemente no existe.</Text>
        <Text>⚙️ Estoy trabajando en mejorar tu experiencia aquí.</Text>
      </Box>

      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="blue">Regresar a inicio</Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
