import Link from "next/link";
import { Header } from "./header";

export function Main() {
  return (
    <div>
      <Header />
      <div className="mt-20 flex h-20 justify-around">
        <Link href="/newest/latest">
          <h1 className="bg-center bg-gray-200 sm:text-2xl pt-5 pl-5 pr-5 hover:text-red-500 border-solid sm:border-4 sm:border-gray-400">今週公開の映画</h1>
        </Link>
        <Link href="/archive/[page]" as="/archive/1">
          <h2 className="bg-center bg-gray-200 sm:text-2xl pt-5 pl-5 pr-5 hover:text-red-500 border-solid sm:border-4 sm:border-gray-400">今月公開予定の映画</h2>
        </Link>
        <Link href="/near/map">
          <h3 className="bg-center bg-gray-200 sm:text-2xl pt-5 pl-5 pr-5 hover:text-red-500 border-solid sm:border-4 sm:border-gray-400">現在地から近くの映画館を探す</h3>
        </Link>
      </div>
      <div className="flex justify-around mt-20 h-80 sm:border-dashed sm:border-8 sm:border-red-400 mr-40 ml-40">
        <div className="sm:text-4xl mt-10">最新情報
          <h4 className="mt-10 w-80 sm:text-xl text-blue-500 underline">
            <Link href="/newest/news1">・8月の情報を更新しました。</Link>
          </h4>
          {/* <h4 className="mt-10 text-xl w-80 text-blue-500 underline">
            <Link href="/newest/news1">・7月の情報を更新しました。</Link>
          </h4> */}
          <h4 className="mt-10 w-80 sm:text-xl text-blue-500 underline">
            <Link href="/">・最新情報</Link>
          </h4>
        </div>
        <div className="sm:text-2xl mt-10 sm:w-80 text-blue-500 underline">
          <Link href="/maintainance">・メンテナンス情報</Link>
        </div>
        <div className="sm:text-2xl mt-10 sm:w-80 text-blue-500 underline">
          <Link href="/news">・ニュース一覧</Link>
        </div>
      </div>
      <div>
        <h6 className="text-0.5xl text-yellow-800 float-right mt-40 sm:mt-0.5 mr-40 border-red-600 ">updated in 2021/08/25</h6>
      </div>
    </div >
  );
}