import fs from "fs"
import Link from "next/link"
import { getSortedPostsData, listContentFiles } from "../../../lib/posts"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import Pager from "../../components/pager"

const COUNT_PER_PAGE = 10

export default function Archive(props) {
  const { posts, page, total, perPage } = props
  return (
    <div className="h-full bg-green-100 min-w-min">
      <title>今月公開予定の作品一覧</title>
      <Header />
      <div className="text-blue-800 text-4xl mb-20 ml-20">今月の公開作品一覧</div>
      {
        posts.map((post) => <div
          key={post.id}
          className="post-teaser"
        >
          <h2 className="text-2xl text-red-500 ml-40 mt-10">
            <Link href="/posts/[id]" as={`/posts/${post.id}`}><a>{post.title}</a></Link></h2>
          <div><span>{post.published}</span></div>
        </div>)
      }
      <Pager
        page={page} total={total} perPage={perPage}
        href="/archive/[page]"
        asCallback={(page) => `/archive/${page}`}
      />
      <Footer />
    </div>
  )
}
/**
 * ページコンポーネントで使用する値を用意する
 */
export async function getStaticProps({ params }) {
  const page = parseInt(params.page, 10)
  const end = COUNT_PER_PAGE * page
  const start = end - COUNT_PER_PAGE
  const posts = getSortedPostsData
  return {
    props: {
      posts: posts(start, end),
      page,
      total: posts.length,
      perPage: COUNT_PER_PAGE,
    }
  }
}
/**
 * 有効な URL パラメータを全件返す
 */
export async function getStaticPaths() {
  const posts = await listContentFiles({ fs })
  const pages = range(Math.ceil(posts.length / COUNT_PER_PAGE))
  const paths = pages.map((page) => ({
    params: { page: `${page}` }
  }))
  return { paths: paths, fallback: false }
}
/**
 * ユーティリティ: 1 から指定された整数までを格納した Array を返す
 */
function range(stop) {
  return Array.from({ length: stop }, (_, i) => i + 1)
}