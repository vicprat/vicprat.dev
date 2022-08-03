import NextLink from 'next/link';
import { Text, Link, Container, Heading, Box, SimpleGrid, Button, List, ListItem, useColorModeValue, chakra } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem } from '../components/grid-item';
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoHeartSharp } from 'react-icons/io5';
import thumbYouTube from '../public/images/links/youtube.png';
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png';
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
          <p>WebDev( JavaScript / ⚛ React / )</p>
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
          Victor is a selftought student at Platzi and many other resources around the web. Freelancer frontend developer who loves smooth animations and incredible UI. <br></br> <br></br> Started on
          the thech industry on 2019
        </Paragraph>

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
          Stack
        </Heading>
        <BioSection>
          <BioYear>JavaScript</BioYear>
          Born in Osaka (大阪), Japan.
        </BioSection>
        <BioSection>
          <BioYear>React</BioYear>
          Completed the Master&apos;s Program in the Graduate School of Information Science at Nara Institute of Science and Technology (奈良先端科学技術大学院大学情報科学研究科修士課程)
        </BioSection>
        <BioSection>
          <BioYear>Next.js</BioYear>
          Worked at Yahoo! Japan (ヤフー株式会社入社)
        </BioSection>
        <BioSection>
          <BioYear>Firebase</BioYear>
          Working as a freelancer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          More about me
        </Heading>
        <Paragraph>Ocasional paragrapher, rock climber, nature and dog lover,</Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Let's get a coffee ☕
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
          <GridItem href="https://www.youtube.com/devaslife" title="Dev as Life" thumbnail={thumbYouTube}>
            My YouTube channel (&gt;100k subs)
          </GridItem>
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
