import Head from "next/head";
import Link from "next/link";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

export default function Latest() {
  return (
    <>
      <Head>
        <title>今週公開の映画一覧</title>
      </Head>
      <main className="h-screen sm:bg-green-100 bg-green-300">
        <Header />
        <div className="sm:text-4xl text-blue-800 m-20">
          今週公開の映画一覧
          <h1 className="sm:text-2xl mt-10 ml-10 sm:ml-40 text-indigo-500 hover:text-red-500">
            <Link href="/">
              <a>・007-ノー・タイム・トゥ・ダイ(公開中)</a>
            </Link>
          </h1>
        </div>
        <Footer />
      </main>
    </>
  );
}
