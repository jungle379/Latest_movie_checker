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
        <h1 className="text-1xl ml-40 mt-5">各リンク先</h1>
        <ul className="mt-5 ml-40">・最新の映画　→今週公開予定の映画一覧ページに遷移します。</ul>
        <ul className="mt-5 ml-40">・来週公開予定の映画　→次週公開予定の映画一覧ページに遷移します。</ul>
        <ul className="mt-5 ml-40">・今月公開予定の映画　→今月公開予定の映画一覧ページに遷移します。</ul>
        <h2 className="text-1xl ml-40 mt-10">外部リンクについて</h2>
        <ul className="mt-5 ml-40">・各映画詳細ページに外部リンクを儲けています　→公開劇場一覧ページに遷移します。上映劇場は外部サイトから確認してください。</ul>
      </div>
    <Footer></Footer>
    </main>
    </>
  )
}