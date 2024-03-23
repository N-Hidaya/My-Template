import Link from 'next/link';
import Layout from '../components/bloglayout';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import Comments from '../components/comment';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData,
      },
    };
}

export default function Blog({allPostsData}) {
    return (
        <Layout>
        <section className='p-2 text-center'>
            <h2 className="py-4 text-[#402D29]">Daya's Blog Posts</h2>
            <ul className='list-outside grid md:grid-cols-3 lg:grid-cols-3 gap-8 px-5'>
            {allPostsData.map(({ id, date, title }) => (
                <li className='list-item p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white' key={id}>
                    <Link href={`/posts/${id}`} className='text-lg font-bold'>{title}</Link>
                    <br />
                    <small className='font-light'>
                        <Date dateString={date} />
                    </small>
                </li>
            ))}
            </ul>
        </section>
       
        </Layout>
        
    )
}

  /*
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
*/