import { Container, Badge, Link, List, ListItem, AspectRatio } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import { Heading } from '@chakra-ui/react';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import Section from '../../components/section';

const Project = () => (
  <Layout title="JAMStack Portfolio">
    <Container maxW="4xl">
      <Title>
        JAMStack <Badge>2022-</Badge>
      </Title>
      <P> A web app built with Next.js, Contentful CMS and GraphQl with smooth animations and clean design.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://vicprat.dev/">
            https://www.vicprat.dev/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, GraphQl, HeadlessCMS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/portfolio_eyecatch.png" alt="porfolio" />
      <WorkImage src="/images/projects/portfolio_02.png" alt="porfolio" />
      <Section>
        <Heading as="h3" variant="section-title">
          Relax and keep coding
        </Heading>
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/931p_QE3PYg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </AspectRatio>
      </Section>
    </Container>
  </Layout>
);

export default Project;
export { getServerSideProps } from '../../components/chakra';
