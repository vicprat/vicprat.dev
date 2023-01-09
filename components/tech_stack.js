import { Box, Grid, GridItem, Text, SimpleGrid } from '@chakra-ui/react';
import Section from './section';
import AnimatedGradientText from './animated-gradient-text';

import JS from '../public/images/icons/javascript.svg';
import TS from '../public/images/icons/typescript.svg';
import CSS from '../public/images/icons/css.svg';
import HTML from '../public/images/icons/html.svg';
import REACT from '../public/images/icons/react.svg';
import NEXT from '../public/images/icons/next-js.svg';
import NODE from '../public/images/icons/node-js.svg';
import MBD from '../public/images/icons/mongodb.svg';
import PSQL from '../public/images/icons/postgresql.svg';
import TAIL from '../public/images/icons/tailwindcss.svg';
import REDUX from '../public/images/icons/redux.svg';
import VITE from '../public/images/icons/vitejs.svg';
import GIT from '../public/images/icons/git.svg';
import GRAPH from '../public/images/icons/graphql.svg';
import EX from '../public/images/icons/express-js.svg';
import DOCKER from '../public/images/icons/docker.svg';
import FIRE from '../public/images/icons/firebase.svg';

const icons = [
  { name: <JS height="100" width="100" />, iconKey: 'javascript' },
  { name: <TS height="100" width="100" />, iconKey: 'typescript' },
  { name: <CSS height="100" width="100" />, iconKey: 'css' },
  { name: <HTML height="100" width="100" />, iconKey: 'html' },
  { name: <REACT height="100" width="100" />, iconKey: 'react' },
  { name: <NEXT height="100" width="100" />, iconKey: 'next.js' },
  { name: <NODE height="100" width="100" />, iconKey: 'node.js' },
  { name: <MBD height="100" width="100" />, iconKey: 'mongo db' },
  { name: <PSQL height="100" width="100" />, iconKey: 'postgresql' },
  { name: <TAIL height="100" width="100" />, iconKey: 'tailwindcss' },
  { name: <REDUX height="100" width="100" />, iconKey: 'redux' },
  { name: <VITE height="100" width="100" />, iconKey: 'vite' },
  { name: <GIT height="100" width="100" />, iconKey: 'git' },
  { name: <GRAPH height="100" width="100" />, iconKey: 'graphql' },
  { name: <EX height="100" width="100" />, iconKey: 'express.js' },
  { name: <DOCKER height="100" width="100" />, iconKey: 'docker' },
  { name: <FIRE height="100" width="100" />, iconKey: 'firebase' },
];

function Stack() {
  return (
    <Section delay={0.2}>
      <Box py={12}>
        <Box display="flex" pb={8} justifyContent="center">
          <Text fontSize="2xl" paddingRight="4">
            💻
          </Text>
          <AnimatedGradientText fontSize="2xl">Mi stack</AnimatedGradientText>
        </Box>
        <SimpleGrid minChildWidth="120px" spacing="40px" alignContent="center" textAlign="center">
          {icons.map((icon) => (
            <Box key={icon.iconKey}>
              <Box p={6}>{icon.name}</Box>
              <Text fontSize="sm" mt="6">
                {icon.iconKey.toUpperCase()}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Section>
  );
}

export default Stack;
