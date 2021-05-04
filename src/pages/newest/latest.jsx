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
          <h1 className="sm:text-5xl pb-5 text-red-700 ml-10 sm:ml-20">今週公開の映画一覧</h1>
          <h2 className="sm:text-2xl mt-20 ml-10 sm:ml-40 text-indigo-500">
            <Link href="https://www.conan-movie.jp">・名探偵コナン(公開中)</Link></h2>
          <h3 className="sm:text-2xl mt-20 ml-10 sm:ml-40 text-indigo-500">
            <Link href="http://yakusokunosora.com">・約束の宇宙(公開中)</Link></h3>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

