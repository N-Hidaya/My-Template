import { getAllPostIds, getPostData } from '../../lib/posts';

import Date from '../../components/date';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/bloglayout'
import { Button } from '@material-tailwind/react';
import Comments from '../../components/comment';


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
        <div  className='max-w-[1240px] mx-auto h-auto shadow-xl shadow-white rounded-xl lg:p-4 hover:bg-slate-100'>
        <Head>
          <title>{postData.title}</title>
          <meta name='description' content='Enter summary of the blog here'/>
        </Head>
        <h1 className='text-2xl text-[#402D29] text-center'>{postData.title}</h1>
        
        <div>
            <p className='pb-4 text-center'>
            <Date dateString={postData.date} />
            </p>
        </div>
        
        <article className='prose lg:prose-xl mx-auto'>
          <div className='px-10 py-4' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
        
        <Link href='/Blog' className='px-10 py-5'><button className=' text-center rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>Back to Blog Posts</button></Link>
        <Comments/>

        </div>

        
      </Layout>
    )
  }