import Link from 'next/link'
import { Footer } from '../components/footer'
import { Header } from '../components/header'


export default function Home() {
  return (
    <div className="">
      <title>トップページ</title>
      <link rel="icon" href="/favicon.ico" />
      <main className="h-full sm:bg-green-100">
        <Header></Header>
        <div className="mt-36 flex h-10">
          <Link href="/newest/latest">
            <h1 className="bg-center sm:text-2xl text-blue-600 justify-between ml-20 mr-10">今週公開の映画</h1>
          </Link>
          <Link href="/archive/[page]" as="/archive/1">
            <h3 className="bg-center sm:text-2xl text-blue-600 justify-between ml-40 mr-10">今月公開予定の映画</h3>
          </Link>
        </div>
        <div className="mt-60">
          <Link href="/near/map">
            <h4 className="text-red-500 underline sm:text-2xl ml-20 mt-20">現在地から近くの映画館を探す</h4>
          </Link>
        </div>
        <h5 className="text-0.5xl text-yellow-800 mt-40 ml-20">updated in 2021/04/15</h5>
        <Footer></Footer>
      </main>
    </div>
  )
}
