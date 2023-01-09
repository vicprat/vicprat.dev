import { Text, Container, Heading, Box, Divider, chakra, Flex } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Paragraph from '../components/paragraph';
import AnimatedGradientText from '../components/animated-gradient-text';
import Section from '../components/section';
import Image from 'next/image';
import ContactBtns from '../components/contact-info';
import Btn from '../components/button';
import BgBox from '../components/bg-box';
import Stack from '../components/tech_stack';
import { GraphQLClient, gql } from 'graphql-request';

import Posts from './blog';
import React from 'react';

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});

const graphcms = new GraphQLClient('https://api-us-west-2.hygraph.com/v2/cl91ni7kp27mn01t62jwk4l4y/master');

const QUERY = gql`
  {
    homes {
      id
      title
      description {
        html
      }
      about {
        html
      }
      author {
        name
      }
      more {
        html
      }
      studies {
        html
      }
      stack {
        html
      }
    }
  }
`;

export async function getStaticProps() {
  const { homes } = await graphcms.request(QUERY);
  return {
    props: {
      homes,
    },
    revalidate: 30,
  };
}

const Home = ({ homes }) => (
  <Layout>
    <Box mt={8} p="6" bg="blackAlpha.50" borderRadius="xl">
      {homes.map((home) => (
        <React.Fragment key={home.id}>
          <Box py="12" px="4" textAlign="center">
            <Flex gap="6" flexWrap="wrap" justifyContent="center">
              <Box>
                <Box w="120px" h="120px" display="inline-block" borderRadius="full" overflow="hidden">
                  <ProfileImage src="/images/vicprat.jpg" alt="Profile image" borderRadius="full" width="150px" height="150px" />
                </Box>
              </Box>

              <Box px={8} alignSelf="center">
                <AnimatedGradientText fontSize="2xl"> {home.author.name}</AnimatedGradientText>
                <Text fontWeight="bold" fontSize="2xl">
                  {home.title}
                </Text>
              </Box>
            </Flex>
            <Box flexGrow={1}>
              <Paragraph>
                <div dangerouslySetInnerHTML={{ __html: home.description.html }}></div>
              </Paragraph>

              <ContactBtns fontSize="2xl" colorScheme="gray" />
              <BgBox>¡Hagamos tus proyectos realidad!</BgBox>
            </Box>
          </Box>

          <Divider my={6} />

          <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
              Sobre mi
            </Heading>
            <Paragraph>
              <div dangerouslySetInnerHTML={{ __html: home.about.html }}></div>
            </Paragraph>

            <Heading as="h3" variant="section-title">
              Formación
            </Heading>
            <Paragraph>
              <div dangerouslySetInnerHTML={{ __html: home.studies.html }}></div>
            </Paragraph>
          </Section>
          <Stack />

          <Section delay={0.2}>
            <Paragraph>
              <div dangerouslySetInnerHTML={{ __html: home.stack.html }}></div>
            </Paragraph>
            <Btn href="/proyects">Proyectos</Btn>
          </Section>

          <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
              Más sobre mi
            </Heading>
            <Paragraph>
              <div dangerouslySetInnerHTML={{ __html: home.more.html }}></div>
            </Paragraph>
          </Section>

          <Divider my={6}></Divider>
        </React.Fragment>
      ))}
      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Blog
        </Heading>
        {/* <Posts /> */}
        <Btn href="/blog">Posts Recientes</Btn>
      </Section>
    </Box>
  </Layout>
);

export default Home;
