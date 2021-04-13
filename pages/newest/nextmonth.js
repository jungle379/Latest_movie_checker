import Head from 'next/head'
import Link from 'next/link'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'

export default function FirstPost() {
  return (
    <>
    <Head>
      <title>次月公開予定</title>
    </Head>
    <main className="h-screen bg-green-100">
      <Header></Header>
      <h1 className="text-5xl pb-5 text-red-700 ml-20">今週公開の映画一覧</h1>
      {allPostsData.map(({id, title}) => {
        return (
          <li className="text-3xl text-blue-600 flex" key={id}>
          <Link href={`/posts/${id}`}>
              <a className="mt-10 ml-20 pt-10">{title}</a>
            </Link>
            </li>
        )
      })}
      </main>
    <Footer></Footer>
    </>
  )
}