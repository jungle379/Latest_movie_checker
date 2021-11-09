import Link from "next/link";
import { Header } from "./header";

export function Main() {
  return (
    <>
      {/* ここからヘッダー部 */}
      <Header />
      <div className="mt-20 flex sm:h-20 justify-around ml-5 mr-5">
        <Link href="/newest/latest">
          <a className="bg-center w-1/4 text-center bg-gray-200 text-0.5xl md:text-2xl pt-5 pl-5 pr-5 hover:text-red-500 border-solid sm:border-4 sm:border-gray-400 border-2 border-gray-600">
            今週公開の映画
          </a>
        </Link>
        <Link href="/archive/[page]" as="/archive/1">
          <a className="bg-center w-1/4 text-center bg-gray-200 text-0.5xl md:text-2xl pt-5 pl-5 pr-5 hover:text-red-500 border-solid sm:border-4 sm:border-gray-400 border-2 border-gray-600">
            今月公開予定の映画
          </a>
        </Link>
        <Link href="/near/map">
          <a className="bg-center w-1/4 text-center bg-gray-200 text-0.5xl md:text-2xl pt-5 pl-5 pr-5 hover:text-red-500 border-solid sm:border-4 sm:border-gray-400 border-2 border-gray-600">
            近くの映画館を探す
          </a>
        </Link>
        <Link href="../theathers">
          <a className="bg-center w-1/4 text-center bg-gray-200 text-0.5xl md:text-2xl pt-5 pl-5 pr-5 hover:text-red-500 border-solid sm:border-4 sm:border-gray-400 border-2 border-gray-600">
            全国のシネコン一覧へ
          </a>
        </Link>
      </div>

      {/* ここからメインの下部 */}

      <div className="sm:flex sm:justify-around sm:border-dashed sm:border-8 sm:border-red-400 mx-10 mt-10">
        <div>
          <h1 className="sm:text-4xl mt-10">〜最新情報〜</h1>
          <h2 className="mt-10 sm:text-2xl sm:w-100 text-blue-500 hover:text-red-500 underline">
            <Link href="/newest/news1">
              <a>・最新の情報一覧</a>
            </Link>
          </h2>
          <h3 className="mt-10 sm:text-2xl sm:w-100 text-blue-500 hover:text-red-500 underline">
            <Link href="/newest/ex-news">
              <a>・過去の情報</a>
            </Link>
          </h3>
          <h4 className="mt-10 mb-5 sm:text-2xl sm:w-100 text-blue-500 hover:text-red-500 underline">
            <Link href="/maintainance">
              <a>・メンテナンス情報</a>
            </Link>
          </h4>
        </div>
        <div className="mx-10 my-10 text-center sm:visible invisible">
          <div className="py-5">
            <Link href="../category">
              <a className="text-2xl sm:text-1xl mt-10 ml-10 m-5 w-80 underline hover:text-red-500 invisible sm:visible">
                ジャンル別オススメ映画
              </a>
            </Link>
          </div>
          <div className="py-5">
            <Link href="../academy">
              <a className="text-2xl sm:text-1xl mt-10 ml-10 m-5 w-80 underline hover:text-red-500 invisible sm:visible">
                アカデミー賞候補
              </a>
            </Link>
          </div>
          <div className="py-5">
            <Link href="../corona">
              <a className="text-1xl sm:text-1xl mt-10 ml-10 m-5 w-80 underline hover:text-red-500 invisible sm:visible">
                ※コロナウィルス対策について
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-0.5xl text-yellow-800 ml-10 sm:visible invisible">
        updated in 2021/11/01
      </div>
    </>
  );
}
