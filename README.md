# Latest_Movie_Checker

## 作成しようとした理由
- 映画館でアルバイトをしていた時にお客様から上映していない映画について尋ねられたことがあり、  
その際にメジャーではない映画についてどこで上映しているか回答に困った経験があった。   
メジャー・マイナー問わず一括でまとめられているサイトがあれば、お客様もわざわざ足を運ぶ必要がないと思い制作しました。

## 概要
- 公開順に作品及び上映劇場がまとめられているサイトを作成し、ページを開いただけで. 
人気作品やニッチな作品がどこで観られるかわかるようなサイトを作成する。
 
## 機能
- 今週末公開作品一覧
　週末に公開される映画をまとめたページ。  
 リンクをクリックすると公式HPへ飛ぶように設計
 
- 当月公開予定作品一覧
　アーカイブ形式で設計し、今月公開予定の作品一覧を掲載。  
 mdファイルにて作品詳細ページを作成している。
 
- 近隣の映画館の検索ページ
　Google mapのAPI取得により、現在地から直近の映画館を検索できるようにしてあるページ
 

## GithubのURL
- https://github.com/jungle379/Latest_movie_chacker

## デプロイ先URL
- https://vercel.com/jungle379/latest-movie-checker

## サイトイメージ
 -トップページ
<img src="/public/images/src1.jpg">

 -アーカイブページ
<img src="/public/images/src2.jpg">


import Link from "next/link";
import { Header } from "./header";

export function Main() {
  return (
    <div>
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
        <div className="sm:text-4xl mt-10 ml-10">最新情報
          <div className="mt-10 w-80 sm:text-1xl text-blue-500 underline">
            <Link href="/newest/news1">・8月の情報を更新しました。</Link>
          </div>
          <div className="mt-10 w-80 sm:text-1xl text-blue-500 underline">
            <Link href="/newest/co-news">・その他の最新情報</Link>
          </div>
        </div>
        <div className="sm:text-2xl mt-10 sm:w-80 text-blue-500 underline">
          <Link href="/maintainance">・メンテナンス情報</Link>
        </div>
        <div className="sm:text-2xl ml-10 mt-10 sm:w-80 text-blue-500 underline">
          <Link href="/news">・ニュース一覧</Link>
        </div>
      </div>
      <div className="text-0.5xl text-yellow-800 float-right sm:mt-0.5 mr-40 border-red-600 sm:visible invisible">updated in 2021/08/25</div>
    </div>
  );
}
