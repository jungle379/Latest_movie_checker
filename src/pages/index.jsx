import Link from 'next/link'
import { Footer } from '../components/footer'
import { Header } from '../components/header'


export default function Home() {
  return (
    <>
      <title>トップページ</title>
      <link rel="icon" href="/favicon.ico" />
      <main className="h-screen sm:bg-green-100">
        <Header></Header>
        <div className="mt-36 flex h-16 sm:bg-gray-300">
          <Link href="/newest/latest">
            <h1 className="bg-center sm:text-2xl pt-5 hover:text-red-500 justify-between ml-20 mr-10 border-solid border-4 border-red-400">今週公開の映画</h1>
          </Link>
          <Link href="/archive/[page]" as="/archive/1">
            <h2 className="bg-center sm:text-2xl pt-5 hover:text-red-500 justify-between ml-20 mr-10 border-solid border-4 border-red-400">今月公開予定の映画</h2>
          </Link>
          {/* </div>
        <div className="sm:mt-40"> */}
          <Link href="/near/map">
            <h3 className="bg-center sm:text-2xl pt-5 hover:text-red-500 justify-between ml-20 mr-10 border-solid border-4 border-red-400">現在地から近くの映画館を探す</h3>
          </Link>
        </div>
        <div>
          <h4 className="text-0.5xl text-yellow-800 float-right mt-40 sm:mt-0.5 mr-20">updated in 2021/04/15</h4>
        </div>
        <Footer></Footer>
      </main>
    </>
  )
}
