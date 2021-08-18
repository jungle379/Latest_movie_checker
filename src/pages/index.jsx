import Head from 'next/head';
import { Footer } from '../components/footer'
import { Main } from "../components/main";

export default function Home() {
  return (
    <>
      <Head>
        <title>トップページ</title>
      </Head>
      <link rel="icon" href="/favicon.ico" />
      <div className="h-screen sm:bg-green-100">
        <Main />
      </div>
      <Footer />
    </>
  )
}
