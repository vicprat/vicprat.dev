import { keyframes, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const animationKeyFrames = keyframes`
0% { background-position: 0px 50%; }
50% { background-position: 100% 50%; }
100% { background-position: 0px 50%; }
`;
const animation = `${animationKeyFrames} 6s ease-in-out infinite`;

const AnimatedGradientText = ({ children }) => (
  <Text
    as={motion.text}
    animation={animation}
    bgSize="350%"
    bgGradient={useColorModeValue('linear-gradient(-45deg, #09009F, #71c5ee, #048A9A, #00FF95,)', 'linear-gradient(-45deg, #5598DE, #7F87FF, #F65AAD, #EC3D43)')}
    bgClip="text"
    fontSize="5xl"
    fontWeight="extrabold"
    textAlign="justify"
  >
    {children}
  </Text>
);

export default AnimatedGradientText;
