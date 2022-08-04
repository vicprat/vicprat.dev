import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { ProjectGridItem } from '../components/grid-item';

import thumbPortfolio from '../public/images/projects/portfolio_eyecatch.png';

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={8}>
        <Section>
          <ProjectGridItem id="portfolio" title="JAMStack Portfolio" thumbnail={thumbPortfolio}>
            A web app built with Next.js, Contentful CMS and GraphQl with smooth animations and clean design.
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Projects;
export { getServerSideProps } from '../components/chakra';
