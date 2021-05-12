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
        <div className="mt-36 flex h-20 justify-around">
          <Link href="/newest/latest">
            <h1 className="bg-center bg-gray-200 sm:text-2xl pt-5 pl-5 pr-5 hover:text-red-500 border-solid sm:border-4 sm:border-gray-400">今週公開の映画</h1>
          </Link>
          <Link href="/archive/[page]" as="/archive/1">
            <h2 className="bg-center bg-gray-200 sm:text-2xl pt-5 pl-5 pr-5 hover:text-red-500 border-solid sm:border-4 sm:border-gray-400">今月公開予定の映画</h2>
          </Link>
          <Link href="/near/map">
            <h3 className="bg-center bg-gray-200 sm:text-2xl pt-5 pl-5 pr-5 hover:text-red-500 border-solid sm:border-4 sm:border-gray-400">現在地から近くの映画館を探す</h3>
          </Link>
        </div>
        <div>
          <h4 className="text-0.5xl text-yellow-800 float-right mt-40 sm:mt-0.5 mr-20 border-red-600 ">updated in 2021/04/15</h4>
        </div>
        <div className="flex justify-around mt-20 h-60 border-dashed border-8 border-red-400 mr-40 ml-40">
          <div className="text-2xl mt-10">最新情報
          <h5 className="mt-10 text-xl">・4月の情報を更新しました。</h5>
          </div>
          {/* <Link href="/">・4月の情報を更新しました。</Link> */}
          <div className="text-2xl mt-10">メンテ情報
          <h6 className="text-xl mt-10">・特にありません</h6>
          </div>
        </div>
        {/* <div>
          <img className="" src="/images/640.jpg" />
        </div> */}
        <Footer></Footer>
      </main>
    </>
  )
}
