import Head from "next/head";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

const Corona = () => {
  return (
    <>
      <Head>
        <title>コロナウイルスに対する対策</title>
      </Head>
      <div className="sm:h-screen sm:bg-green-100 bg-green-300">
        <Header />
        <div className="text-4xl text-blue-600 mx-20 my-10">
          新型コロナウイルスに対する劇場の対策
        </div>
        <div className="mx-40 my-10">
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, rem?
            Ab voluptas accusantium distinctio architecto porro quisquam culpa.
            Iure eaque numquam nostrum saepe quibusdam sed commodi, nisi
            obcaecati possimus sequi.
          </li>
          <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            soluta maxime ratione, aspernatur deleniti quasi adipisci assumenda
            officia reprehenderit sed veniam. Perspiciatis facilis cupiditate
            quas inventore molestiae, in saepe expedita.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            alias quasi, cumque dolore labore pariatur, beatae quae reiciendis
            nostrum, temporibus minima. Tenetur alias ratione dolores error a
            sed ea obcaecati.
          </li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatum, voluptatem. Ipsam maxime minus eius, nobis rerum fugiat
            dolorem dignissimos atque repellat neque aliquam reiciendis
            consectetur consequuntur quia eum tempore explicabo.
          </li>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Corona;
