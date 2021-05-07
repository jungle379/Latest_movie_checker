import Link from 'next/link'

export function Footer() {
  return (
    <div className="h-46 pt-10 text-0.5xl sm:bg-green-100">
      <Link href="">
        <div className="m-3 sm:mt-40 leading-10 text-center">To_movie_fun.inc</div>
      </Link>
    </div>
  );
}