import Link from 'next/link'

export function Header() {
  return (
    <h1 className="container ml-10 font-thin underline mb-20 flex">
    <Link href="/">
      <a className="text-6xl text-red-400">Latest Movie Checker</a>
      </Link>
      <Link href="/header/beginner">
      <h1 className="flex-auto text-0.5xl ml-20 m-5 w-10 text-pink-300">初めての方へ</h1>
    </Link>
    <Link href="/header/creater">
      <h2 className="flex-auto text-0.5xl ml-20 m-5 w-10 text-pink-300">作成者について</h2>
    </Link>
    </h1>
  );
}