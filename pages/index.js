import NextLink from 'next/link';
import { Text, Link, Container, Heading, Box, SimpleGrid, Button, List, ListItem, useColorModeValue, chakra } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Paragraph from '../components/paragraph';
import AnimatedGradientText from '../components/animated-gradient-text';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem } from '../components/grid-item';
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoHeartSharp, IoMail, IoLogoLinkedin } from 'react-icons/io5';
import thumbReact from '../public/images/projects/reactjs.jpg';
import Image from 'next/image';

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link p={2} bg={active ? 'grassTeal' : undefined} color={active ? '#202023' : inactiveColor} target={target} {...props}>
        {children}
      </Link>
    </NextLink>
  );
};

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});

const Home = () => (
  <Layout>
    <Container maxW="4xl" mt={8}>
      <Box height="70vh" display={{ md: 'flex' }} alignItems="center" justifyContent="center">
        <Box m={6} flexGrow={1}>
          <Text fontWeight="bold" fontSize="2xl" mb={6}>
            ⚛ Hey! I&apos;m Victor Prado Trujillo
          </Text>
          <AnimatedGradientText>Frontend Developer</AnimatedGradientText>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
          <Box w="200px" h="200px" display="inline-block" borderRadius="full" overflow="hidden">
            <ProfileImage src="/images/vicprat.jpg" alt="Profile image" borderRadius="full" width="200px" height="200px" />
          </Box>
          <Box borderRadius="lg" m={(8, 6)} p={3} textAlign="center" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} css={{ backdropFilter: 'blur(10px)' }}>
            JavaScript | React | Next | SQL | NoSQL | RestAPI | GraphQL.
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          I&apos;m a two-year experienced Freelance Frontend Developer on the React.js ecosystem and its Frameworks. also use interface design software. Personally, I enjoy developing intuitive
          digital products for users.
          <br></br> <br></br>
          Actually, I keep learning about technologies that will lead me to be a Full Stack Web Developer. I&apos;m continuously updating myself as a self-thought student to be relevant in the modern
          world and be able to work on teams.
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
        <Paragraph>Ocasional photographer, rock climber, nature and dog lover.</Paragraph>
      </Section>

      <Section>
        <Heading as="h3" variant="section-title">
          Blog
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <LinkItem href="/blog/react-path">
            <GridItem title="My React js learning path and expirience" thumbnail={thumbReact}>
              How to start on the web develpment journey.
            </GridItem>
          </LinkItem>
        </SimpleGrid>
        <Box align="center" my={4}>
          <NextLink href="/blog" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          ☕ Let&apos;s grab a coffee together.
        </Heading>

        <Box maxW="container.md" p={8}>
          <List>
            <ListItem>
              <Link href="mailto:hey@vicprat.dev" target="_blank">
                <Button variant="ghost" colorScheme="blue" leftIcon={<IoMail />}>
                  hey@vicprat.dev
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://www.linkedin.com/in/vicprat/" target="_blank">
                <Button variant="ghost" colorScheme="blue" leftIcon={<IoLogoLinkedin />}>
                  /in/vicprat
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://github.com/vicprat" target="_blank">
                <Button variant="ghost" colorScheme="blue" leftIcon={<IoLogoGithub />}>
                  @vicprat
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
              <Link href="https://twitter.com/vic_prat" target="_blank">
                <Button variant="ghost" colorScheme="blue" leftIcon={<IoLogoTwitter />}>
                  @vic_prat
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
      </Section>
    </Container>
  </Layout>
);

export default Home;
export { getServerSideProps } from '../components/chakra';
