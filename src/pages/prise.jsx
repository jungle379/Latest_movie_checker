import Head from "next/head";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

const Prise = () => {
  return (
    <>
      <Head>
        <title>アカデミー賞候補の作品一覧</title>
      </Head>
      <div className="sm:h-screen sm:bg-green-100 bg-green-300">
        <Header />
        <div className="text-4xl text-blue-600 mx-20 my-10">
          アカデミー賞候補(2022)
        </div>
        <div className="text-center text-4xl">これから作っていきます！</div>
      </div>
      <Footer />
    </>
  );
};

export default Prise;
