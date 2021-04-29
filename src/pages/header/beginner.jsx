import { Footer } from '../../components/footer'
import { Header } from '../../components/header'

const clickButton = (e) => {
  console.log(e);
  alert('ダミーなので問い合わせフォームへは遷移しません')
};

export default function Beginner() {
  return (
    <>
      <title>初めての方へ</title>
      <main className="h-screen bg-green-100">
        <Header></Header>
        <div className="text-indigo-800 text-4xl ml-20">このサイトの使い方</div>
        <div>
          <h1 className="text-1xl ml-40 mt-5">各ページについて</h1>
          <ul className="mt-5 ml-40">・最新の映画　→今週公開予定の映画一覧ページに遷移します。</ul>
          <ul className="mt-5 ml-40">・今月公開予定の映画　→今月公開予定の映画一覧ページに遷移します。</ul>
          <h2 className="text-1xl ml-40 mt-10">外部リンクについて</h2>
          <ul className="mt-5 ml-40">・各映画詳細ページに外部リンクを設けています　→公式サイトの公開劇場一覧ページに遷移します。上映劇場は外部サイトから確認してください。</ul>
          <ul className="mt-5 ml-40">・下部に問い合わせフォームへのボタンがあります。不明点は気兼ねなくお尋ねください。</ul>
        </div>
        <div className="hover:bg-yellow-300 text-blue-500 mt-20 ml-80 underline w-40">
          <button onClick={clickButton}>問い合わせフォームへ</button>
        </div>
        <Footer></Footer>
      </main>
    </>
  )
}