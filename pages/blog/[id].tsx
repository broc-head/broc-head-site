import Head from 'next/head'
import Container from "../../components/Container"
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../lib/date'
import { GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image'

export default function Post({
    postData 
}: {
    postData: {
        title: string
        date: string
        contentHtml: string
    }
}) {
    return (
        <Container>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <div className='pt-6'>
                    <article>
                        <h1 className='text-6xl leading-16 tracking-tighter'>{postData.title}</h1>
                            <div className='flex items-center color-gray'>
                                <Date dateString={postData.date} />
                            </div>
                            <div className='text-left list-disc' dangerouslySetInnerHTML={{ __html: postData.contentHtml }}  />
                    </article>
                
            </div>
        </Container>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id as string)
    return {
      props: {
        postData
      }
    }
  }