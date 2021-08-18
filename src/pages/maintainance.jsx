
import Link from "next/link";
import Head from "next/head"
import { Footer } from '../components/footer'
import { Header } from '../components/header'

const ITEMS = [
  {
    href: "/",
    title: ""
  }, {
    href: "/",
    title: ""
  }
];

const Maintain = () => {

  return <>
    <Head>
      <title>メンテナンス情報</title>
    </Head>
    <div className="h-screen sm:bg-green-100">
      <Header />
      <div className="">メンテナンス情報</div>
      <h1 className="">実装履歴</h1>

      {ITEMS.map(item => {
        return (
          <div><Link href={item.href}>
            <li>{item.title}</li>
          </Link></div>
        )
      })}
    </div>
    <Footer />

  </>
};

export default Maintain;
