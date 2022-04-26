import Head from 'next/head'
import Container, { siteTitle } from '../components/Container'

const Home = () => {
  return (
    <div>
    <Container>
      <Head>
        <title>{siteTitle}</title>
      </Head>
       <div className='flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16"'>
       <h1 className="text-3xl font-bold underline">
      Hello World!
    </h1>
      </div> 
    </Container>
    </div>
  )
}

export default Home
