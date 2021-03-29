import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Latest_Movie_Checker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen bg-green-100">
        <h1 className="container mx-auto text-6xl font-thin text-red-400 underline mb-60">
        <a href="">Latest Movie Checker</a>
        </h1>

        <div className="flex">
          <Link href="/newest/latest">
            <h2 className="bg-center text-2xl text-blue-300 justify-between mr-10">最新の映画</h2>
          </Link>
          <Link href="/newest/nextweek">
            <h3 className="bg-center text-2xl text-blue-300 justify-between mr-10">来週公開予定の映画</h3>
          </Link>
        </div>
      </main>

      <footer className="bg-bottom text-0.5xl flex h-300">
        <Link href="">
          <h4 className="justify-between pl-20">初めての方へ</h4>
        </Link>
        <Link href="">
          <h5 className="justify-between pl-40">作成者について</h5>
        </Link>
        <Link href="">
          <h6 className="justify-between pl-40">・・・</h6>
        </Link>
      </footer>             
      <Link href="">
           To_movie_fun.inc
          </Link>
    </div>
  )
}
