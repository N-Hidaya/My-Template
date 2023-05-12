import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

import Date from '../../components/date';
import { Box, Heading, Text } from '@chakra-ui/react';



export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
    return (
      <Layout>
        <Box as='Head'>
        <title>{postData.title}</title>
        </Box>
        <Box as='article' p='10px' >
          <Heading as='h1' fontFamily='serif'>{postData.title}</Heading>
          <Box as='div'>
            <Text pb='20px'>
            <Date dateString={postData.date} />
            </Text>
          </Box>
          <Box fontFamily='serif' suppressHydrationWarning={true} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Box>
      </Layout>
    )
  }