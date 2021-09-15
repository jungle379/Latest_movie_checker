import Head from 'next/head';
import { Footer } from '../components/footer'
import { Main } from "../components/main";
import Test from '../components/test';

const Home = () => {
  return <>
    <Head>
      <title>トップページ</title>
    </Head>
    <link rel="icon" href="/favicon.ico" />
    <div className="h-auto sm:bg-green-100 bg-green-300">
      <Main />
      <Test />
    </div>
    <Footer />
  </>
};

export default Home;
