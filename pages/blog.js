import { Container, Heading, SimpleGrid, Link, useColorModeValue, Text } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem } from '../components/grid-item';
import NextLink from 'next/link';
import { GraphQLClient, gql } from 'graphql-request';
import React from 'react';

const graphcms = new GraphQLClient('https://api-us-west-2.hygraph.com/v2/cl91ni7kp27mn01t62jwk4l4y/master');

const QUERY = gql`
  {
    blogPosts {
      id
      title
      slug
      coverPhoto {
        url
      }
      description {
        text
      }
      datePublished
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

const Posts = ({ blogPosts }) => (
  <Layout title="Blog">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Todos los Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={4}>
          {blogPosts.map((blogPost) => (
            <React.Fragment key={blogPost.id}>
              <LinkItem href={`/blog/${blogPost.slug}`}>
                <GridItem title={blogPost.title} thumbnail={blogPost.coverPhoto.url}>
                  <Text>{blogPost.description.text}</Text>
                  {blogPost.datePublished}
                </GridItem>
              </LinkItem>
            </React.Fragment>
          ))}
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Posts;
