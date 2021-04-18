import Head from 'next/head'
import Link from 'next/link'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { getSortedPostsData } from '../../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>今週公開の映画一覧</title>
      </Head>
      <main className="h-screen bg-green-100">
      <Header></Header>
      <div className="text-5xl pb-5 text-red-700 ml-20">今週公開の映画一覧</div>
      {allPostsData.map(({id, title}) => {
        return (
          <li className="text-3xl text-blue-600 flex" key={id}>
          <Link href={`/posts/${id}`}>
              <a className="ml-20 pt-10">{title}</a>
            </Link>
            </li>
        )
      })}
      </main>
      <Footer></Footer>
      </>
  )
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}