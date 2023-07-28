import { getAllPostIds, getPostData } from '../../lib/posts';

import Date from '../../components/date';


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
      <div>
        <div>
        <title>{postData.title}</title>
        </div>
        <div className='p-10'>
          <h1>{postData.title}</h1>
          <div>
            <p pb='20px'>
            <Date dateString={postData.date} />
            </p>
          </div>
          <div>{postData.contentHtml }</div>
        </div>
      </div>
    )
  }