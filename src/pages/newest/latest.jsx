import Link from 'next/link'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'

export default function Latest() {
  return (
    <>
      <title>今週公開の映画一覧</title>
      <main className="h-screen bg-green-100">
        <Header></Header>
        <div>
          <h1 className="text-5xl pb-5 text-red-700 ml-20">今週公開の映画一覧</h1>
          <h2 className="text-2xl mt-20 ml-40 text-indigo-700">
            <Link href="https://www.conan-movie.jp">・名探偵コナン(公開中)</Link></h2>
          <h3 className="text-2xl mt-20 ml-40 text-indigo-700">
            <Link href="https://www.conan-movie.jp">・約束の宇宙(公開中)</Link></h3>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

