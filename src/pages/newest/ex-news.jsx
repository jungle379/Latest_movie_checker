import Head from 'next/head';
import Link from 'next/link';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';

export default function CoNews() {
  return (
    <>
      <Head>
        <title>過去のニュース一覧</title>
      </Head>
      <main className="h-screen sm:bg-green-100 bg-green-300">
        <Header />
        <div>
          <h1 className="sm:text-2xl pb-5 text-red-700 mt-20 ml-10 sm:ml-20">更新済みの最新情報</h1>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit exercitationem odit ad atque, vitae omnis! Cum provident molestiae officia id tempora, nemo harum porro corporis, autem libero atque veniam sequi.
          </li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quas, rem commodi explicabo neque iusto recusandae voluptatum ab at fugit, dolorum adipisci impedit labore asperiores quod, ullam repellendus? Pariatur, magnam.</li>
        </div>
        <Footer />
      </main>
    </>
  )
}

