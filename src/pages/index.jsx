import Head from 'next/head';
import { Footer } from '../components/footer'
import { Main } from "../components/main";

const Home = () => {
  return <>
    <Head>
      <title>トップページ</title>
    </Head>
    <link rel="icon" href="/favicon.ico" />
    <div className="h-auto sm:bg-green-100 bg-green-300">
      <Main />
    </div>
    <Footer />
  </>
};

export default Home;
