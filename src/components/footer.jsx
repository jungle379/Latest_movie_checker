import Link from "next/link"

export function Footer() {
  return (
    <div className="h-20 pt-10 sm:bg-green-100 bg-green-300">
      <Link href="/">
        <div className="mt-10 leading-10 text-center sm:bg-green-100 bg-green-300">To_movie_fun.inc</div>
      </Link>
    </div>
  );
}