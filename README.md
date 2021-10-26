# Latest_Movie_Checker

## 作成しようとした理由
- 映画館でアルバイトをしていた時にお客様から上映していない映画について尋ねられたことがあり、  
その際にメジャーではない映画についてどこで上映しているか回答に困った経験があった。   
メジャー・マイナー問わず一括でまとめられているサイトがあれば、お客様に瞬時に回答してあげれると思った。

## 概要
- 公開順に作品及び上映劇場がまとめられているサイトを作成し、ページを開いただけで. 
人気作品やニッチな作品がどこで観られるかわかるようなサイトを作成する。
 
## 機能
- 今週末公開作品一覧
　週末に公開される映画をまとめたページ。  
 リンクをクリックすると公式HPへ遷移するようにしている。
 
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

import Head from 'next/head';
import type { NextPage } from 'next';
import Link from 'next/link';

const createBroadcast: NextPage = () => {
  return (
    <>
      <Head>
        <title>放送作成ページ</title>
      </Head>
      <div className="bg-gray-200 h-screen">
        <div className="text-4xl w-3/5 mx-auto mb-5">放送を作成</div>
        <div className="h-40 w-3/5 mx-auto">
          <div>
            <input
              className="h-10 w-5/6 my-10 rounded"
              name="title"
              id="title"
              type="text"
              placeholder="タイトルを入力する"
              aria-required="true"
              // aria-invalid={errors.name ? 'true' : 'false'}
            />
          </div>
          <div>
            <input
              className="h-10 w-5/6 my-10 rounded"
              name="date"
              id="date"
              type="text"
              placeholder="2021/09/03"
              aria-required="true"
              // aria-invalid={errors.name ? 'true' : 'false'}
            />
          </div>
        </div>
        <div className="flex mt-20 w-3/5 mx-auto">
          <div className="text-red-300 w-40 mx-24 mt-12">
            {/* ボタン機能に変更？ */}
            <Link href="/">投稿する</Link>
          </div>
          <div className="text-blue-500 mx-24 mt-12 bg-blue-100 rounded-2xl h-12 w-32">
            <Link href="/">キャンセル</Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default createBroadcast;
