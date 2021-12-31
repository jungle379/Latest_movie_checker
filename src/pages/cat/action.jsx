import Head from "next/head";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

const Action = () => {
  return (
    <>
      <Head>
        <title>オススメのアクション映画</title>
      </Head>
      <div className="h-screen sm:bg-green-100">
        <Header />
        <div className="text-2xl mt-20 ml-10">オススメリスト</div>
        <h1 className="pt-10 pl-5">アクション</h1>
        <li className="ml-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          velit eius illo reprehenderit animi, at iure tempore pariatur tempora
          facere deleniti rerum recusandae magnam? Perferendis facilis tenetur
          distinctio assumenda nemo?
        </li>
        <li className="ml-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
          delectus cum doloremque aut nobis quia ab est neque harum! Repellat
          non modi repellendus doloremque sint eligendi facilis cupiditate
          omnis. Reprehenderit.
        </li>
      </div>
      <Footer />
    </>
  );
};

export default Action;
