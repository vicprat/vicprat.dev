import { Box, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';

const Btn = ({ children, href }) => {
  return (
    <>
      <Box align="center" my={4}>
        <NextLink href={href} passHref scroll={false}>
          <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
            {children}
          </Button>
        </NextLink>
      </Box>
    </>
  );
};

export default Btn;
