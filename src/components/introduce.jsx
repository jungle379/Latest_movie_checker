import Link from 'next/link'

export function Introduce() {
  return (
    <div className="pt-10 bg-green-100">
      <Link href="">
        <div className="m-3 ml-20 text-black text-2xl">経歴
       <h1 className="text-base">2020/2よりプログラミング学習を開始し、日夜モダンな言語を中心に勉強中。</h1>
          <h2 className="text-base">使用可能言語：HTML、CSS、JS、Ruby。現在、Next.jsを習得中。（当サイトもNext.jsを使用）</h2>
        </div>
      </Link>
    </div>
  );
}