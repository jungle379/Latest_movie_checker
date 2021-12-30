import Link from "next/link";

export function Footer() {
  return (
    <Link href="/">
      <a>
        <div className="pt-10 leading-10 text-center sm:bg-green-100 bg-green-300">
          To_movie_fun.inc
        </div>
      </a>
    </Link>
  );
}
