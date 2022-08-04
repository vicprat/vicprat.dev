import { Container, Heading, SimpleGrid, Link, useColorModeValue } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem } from '../components/grid-item';
import NextLink from 'next/link';

import thumbReact from '../public/images/projects/reactjs.jpg';

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

const Posts = () => (
  <Layout title="Blog">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        All Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <LinkItem href="/blog/react-path">
            <GridItem title="My React js learning path and expirience" thumbnail={thumbReact}>
              How to start on the web develpment journey.
            </GridItem>
          </LinkItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Posts;
export { getServerSideProps } from '../components/chakra';
