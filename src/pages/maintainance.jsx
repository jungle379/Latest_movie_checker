
import Link from "next/link";
import Head from "next/head"
import { Footer } from '../components/footer'
import { Header } from '../components/header'

const ITEMS = [
  {
    href: "/",
    title: "9月メンテナンス情報",
    day: "(9/15)"
  }, {
    href: "/",
    title: "8月メンテナンス情報",
    day: "(8/15)"
  }, {
    href: "/",
    title: "7月メンテナンス情報",
    day: "(7/14)"
  }
];

const Maintaince = () => {

  return <>
    <Head>
      <title>メンテナンス情報</title>
    </Head>
    <div className="h-screen sm:bg-green-100 bg-green-300">
      <Header />
      <div className="sm:text-4xl mt-10">メンテナンス情報</div>
      <h1 className="sm:text-2xl pt-10 pl-5">履歴</h1>

      {ITEMS.map(item => {
        return (
          <div className="sm:text-2xl text-blue-500 pt-10 pl-10"><Link href={item.href}>
            <li>{item.title}{item.day}</li>
          </Link></div>
        )
      })}
    </div>
    <Footer />
  </>
};

export default Maintaince;
