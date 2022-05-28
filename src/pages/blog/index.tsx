import Head from 'next/head';
import Container, { siteTitle } from '../../components/Container';
import { getSortedPostsData } from '../../lib/posts';
import Link from 'next/link';
import Date from '../../lib/date';
import { GetStaticProps } from 'next';


const Index = ({ allPostsData }: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) => {
  return (
    <div>
      <Container>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div className='flex flex-col items-start border-gray-200 dark:border-gray-700 mx-auto pb-16"'>
            <h2 className='text-lg font-bold'>All Posts</h2>
            <ul className='mt-2 w-full'>
              {allPostsData.map(({ id, date, title }) => (
                <li className='mb-5 rounded-md w-full' key={id}>
                  <Link href={'/blog/'+id}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className='color-gray'>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul></div>
      </Container>
    </div>
  )
};

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}