import Link from "next/link"

export function Header() {
  return (
    <div className="sm:container pl-10 font-thin underline flex ">
      <Link href="/">
        <a className="sm:text-6xl text-red-400">Latest Movie Checker</a>
      </Link>
      <Link href="/header/beginner">
        <a className="flex-auto text-0.5xl sm:text-2xl ml-20 m-5 w-60 text-pink-300 underline">初めての方へ</a>
      </Link>
      <Link href="/header/creater">
        <a className="flex-auto text-0.5xl sm:text-2xl ml-10 m-5 w-60 text-pink-300 underline">作成者について</a>
      </Link>
      <Link href="../category">
        <a className="flex-auto text-0.5xl sm:text-2xl ml-10 m-5 w-60 text-pink-300 underline">どんなジャンルが好き？</a>
      </Link>
    </div>
  );
}