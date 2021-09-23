import Head from 'next/head'
import Link from 'next/link'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'

export default function News1() {
  return (
    <>
      <Head>
        <title>9月のニュース一覧</title>
      </Head>
      <main className="h-screen sm:bg-green-100 bg-green-300">
        <Header />
        <div>
          <h1 className="sm:text-2xl pb-5 text-red-700 mt-20 ml-10 sm:ml-20">更新済みの最新情報</h1>
          ・Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eius aperiam ea ipsum? Asperiores, adipisci quod. Libero molestiae nostrum, quisquam facere quo ad nihil porro, eum neque aliquam deserunt necessitatibus.
        </div>
        <Footer />
      </main>
    </>
  )
}

