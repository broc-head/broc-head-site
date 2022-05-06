import Head from 'next/head';
import Container, { siteTitle } from '../components/Container';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../lib/date';
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
        <div className='flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16"'>
          <section className='mb-8'>
            <div className='text-6xl mb-4 md:text-8xl font-bold underline'>
              <h1 className='mb-4'>
                Eric Whitehead
              </h1>
            </div>
            
            <p>Hi, I'm Eric, currently a grocer, looking to join a web development team, for what would be my first job in the dev space.</p>
            
          </section>

          <section className=''>
            <h2 className='text-lg'>Blog Posts</h2>
            <ul className='list-none'>
              {allPostsData.map(({ id, date, title }) => (
                <li className='mb-5' key={id}>
                  <Link href={'/blog/'+id}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className='color-gray'>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </section>
        </div>
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