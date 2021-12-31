import Head from "next/head";
import Link from "next/link";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

const Latest = () => {
  return (
    <>
      <Head>
        <title>今週公開の映画一覧</title>
      </Head>
      <div className="h-screen sm:bg-green-100 bg-green-300">
        <Header />
        <div className="sm:text-4xl text-blue-800 m-20">
          今週公開の映画一覧
          <div className="sm:text-2xl mt-10 ml-10 sm:ml-20 text-indigo-500 hover:text-red-500">
            <Link href="/">
              <a>・99.9_刑事専門弁護士(公開中)</a>
            </Link>
          </div>
          <div className="sm:text-2xl mt-10 ml-10 sm:ml-20 text-indigo-500 hover:text-red-500">
            <Link href="/">
              <a>・あなたの番です(公開中)</a>
            </Link>
          </div>
          <div className="sm:text-2xl mt-10 ml-10 sm:ml-20 text-indigo-500 hover:text-red-500">
            <Link href="/">
              <a>・キングスマン_ファースト_エージェント(公開中)</a>
            </Link>
          </div>
          <div className="sm:text-2xl mt-10 ml-10 sm:ml-20 text-indigo-500 hover:text-red-500">
            <Link href="/">
              <a>・呪術廻戦0(公開中)</a>
            </Link>
          </div>
          <div className="sm:text-2xl mt-10 ml-10 sm:ml-20 text-indigo-500 hover:text-red-500">
            <Link href="/">
              <a>・マトリックス_レザレクションズ(公開中)</a>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Latest;
