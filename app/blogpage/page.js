'use client'

import Layout from '../../components/bloglayout';
import {allBlogs} from "contentlayer/generated";
import BlogDesign from '../../components/BlogDesign';
import FeaturedPosts from '../../components/FeaturedPosts';
import RecentPosts from '../../components/RecentPosts';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { PayPalScriptProvider } from '@paypal/react-paypal-js'



export default function Blog() {
    return <main className='flex flex-col items-center justify-center pt-20'>
          <BlogDesign blogs={allBlogs}/>
          <FeaturedPosts blogs={allBlogs} />
          <RecentPosts blogs={allBlogs} />
        </main>
       
       

        
    
}

  /*
  <ScreenThree blog={blog} />
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