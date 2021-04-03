//import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'


export default function Post() {
  return (
      <Head>
        <title>最新情報</title>
      </Head>
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
//   const postData = await getPostData(params.id)
//   return {
//     props: {
//       postData
//     }
//   }
// }