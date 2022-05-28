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
        <div className='flex flex-col items-start border-gray-200 dark:border-gray-700 mx-auto pb-16"'>
          <section className='mb-8'>
            <div className='text-6xl mb-4 md:text-8xl font-bold underline'>
              <h1 className='mb-12'>
                Eric Whitehead
              </h1>
            </div>
            <p className='mt-12 text-sans'>
              Hi, I'm Eric, from San Jose, CA, and I'm looking for a job as a front-end designer. You can read more about me here, or contact me directly with an email. I like to write; here is the first iteration of my blog.
            </p>
          </section>

          <section className='text-sans'>
            <h2 className='text-lg font-bold'>Recent Posts</h2>
            <ul className='mt-2 w-full'>
              {allPostsData.map(({ id, date, title }) => (
                <li className='mb-5 border-2 border-solid border-red-500 rounded-md -px-6 p-4 ' key={id}>
                  <Link href={'/blog/'+id}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className='color-gray'>
                    <Date dateString={date} />
                  </small>
                </li>
              )).slice(0,3)}
            </ul>
          </section>

          <section className='text-sans mt-8'>
            <h2 className='text-lg font-bold'>Projects</h2>
            <ul className='mt-2'>
              Stuff
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