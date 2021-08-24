import Link from 'next/link'

export function Footer() {
  return (
    <div className="h-20 pt-10 text-0.5xl sm:bg-green-100">
      <Link href="/">
        <div className="m-3 mt-10 leading-10 text-center sm:bg-green-100 bg-green-300">To_movie_fun.inc</div>
      </Link>
    </div>
  );
}