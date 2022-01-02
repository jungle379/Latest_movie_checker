import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

const ITEMS = [
  {
    href: "https://www.tohotheater.jp/index.html",
    title: "・TOHOシネマズ",
  },
  {
    href: "https://109cinemas.net",
    title: "・109シネマズ",
  },
  {
    href: "https://tjoy.jp/shinjuku_wald9",
    title: "・新宿バルト9",
  },
  {
    href: "https://www.aeoncinema.com",
    title: "・イオンモールシネマ",
  },
  {
    href: "https://www.osakastationcitycinema.com/site/oscc/",
    title: "・大阪ステーションシネマ",
  },
  {
    href: "https://ttcg.jp/#/",
    title: "・テアトル系劇場",
  },
  {
    href: "https://tjoy.jp/umeda_burg7",
    title: "・梅田ブルク７",
  },
];

const Theathers = () => {
  return (
    <>
      <Head>
        <title>主なシネコン一覧</title>
      </Head>
      <div className="h-screen sm:bg-green-100 bg-green-300">
        <Header />
        <div className="text-4xl text-blue-800 ml-10 mt-20">シネコン一覧</div>
        <div>
          {ITEMS.map((item) => {
            return (
              <div className="text-blue-500 hover:text-red-700 mx-20 my-10 w-52">
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

export default Theathers;
