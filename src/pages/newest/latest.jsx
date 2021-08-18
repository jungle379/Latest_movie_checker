import Link from 'next/link'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'

export default function Latest() {
  return (
    <>
      <title>今週公開の映画一覧</title>
      <main className="h-screen sm:bg-green-100">
        <Header></Header>
        <div>
          <h1 className="sm:text-5xl pb-5 text-red-700 mt-20 ml-10 sm:ml-20">今週公開の映画一覧</h1>
          <h2 className="sm:text-2xl mt-20 ml-10 sm:ml-40 text-indigo-500">
            <Link href="https://wildspeed-official.jp">・ワイルドスピード/ジェットブレイク(公開中)</Link>
          </h2>
          <h3 className="sm:text-2xl mt-20 ml-10 sm:ml-40 text-indigo-500">
            <Link href="https://anime.fate-go.jp/ep7-tv/">・Fate/GrandOrder(公開中)</Link>
          </h3>
        </div>
        <Footer />
      </main>
    </>
  )
}

