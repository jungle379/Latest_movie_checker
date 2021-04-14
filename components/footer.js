import Link from 'next/link'

export function Footer() {
  return (
    <div className="bg-bottom text-0.5xl h-300">
    <div className="flex">
    <Link href="/footer/beginner">
      <h1 className="flex-auto text-0.5xl ml-40 m-5 w-10">初めての方へ</h1>
    </Link>
    <Link href="/footer/creater">
      <h2 className="flex-auto text-0.5xl ml-40 m-5 w-10">作成者について</h2>
    </Link>
    </div>
    <Link href="">
       <div className="m-3 ml-80 pl-80">To_movie_fun.inc</div>
    </Link>
  </div>
  );
}