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
    <div className="text-3xl ml-20 text-red-500">作成者について</div>
    <h1 className="text-2xl mt-10 ml-40">森野　弘規</h1>
    <div className="text-2xl text-blue-500 ml-40 mt-20">
    <FontAwesomeIcon icon={faTwitterSquare} />
    <Link href="https://twitter.com/hirokimorino">twitter</Link>
    </div>
    <div className="text-2xl text-blue-500 ml-40 mt-20">
    <FontAwesomeIcon icon={faFacebookSquare} />
    <Link href="https://www.facebook.com/hiroki.morino.9/">facebook</Link>
    </div>
    </main>
    <Footer></Footer>
    </>
  )
}