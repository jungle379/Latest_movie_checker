import Head from "next/head";
import Link from "next/link";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

const ITEMS = [
  {
    href: "/",
    title: "アクション映画"
  }, {
    href: "/",
    title: "ファンタジー"
  }, {
    href: "/",
    title: "アニメ"
  }
];

const Category = () => {
  return <>
    <Head>
      <title>ジャンル別作品</title>
    </Head>
    <Header />
    <div className="h-screen sm:bg-green-100">
      <div>
        {ITEMS.map(item => {
          return (
            <div className="text-2xl text-blue-500 pt-10 pl-10">
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

export default Category;
