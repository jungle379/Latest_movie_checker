import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

const ITEMS = [
  {
    href: "/",
    title: ""
  }, {
    href: "/",
    title: ""
  }, {
    href: "/",
    title: ""
  }
];

const Others = () => {
  return <>
    <Head>
      <title>一覧</title>
    </Head>

    <Header />
    <div className="text-4xl ml-10 mt-20">一覧</div>
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
  </>
};


export default Others;
