import NextLink from 'next/link';
import { Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react';
import AnimatedGradientText from '../components/animated-gradient-text';

const NotFound = () => {
  return (
    <Container>
      <Box align="center" mt={16}>
        <Heading as="h1">Not found</Heading>
        <AnimatedGradientText>404</AnimatedGradientText>
        <Text>The page you&apos;re looking for was not found.</Text>
        <Text>⚙️ I&apos;m working on it.</Text>
      </Box>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="blue">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
