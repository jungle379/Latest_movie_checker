import Head from 'next/head'
import Link from 'next/link'
//import BreadCrumbs from '../../components/breadcrumbs'
import { Footer } from '../components/footer'
import { Header } from '../components/header'

export default function Home() {
  return (
    <div className="h-80">
      <Head>
        <title>トップページ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full bg-green-100 min-w-min">
        <Header></Header>
        {/* <BreadCrumbs></BreadCrumbs> */}
        <div className="mt-36 flex h-10">
          <Link href="/newest/latest">
            <h1 className="bg-center text-2xl text-blue-300 justify-between ml-20 mr-10">最新の映画</h1>
          </Link>
          <Link href="/newest/nextweek">
            <h2 className="bg-center text-2xl text-blue-300 justify-between ml-20 mr-10">来週公開予定の映画</h2>
          </Link>
          <Link href="/newest/nextmonth">
            <h3 className="bg-center text-2xl text-blue-300 justify-between ml-20 mr-10">今月公開予定の映画</h3>
          </Link>
        </div>
          <Link href="/near/map">
            <h4 className="text-red-500 underline text-2xl ml-20 mt-20">現在地から近くの映画館を探す</h4>
          </Link>
        <h5 className="text-0.5xl text-yellow-800 mt-10 ml-20">uploaded in 2021/04/15</h5>
      </main>
      <Footer></Footer>
    </div>
  )
}
