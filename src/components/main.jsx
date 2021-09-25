import Link from "next/link";
import { Header } from "./header";
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.loading('Here is your toast.');

export function Main() {
  return (
    <>
      <Header />
      <div className="mt-20 flex sm:h-20 justify-around ml-5 mr-5">
        <Link href="/newest/latest">
          <a className="bg-center w-1/4 text-center bg-gray-200 text-0.5xl sm:text-3xl pt-5 pl-5 pr-5 hover:text-red-500 border-solid sm:border-4 sm:border-gray-400 border-2 border-gray-600">今週公開の映画</a>
        </Link>
        <Link href="/archive/[page]" as="/archive/1">
          <a className="bg-center w-1/4 text-center bg-gray-200 text-0.5xl sm:text-3xl pt-5 pl-5 pr-5 hover:text-red-500 border-solid sm:border-4 sm:border-gray-400 border-2 border-gray-600">今月公開予定の映画</a>
        </Link>
        <Link href="/near/map">
          <a className="bg-center w-1/4 text-center bg-gray-200 text-0.5xl sm:text-3xl pt-5 pl-5 pr-5 hover:text-red-500 border-solid sm:border-4 sm:border-gray-400 border-2 border-gray-600">近くの映画館を探す</a>
        </Link>
        <Link href="../theathers">
          <a className="bg-center w-1/4 text-center bg-gray-200 text-0.5xl sm:text-3xl pt-5 pl-5 pr-5 hover:text-red-500 border-solid sm:border-4 sm:border-gray-400 border-2 border-gray-600">シネコン一覧へ</a>
        </Link>
      </div>
      <div className="sm:flex justify-around mt-20 h-80 sm:border-dashed sm:border-8 sm:border-red-400 mr-40 ml-40">
        <div>
          <h1 className="sm:text-4xl mt-10 ml-10">最新情報</h1>
          <h2 className="mt-10 sm:ml-14 sm:text-2xl sm:w-100 text-blue-500 underline">
            <Link href="/newest/news1">・9月の情報を更新しました。</Link>
          </h2>
          <h3 className="mt-10 sm:ml-14 sm:text-2xl sm:w-100 text-blue-500 underline">
            <Link href="/newest/co-news">・その他の情報</Link>
          </h3>
        </div>
        <div className="sm:text-2xl w-60 sm:ml-10 mt-10 sm:w-80 text-blue-500 underline">
          <Link href="/maintainance">・メンテナンス情報</Link>
        </div>
        <div className="sm:text-2xl w-60 sm:ml-10 mt-10 sm:w-80 text-blue-500 underline">
          <Link href="/news">・ニュース一覧</Link>
          <button className="pt-10" onClick={notify}>Make me a toast</button>
          <Toaster />
        </div>
      </div>
      <div className="text-0.5xl text-yellow-800 float-right mt-0.5 mr-40 sm:visible invisible">updated in 2021/09/20</div>
      <div className="mt-10">
        <Link href="../category">
          <a className="text-2xl sm:text-1xl mt-10 ml-40 m-5 w-80 underline hover:text-red-500 invisible sm:visible">ジャンル別オススメ映画</a>
        </Link>
      </div>
    </>
  );
}
