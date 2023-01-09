import NextLink from 'next/link';
import { Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react';
import AnimatedGradientText from '../components/animated-gradient-text';
import Layout from '../components/layouts/article';

const NotFound = () => {
  return (
    <Layout title="404">
      <Container>
        <Box align="center" mt={16}>
          <Heading as="h3" fontWeight="bold">
            Not Found
          </Heading>
          <AnimatedGradientText fontSize="4xl">404</AnimatedGradientText>
          <Divider my={6} />
          <Text>La página que buscas aparentemente no existe.</Text>
          <Text>⚙️ Estoy trabajando en mejorar tu experiencia aquí.</Text>
        </Box>

        <Box my={6} align="center">
          <NextLink href="/" passHref>
            <Button colorScheme="blue">Regresar a inicio</Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  );
};

export default NotFound;
