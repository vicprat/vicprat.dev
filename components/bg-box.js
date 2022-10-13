import { Box, Text, useColorModeValue } from '@chakra-ui/react';

const BgBox = ({ children }) => {
  return (
    <Box borderRadius="lg" mt={4} mb={4} p={4} textAlign="center" bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')} css={{ backdropFilter: 'blur(10px)' }}>
      <Text>{children}</Text>
    </Box>
  );
};

export default BgBox;
