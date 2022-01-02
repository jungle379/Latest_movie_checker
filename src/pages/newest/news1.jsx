import Head from "next/head";
import Link from "next/link";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

const ITEMS = [
  {
    href: "/",
    title: "舞台挨拶情報",
  },
  {
    href: "/",
    title: "1つ目です",
  },
  {
    href: "/",
    title: "2つ目です",
  },
];

const News = () => {
  return (
    <>
      <Head>
        <title>最新のニュース</title>
      </Head>
      <div className="h-screen sm:bg-green-100 bg-green-300">
        <Header />
        <div className="ml-10 mt-10 sm:text-4xl">最新のニュース一覧</div>
        <div>
          {ITEMS.map((item) => {
            return (
              <div className="sm:text-2xl text-blue-500 mx-20 my-10">
                <Link href={item.href}>
                  <a>{"・" + item.title}</a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default News;
