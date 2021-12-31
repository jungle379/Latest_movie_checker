import Head from "next/head";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

const Musical = () => {

  return <>
    <Head>
      <title>オススメのミュージカル映画</title>
    </Head>
    <div className="h-screen sm:bg-green-100">
      <Header />
      <div className="text-2xl mt-20 ml-10">オススメリスト</div>
      <h1 className="pt-10 pl-5">ミュージカル</h1>
      <li className="ml-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi velit eius illo reprehenderit animi, at iure tempore pariatur tempora facere deleniti rerum recusandae magnam? Perferendis facilis tenetur distinctio assumenda nemo?</li>
      <li className="ml-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eveniet vitae magni nesciunt corrupti, commodi, ea a harum mollitia omnis, incidunt nam architecto repellat maxime recusandae quam voluptatum autem distinctio!</li>
      <li className="ml-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus natus voluptate molestias. Dolorem facere quia praesentium vel laborum deleniti, magni veniam, vero accusamus velit officiis dolore sapiente molestiae ea autem.</li>
    </div>
    <Footer />
  </>
};

export default Musical;
