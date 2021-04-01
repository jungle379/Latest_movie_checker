import Head from 'next/head'
import Link from 'next/link'
import { getPostData } from '../../lib/posts'

export default function FirstPost() {
  return (
    <>
    <Head>
      <title>最新情報</title>
    </Head>
    <article>
      <div dangerouslySetInnerHTML={{ __html: getPostData.contentHtml }} />
    </article>
    </>
  )
}
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}