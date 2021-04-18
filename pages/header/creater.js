import Head from 'next/head'
import Link from 'next/link'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'

export default function Creater() {
  return (
    <>
    <Head>
      <title>作成者情報</title>
    </Head>
    <main className="h-screen bg-green-100">
      <Header></Header>
    <div className="text-3xl ml-20 text-red-500">作成者について</div>
    <div className="text-2xl text-blue-500 ml-20 mt-20">
    <Link href="https://twitter.com/hirokimorino">・twitter</Link>
    </div>
    <div className="text-2xl text-blue-500 ml-20 mt-20">
    <Link href="/header/beginner">・facebook</Link>
    </div>
    </main>
    <Footer></Footer>
    </>
  )
}