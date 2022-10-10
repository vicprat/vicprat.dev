import { Box, Text, Grid, GridItem, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { Global } from '@emotion/react';

const CardItem = ({ title, author, coverPhoto, datePublished, slug }) => {
  return (
    <>
      <Grid columns={[1, 2, 2]} gap={6}>
        <Box p={6} cursor="pointer" textAlign="center">
          <Link href={`/posts/${slug}`} passHref scroll={false}>
            <Box position="relative" w="100%" h="20vh">
              <Image layout="fill" src={coverPhoto.url} alt={title} objectFit="cover" loading="lazy" className="grid-item-thumbnail" />
            </Box>
          </Link>

          <Box p={6}>
            <Link href={`/posts/${slug}`} passHref scroll={false}>
              <Text fontWeight="semibold">{title}</Text>
            </Link>
            <Box>
              <Text>{author.name}</Text>
              <Text fontSize="sm" fontWeight="thin">
                {datePublished}
              </Text>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default CardItem;

export const GridItemStyle = () => (
  <Global
    styles={`
        .grid-item-thumbnail {
          border-radius: 12px;
        }
      `}
  />
);
