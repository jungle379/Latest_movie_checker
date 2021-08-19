import Head from "next/head";
import Link from "next/link";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

const ITEMS = [
  {
    href: "/",
    title: "1つ目です"
  }, {
    href: "/",
    title: "2つ目です"
  }
];

const News = () => {

  return <>
    <Head>
      <title>ニュース</title>
    </Head>
    <div className="h-screen sm:bg-green-100">
      <Header />
      <div className="ml-10 mt-10 text-2xl">トピックス</div>

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
    </div>
    <Footer />
  </>
};

export default News;

