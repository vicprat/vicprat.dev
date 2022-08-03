import NextLink from 'next/link';
import { Text, Link, Container, Heading, Box, SimpleGrid, Button, List, ListItem, useColorModeValue, chakra } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem } from '../components/grid-item';
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoHeartSharp, IoCodeSlash } from 'react-icons/io5';
import thumbYouTube from '../public/images/links/youtube.png';
import thumbInkdrop from '../public/images/projects/inkdrop_eyecatch.png';
import Image from 'next/image';

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});

const Home = () => (
  <Layout>
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Text bgGradient={useColorModeValue('linear(to-r, #025091, #71c5ee)', 'linear(to-r, #fbc8d5, #9896f0, )')} bgClip="text" fontSize="5xl" fontWeight="extrabold">
            Victor Prado Trujillo
          </Text>
          <Text fontWeight="bold" fontSize="2xl">
            Frontend Developer
          </Text>
          <p>JavaScript/ TypeScript/ React/ Next/ SQL/ NoSQL/ RestAPI/ GraphQl.</p>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
          <Box borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" w="100px" h="100px" display="inline-block" borderRadius="full" overflow="hidden">
            <ProfileImage src="/images/vicprat.jpg" alt="Profile image" borderRadius="full" width="100%" height="100%" />
          </Box>
        </Box>
      </Box>

      <Box borderRadius="lg" m={6} p={3} textAlign="center" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} css={{ backdropFilter: 'blur(10px)' }}>
        Hello world! I build stuff for the web.
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          I was always curious about how things are build but I never realize that one day I would be building for many people. <br></br> <br></br>Victor is a selftought student at Platzi and many
          other resources around the web. Freelancer frontend developer who loves smooth animations and incredible UI. <br></br> <br></br> Started on the thech industry on 2019
        </Paragraph>

        <Heading as="h3" variant="section-title">
          Philosophy
        </Heading>
        <Paragraph>Create and deliver amazing expiriences with intuitive solutions on the web.</Paragraph>

        <Box align="center" my={4}>
          <NextLink href="/projects" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
              My portfolio
            </Button>
          </NextLink>
        </Box>
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

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          More about me
        </Heading>
        <Paragraph>Ocasional paragrapher, rock climber, nature and dog lover,</Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Grab a coffee together☕
        </Heading>

        <Box maxW="container.md" p={8}>
          <List>
            <ListItem>
              <Link href="https://github.com/vicprat" target="_blank">
                <Button variant="ghost" colorScheme="blue" leftIcon={<IoLogoGithub />}>
                  @vicprat
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/vic_prat" target="_blank">
                <Button variant="ghost" colorScheme="blue" leftIcon={<IoLogoTwitter />}>
                  @vic_prat
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://platzi.com/p/vicprat182/" target="_blank">
                <Button variant="ghost" colorScheme="blue" leftIcon={<IoHeartSharp />}>
                  Platzi
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/vic_prat" target="_blank">
                <Button variant="ghost" colorScheme="blue" leftIcon={<IoLogoInstagram />}>
                  @vic_prat
                </Button>
              </Link>
            </ListItem>
          </List>
        </Box>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem href="https://www.inkdrop.app/" title="Inkdrop" thumbnail={thumbInkdrop}>
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
);

export default Home;
export { getServerSideProps } from '../components/chakra';
