import Head from 'next/head'
import Link from 'next/link'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'

export default function FirstPost() {
  return (
    <>
    <Head>
      <title>初めての方へ</title>
    </Head>
    <main className="h-screen bg-green-100">
      <Header></Header>
      <div className="text-3xl ml-40">このサイトの使い方</div>
      </main>
    <Footer></Footer>
    </>
  )
}