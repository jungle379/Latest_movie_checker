import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="toppage">
      <Head>
        <title>Latest_Movie_Checker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen bg-green-100">
        <h1 className="text-center container mx-auto text-6xl font-thin text-red-400 underline mb-40">
        <a href="">Latest Movie Checker</a>
        </h1>

        <div className="flex h-20">
          <Link href="/newest/latest">
            <h2 className="bg-center text-2xl text-blue-300 justify-between ml-20 mr-10">最新の映画</h2>
          </Link>
          <Link href="/newest/nextweek">
            <h3 className="bg-center text-2xl text-blue-300 justify-between ml-20 mr-10">来週公開予定の映画</h3>
          </Link>
        </div>
      </main>

      <footer className="bg-bottom text-0.5xl h-300">
        <div className="flex">
        <Link href="">
          <h4 className="flex-auto pl-20 ml-20 w-10">初めての方へ</h4>
        </Link>
        <Link href="">
          <h5 className="flex-auto pl-20 ml-20 w-10">作成者について</h5>
        </Link>
        </div>
      <Link href="">
           <div className="ml-80 pl-80">To_movie_fun.inc</div>
          </Link>
      </footer>
    </div>
  )
}
