import Head from 'next/head'
import Link from 'next/link'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'

export default function Home() {
  return (
    <>
    <Head>
      <title>次週公開予定</title>
    </Head>
    <main className="h-screen bg-green-100">
    <Header></Header>
    <h1 className="text-5xl pb-5 text-red-700 ml-20">次週公開の映画一覧</h1>
    <h2 className="">
      <Link href=""></Link>
    </h2>
    </main>
    <Footer></Footer>
    </>
  )
}