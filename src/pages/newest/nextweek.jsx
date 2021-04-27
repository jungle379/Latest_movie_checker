import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { getSortedPostsData } from '../../../lib/posts'
import Link from 'next/link'

export default function FirstPost({ allPostsData }) {
  return (
    <>
      <title>次週公開予定</title>
      <main className="h-screen bg-green-100">
        <Header></Header>
        <div className="text-5xl pb-5 text-red-700 ml-20">来週公開の映画一覧</div>
        {allPostsData.map(({ id, title }) => {
          return (
            <li className="text-3xl text-blue-600 flex" key={id}>
              <Link href={`/posts/${id}`}>
                <a className="ml-20 pt-10">{title}</a>
              </Link>
            </li>
          )
        })}
      </main>
      <Footer></Footer>
    </>
  )
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}