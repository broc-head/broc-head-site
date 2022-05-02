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
          <section className=''>
            <div className='text-6xl md:text-8xl font-bold underline'>
              <h1 className='mb-4'>
                Eric Whitehead
              </h1>
            </div>
            
            <p>Hi, I'm Eric</p>
            <p>
              I'm looking for my first job in web development.{' '}
              <a href="https://www.linkedin.com/in/eric-j-whitehead/">Hire me</a>.
              Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering. The difference is in when it generates the HTML for a page.
Static Generation is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.
Server-side Rendering is the pre-rendering method that generates the HTML on each request.
Importantly, Next.js lets you choose which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
            </p>
          </section>

          <section className=''>
            <h2 className='text-lg'>Blog</h2>
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
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}