import Head from "next/head";
import Link from "next/link";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

const ITEMS = [
  {
    href: "/",
    title: "・アクション"
  }, {
    href: "/",
    title: "・ファンタジー"
  }, {
    href: "/",
    title: "・アニメ"
  }, {
    href: "/",
    title: "・ラブコメ"
  }, {
    href: "/",
    title: "・ドラマ"
  }, {
    href: "/",
    title: "・ホラー"
  }, {
    href: "/",
    title: "・サスペンス"
  }
];

const Category = () => {
  return <>
    <Head>
      <title>ジャンル別オススメ作品</title>
    </Head>
    <div className="h-screen sm:bg-green-100 bg-green-300">
      <Header />
      <div>
        {ITEMS.map(item => {
          return (
            <div className="text-1xl text-blue-500 pt-10 pl-10 hover:text-red-600">
              <Link href={item.href}>
                <a>{item.title}</a>
              </Link></div>
          )
        })}
      </div>
      <Footer />
    </div>
  </>
};

export default Category;
