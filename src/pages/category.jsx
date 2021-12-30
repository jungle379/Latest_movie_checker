import Head from "next/head";
import Link from "next/link";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

const ITEMS = [
  {
    href: "../cat/action",
    title: "・アクション",
  },
  {
    href: "../cat/fantasy",
    title: "・ファンタジー",
  },
  {
    href: "/",
    title: "・アニメ",
  },
  {
    href: "/",
    title: "・ラブコメ",
  },
  {
    href: "/",
    title: "・ドラマ",
  },
  {
    href: "/",
    title: "・ホラー",
  },
  {
    href: "/",
    title: "・サスペンス",
  },
  {
    href: "../cat/musical",
    title: "・ミュージカル",
  },
];

const Category = () => {
  return (
    <>
      <Head>
        <title>ジャンル別オススメ作品</title>
      </Head>
      <div className="sm:h-screen sm:bg-green-100 bg-green-300">
        <Header />
        <div>
          <div className="sm:text-4xl text-blue-800 ml-10 mt-16">ジャンル</div>
          {ITEMS.map((item) => {
            return (
              <div className="sm:text-2xl text-blue-500 pt-10 pl-20 hover:text-red-600 w-72">
                <Link href={item.href}>
                  <a>{item.title}</a>
                </Link>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Category;
