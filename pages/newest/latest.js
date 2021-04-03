import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Link from 'next/link'


export default function Post() {
  return (
    <>
      <Head>
        <title>最新情報</title>
      </Head>
      <Link href={'/posts/${id}'}>
        <a>title</a>
      </Link>
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

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}