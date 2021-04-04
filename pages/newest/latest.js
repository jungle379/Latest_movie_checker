import Head from 'next/head'
import Link from 'next/link'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'


export default function Post({ allPostsData }) {
  return (
    <>
      <Head>
        <title>最新情報</title>
      </Head>
      <Header></Header>
      <Link href={'/posts/${id}'}>
        <a>title</a>
      </Link>
      <Footer></Footer>
      </>
  )
}

// export async function getStaticPaths() {
//   const paths = getAllPostIds()
//   return {
//     paths,
//     fallback: false
//   }
// }

// export async function getStaticProps({ params }) {
//   const allPostsData = getPostData(params.id)
//   return {
//     props: {
//       postData
//     }
//   }
// }