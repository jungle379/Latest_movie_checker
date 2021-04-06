import Head from 'next/head'
import Link from 'next/link'
import { Footer } from '../components/footer'
import { Header } from '../components/header'

export default function Home() {
  return (
    <div className="toppage">
      <Head>
        <title>トップページ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen bg-green-100">
        <Header></Header>
        <div className="flex h-10">
          <Link href="/newest/latest">
            <h1 className="bg-center text-2xl text-blue-300 justify-between ml-20 mr-10 underline">最新の映画</h1>
          </Link>
          <Link href="/newest/nextweek">
            <h2 className="bg-center text-2xl text-blue-300 justify-between ml-20 mr-10 underline">来週公開予定の映画</h2>
          </Link>
          <Link href="/newest/nextmonth">
            <h3 className="bg-center text-2xl text-blue-300 justify-between ml-20 mr-10 underline">今月公開予定の映画</h3>
          </Link>
        </div>
        <div className="">
          <Link href="/near/map">
            <h4 className="text-red-500 underline text-2xl ml-20 mt-40">現在地から近くの映画館</h4>
          </Link>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}
