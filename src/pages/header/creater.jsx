import Head from 'next/head'
import Link from 'next/link'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

export default function Creater() {
  return (
    <>
    <Head>
      <title>作成者情報</title>
    </Head>
    <main className="h-screen bg-green-100">
      <Header></Header>
    <div className="text-3xl ml-20 text-red-500">作成者について
    <h1 className="text-2xl mt-10 ml-20 text-black">森野　弘規</h1>
    <h2 className="text-2xl ml-20 mt-20 text-black">・SNSリンク</h2>
    </div>
    <div className="text-2xl text-blue-500 ml-40 mt-10">
    <FontAwesomeIcon icon={faTwitterSquare} />
    <Link href="https://twitter.com/hirokimorino">twitter</Link>
    </div>
    <div className="text-2xl text-blue-700 ml-40 mt-20">
    <FontAwesomeIcon icon={faFacebookSquare} />
    <Link href="https://www.facebook.com/hiroki.morino.9/">facebook</Link>
    </div>
    </main>
    <Footer></Footer>
    </>
  )
}