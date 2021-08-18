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
import Head from "next/head"

const ITEMS = [
  {
    href: "/",
    title: ""
},{
    href: "/",
    title: ""
}
];

const *** = () => {

return <>
<Head>
<title>***</title>
</Head>
<Header />
<div className="">*</div>
 <h1 className="">**</h1>

  {ITEMS.map(item => {
    return (
      <div><Link href={item.href}>
        <li>{item.title}</li>
      </Link></div>
    )
  })}
<Footer />

</>
};

export default ***;
