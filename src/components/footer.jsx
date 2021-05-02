import Link from 'next/link'

export function Footer() {
  return (
    <div className="h-full pt-10 text-0.5xl bg-green-100">
      <Link href="">
        <div className="m-3 mt-40 ml-80 pl-80">To_movie_fun.inc</div>
      </Link>
    </div>
  );
}