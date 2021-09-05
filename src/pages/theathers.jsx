import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

const ITEMS = [
  {
    href: "https://www.tohotheater.jp/index.html",
    title: "TOHOシネマズ"
  }, {
    href: "/",
    title: "109シネマズ"
  }, {
    href: "/",
    title: "新宿バルト9"
  }, {
    href: "/",
    title: "イオンモールシネマ"
  }, {
    href: "/",
    title: "大阪ステーションシネマ"
  }, {
    href: "/",
    title: "テアトル系劇場"
  }
];

const Others = () => {
  return <>
    <Head>
      <title>主なシネコン一覧</title>
    </Head>
    <div className="h-screen sm:bg-green-100 bg-green-300">
      <Header />
      <div className="text-4xl ml-10 mt-20">一覧</div>
      <div>
        {ITEMS.map(item => {
          return (
            <div className="sm:text-2xl text-blue-500 hover:text-red-700 pt-10 pl-10">
              <Link href={item.href}>
                <li>{item.title}</li>
              </Link></div>
          )
        })}
      </div>
      <Footer />
    </div>
  </>
};


export default Others;
