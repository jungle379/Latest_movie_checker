import Head from 'next/head';
import Link from 'next/link';
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'

// const clickButton = (e) => {
//   console.log(e);
//   alert('ダミーなので問い合わせフォームへは遷移しません')
// };

export default function Beginner() {
  return (
    <>
      <Head>
        <title>初めての方へ</title>
      </Head>
      <div className="h-auto sm:bg-green-100 bg-green-300">
        <Header />
        <div className="text-indigo-800 text-2xl mt-20 ml-5 sm:ml-20">このサイトの使い方</div>
        <div>
          <h1 className="text-1xl ml-10 sm:ml-40 mt-5">各ページについて</h1>
          <ul className="ml-10 sm:ml-40 mt-5">・今週公開の映画　→今週末公開予定の映画一覧ページに遷移します。一覧ページの各リンクをクリックすると公式ページへ遷移します</ul>
          <ul className="ml-10 sm:ml-40 mt-5">・今月公開予定の映画　→今月公開予定の映画一覧ページに遷移します。</ul>
          <ul className="ml-10 sm:ml-40 mt-5">・近くの映画館を探す　→Google_Mapが起動し、現在地から近くの映画館を表示します。</ul>
          <h2 className="text-1xl sm:ml-40 ml-10 mt-10">外部リンクについて</h2>
          <ul className="ml-10 sm:ml-40 mt-5">・各映画詳細ページに外部リンクを設けています　→公式サイトの公開劇場一覧ページに遷移します。上映劇場は外部サイトから確認してください。</ul>
          <ul className="ml-10 sm:ml-40 mt-5">・下部に問い合わせフォームへのボタンがあります。不明点は気兼ねなくお尋ねください。</ul>
        </div>
        <div className="flex">
          <h1 className="ml-40 mt-10 w-40 text-blue-500 hover:text-red-500 sm:text-2xl text-1xl">
            <Link href="/kiyaku">・規約へ</Link>
          </h1>
          <h2 className="text-blue-500 ml-20 sm:ml-80 mt-10 w-80 hover:text-red-500 sm:text-2xl text-1xl">
            {/* <button onClick={clickButton}>・問い合わせフォームへ</button> */}
            <Link href="../inquiry">・問い合わせフォームへ</Link>
          </h2>
        </div>
      </div>
      <Footer />
    </>
  )
}