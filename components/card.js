import { SimpleGrid, Link, useColorModeValue, Text, Box } from '@chakra-ui/react';
import { GridItem } from './grid-item';
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

const Card = ({ title, author, coverPhoto, datePublished, slug }) => {
  return (
    <>
      <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <LinkItem href={`/posts/${slug}`}>
          <GridItem title={title} thumbnail={coverPhoto.url}>
            <Box textAlign="left" p={6}>
              <Text>{author.name}</Text>
              <Text>{datePublished}</Text>
            </Box>
          </GridItem>
        </LinkItem>
      </SimpleGrid>
    </>
  );
};

export default Card;
