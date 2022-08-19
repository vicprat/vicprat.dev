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
    bgSize="500%"
    bgGradient={useColorModeValue('linear-gradient(-45deg, #71c5ee, #71c5ee, #025091, #025091,)', 'linear-gradient(-45deg, #ac81a3, #ac81a3, #fbc8d5, #fbc8d5)')}
    bgClip="text"
    fontSize="5xl"
    fontWeight="extrabold"
  >
    {children}
  </Text>
);

export default AnimatedGradientText;
