import { Text, Container, Heading, Box, Divider, useColorModeValue, chakra } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Paragraph from '../components/paragraph';
import AnimatedGradientText from '../components/animated-gradient-text';
import { BioSection, BioYear } from '../components/bio';
import Section from '../components/section';
import Image from 'next/image';
import ContactBtns from '../components/contact-info';
import Card from '../components/card';
import Btn from '../components/button';

import { GraphQLClient, gql } from 'graphql-request';
import CardItem from '../components/cardItem';

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});

const graphcms = new GraphQLClient('https://api-us-west-2.hygraph.com/v2/cl91ni7kp27mn01t62jwk4l4y/master');

const QUERY = gql`
  {
    blogPosts {
      id
      title
      datePublished
      slug
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        publishedAt
        createdBy {
          id
        }
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { blogPosts } = await graphcms.request(QUERY);
  return {
    props: {
      blogPosts,
    },
    revalidate: 30,
  };
}
const Home = ({ blogPosts }) => {
  return (
    <Layout>
      <Container maxW="4xl" mt={8}>
        <Box p="auto, 0" textAlign="center">
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Box w="150px" h="150px" display="inline-block" borderRadius="full" overflow="hidden">
              <ProfileImage src="/images/vicprat.jpg" alt="Profile image" borderRadius="full" width="200px" height="200px" />
            </Box>
          </Box>

          <AnimatedGradientText> Victor Prado Trujillo</AnimatedGradientText>
          <Box flexGrow={1}>
            <Text fontWeight="bold" fontSize="2xl">
              Desarrollador Frontend
            </Text>
            <Paragraph>
              Soy desarrollador con 2 años de experiencia trabajando con tecnologías web. Me considero una persona que se enfoca en resolver problemas con soluciones únicas y personalizadas, al crear
              webs a la medida de cada proyecto.
            </Paragraph>

            <ContactBtns />

            <Box borderRadius="lg" mt={4} mb={4} p={4} textAlign="center" bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')} css={{ backdropFilter: 'blur(10px)' }}>
              <Text>¡Hagamos de tus proyectos una realidad!</Text>
            </Box>
          </Box>
        </Box>

        <Divider my={6} />

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            I&apos;m a two-year experienced Freelance Frontend Developer on the React.js ecosystem and its Frameworks. also use interface design software. Personally, I enjoy developing intuitive
            digital products for users.
            <br></br> <br></br>
            Actually, I keep learning about technologies that will lead me to be a Full Stack Web Developer. I&apos;m continuously updating myself as a self-thought student to be relevant in the
            modern world and be able to work on teams.
          </Paragraph>

          <Heading as="h3" variant="section-title">
            Philosophy
          </Heading>
          <Paragraph>Create and deliver amazing expiriences with intuitive solutions on the web.</Paragraph>

          <Btn href="/proyects">Proyectos</Btn>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            What I do
          </Heading>
          <BioSection>
            <BioYear>Frontend Development</BioYear>
          </BioSection>
          I use JavaScript to interact with users and reach their happines
          <BioSection>
            <BioYear>UX/UI Design</BioYear>
          </BioSection>
          I design fluid and beautiful interfaces for web. Great interfaces and experiences wins customers trust and helps you do your business well. I make sure your design is up to that standard.
        </Section>

        <Section>
          <Heading as="h3" variant="section-title">
            Blog
          </Heading>

          {blogPosts.map((post) => (
            <CardItem title={post.title} author={post.author} coverPhoto={post.coverPhoto} key={post.id} datePublished={post.datePublished} slug={post.slug} />
          ))}

          <Btn href="/blog">Posts recientes</Btn>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            More about me
          </Heading>
          <Paragraph>Ocasional photographer, rock climber, nature and dog lover.</Paragraph>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
