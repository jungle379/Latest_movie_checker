import Link from 'next/link'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { Introduce } from '../../components/introduce'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';

export default function Creater() {
  return (
    <>
      <Head>
        <title>作成者情報</title>
      </Head>
      <main className="h-screen sm:bg-green-100 bg-green-300">
        <Header />
        <div className="text-3xl ml-20 mt-20 text-red-500">作成者について
          <h1 className="text-2xl mt-10 ml-10 text-black">森野　弘規</h1>
          <Introduce />
        </div>
        <div className="text-3xl ml-20 mt-10 text-red-500">SNS
        </div>
        <div className="text-2xl text-blue-500 ml-40 mt-10 flex">
          <FontAwesomeIcon className="h-10 mr-5" icon={faTwitterSquare} />
          <FontAwesomeIcon className="h-10 mr-5" icon={faChevronRight} />
          <Link href="https://twitter.com/hirokimorino">twitter</Link>
        </div>
        <div className="text-2xl text-blue-700 ml-40 mt-20 flex">
          <FontAwesomeIcon className="h-10 mr-5" icon={faFacebookSquare} />
          <FontAwesomeIcon className="h-10 mr-5" icon={faChevronRight} />
          <Link href="/">facebook</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}