import Head from 'next/head'
import Link from 'next/link'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'

export default function FirstPost() {
  return (
    <>
    <Head>
      <title>作成者情報</title>
    </Head>
    <main className="h-screen bg-green-100">
      <Header></Header>
    <div className="text-3xl ml-20 text-red-500">作成者について</div>
    <div className="text-2xl text-blue-500 ml-20">
    <Link href="https://twitter.com/hirokimorino">twitter</Link>
    </div>
    <div className="text-2xl text-blue-500 ml-20">
    <Link href="/">facebook</Link>
    </div>
    </main>
    <Footer></Footer>
    </>
  )
}