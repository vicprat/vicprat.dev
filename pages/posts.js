import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem } from '../components/grid-item';

import thumbPortfolio from '../public/images/contents/youtube-how-to-build-portfolio.jpg';

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        All Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem title="How to build a portfolio website" thumbnail={thumbPortfolio} href="https://www.youtube.com/watch?v=bSMZgXzC9AA" />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Posts;
export { getServerSideProps } from '../components/chakra';
