import Head from 'next/head'
import Link from 'next/link'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'

export default function Beginner() {
  return (
    <>
    <Head>
      <title>初めての方へ</title>
    </Head>
    <main className="h-screen bg-green-100">
      <Header></Header>
      <div className="text-indigo-800 text-4xl ml-20">このサイトの使い方</div>
      <div>
        <h1 className="text-1xl ml-40">各リンク先</h1>
        <h2 className="text-1xl ml-40">外部リンクについて</h2>
      </div>
    <Footer></Footer>
    </main>
    </>
  )
}