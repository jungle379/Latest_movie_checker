import Link from 'next/link'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'

export default function News1() {
  return (
    <>
      <title>4月の情報を更新しました</title>
      <main className="h-screen sm:bg-green-100">
        <Header></Header>
        <div>
          <h1 className="sm:text-2xl pb-5 text-red-700 mt-20 ml-10 sm:ml-20">更新済みの最新情報</h1>
          ・情報を入れる
        </div>
        <Footer></Footer>
      </main>
    </>
  )
}

