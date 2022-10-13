import ContactBtns from './contact-info';
import { Box, Heading, Divider } from '@chakra-ui/react';

const Footer = () => {
  return (
    <>
      <Divider my={6} />
      <Heading as="h3" variant="section-title" textAlign="center">
        ☕ Tomemos un café
      </Heading>
      <ContactBtns fontSize="md" colorScheme="blue" />
      <Box align="center" opacity={0.4} fontSize="sm">
        &copy; {new Date().getFullYear()} Victor Prado Trujillo.
      </Box>
    </>
  );
};

export default Footer;
