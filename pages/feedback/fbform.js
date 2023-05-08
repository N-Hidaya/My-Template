//create feedback form with several kinds of form fields
import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';


export default function Feedback({ feedback }) {
    return (
      <Layout>
        <Head>
        Feedback Form
        </Head>
        <article>
        <h1 className={utilStyles.headingXl}>Fill up our feedback form!</h1>
        <div className={utilStyles.lightText}>
          Today's date
        </div>
        </article>
      </Layout>
    )
  }