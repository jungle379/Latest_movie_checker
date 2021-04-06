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
      <main className="h-screen bg-green-100">
      <Header></Header>
      <h1 className="text-5xl pb-5 text-red-700 ml-20">今週公開の映画一覧</h1>
      <Link href={'/posts/${id}'}>
        <a className="">title</a>
      </Link>
      </main>
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