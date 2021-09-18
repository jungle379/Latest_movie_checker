import Head from "next/head";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";


const Mypage = () => {
  return <>
    <Head>
      <title>マイページ</title>
    </Head>
    <div className="h-screen sm:bg-green-100 bg-green-300">
      <Header />

      <Footer />
    </div>
  </>

};

export default Mypage;