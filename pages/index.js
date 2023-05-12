'use client'
import { Link, Box, Text, Heading, Card, CardHeader, CardBody, Stack, StackDivider} from '@chakra-ui/react'
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import Comments from '../components/comment';
import Weather from '../components/weather';

//For Static Rendering, use getStaticProps. Use getServerSideProps to do server-side rendering
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Box as="head">
        <title>{siteTitle}</title>
      </Box>
      <Box as="section" p='20px'>
        <Box as="article" p='20px' display='flex' justifyContent='center' >
          <Weather/>
        </Box>
        <Box as='div' p='20px'>
        <Heading>Welcome</Heading>
        <Text fontFamily='sans-serif'>Hi, I'm Daya and welcome to my blogsite.</Text>
        </Box>
      </Box>

      <Box as='div' p='20px'>
      <Card>
        <CardHeader>
          <Heading>Blog</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            
            {allPostsData.map(({ id, date, title }) => (
            <Box key={id}>
              <Heading size='xs' textTransform='uppercase'>
                <Link href={`/posts/${id}`} color='blue.500' _hover={{ color: 'blue.700' }}>{title}</Link>
              </Heading>
              <Text p='2' fontSize='sm'>
                  <Date dateString={date} />
              </Text>
            </Box>
            ))}
            
          </Stack>
        </CardBody>
      </Card>
      </Box>
      
      <Box as="section" p='20px'>
        <Heading as="h1">Comments</Heading>
        <Comments />
      </Box>
    </Layout>
  );
}