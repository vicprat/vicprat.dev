import { Text, Container, Heading, Box, Divider, useColorModeValue, chakra } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Paragraph from '../components/paragraph';
import AnimatedGradientText from '../components/animated-gradient-text';
import Section from '../components/section';
import Image from 'next/image';
import ContactBtns from '../components/contact-info';
import Btn from '../components/button';
import BgBox from '../components/bg-box';
import { GraphQLClient, gql } from 'graphql-request';

// import Card from '../components/card';
// import CardItem from '../components/cardItem';
// import { BioSection, BioYear } from '../components/bio';

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
        raw
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
    <Container maxW="4xl" mt={8}>
      {homes.map((home) => (
        <>
          <Box p="auto, 0" textAlign="center">
            <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
              <Box w="150px" h="150px" display="inline-block" borderRadius="full" overflow="hidden">
                <ProfileImage src="/images/vicprat.jpg" alt="Profile image" borderRadius="full" width="200px" height="200px" />
              </Box>
            </Box>

            <AnimatedGradientText fontSize="2xl"> {home.author.name}</AnimatedGradientText>
            <Box flexGrow={1}>
              <Text fontWeight="bold" fontSize="2xl">
                {home.title}
              </Text>
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

          <Section delay={0.2}>
            <AnimatedGradientText fontSize="2xl">Mi stack</AnimatedGradientText>
            <Paragraph>
              <div dangerouslySetInnerHTML={{ __html: home.stack.html }}></div>
            </Paragraph>
            <Btn href="/proyects">Proyectos</Btn>
          </Section>

          <Divider my={6}></Divider>

          <Section>
            <Heading as="h3" variant="section-title">
              Blog
            </Heading>

            <Btn href="/blog">Posts recientes</Btn>
          </Section>

          <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
              Más sobre mi
            </Heading>
            <Paragraph>
              <div dangerouslySetInnerHTML={{ __html: home.more.html }}></div>
            </Paragraph>
          </Section>
        </>
      ))}
    </Container>
  </Layout>
);

export default Home;
