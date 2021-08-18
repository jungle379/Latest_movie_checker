import Head from "next/head";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

const Kiyaku = () => {

  return <>
    <Head>
      <title>サイト利用規約</title>
    </Head>
    <div className="h-screen sm:bg-green-100">
      <Header />
      <div className="text-2xl mt-20 ml-10">利用規約</div>
      <h1 className="pt-10 pl-5">規約</h1>
      <li className="ml-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi velit eius illo reprehenderit animi, at iure tempore pariatur tempora facere deleniti rerum recusandae magnam? Perferendis facilis tenetur distinctio assumenda nemo?</li>
    </div>
    <Footer />

  </>
};

export default Kiyaku;
