import Link from 'next/link'

export function Header() {
  return (
    <h1 className="container ml-10 text-6xl font-thin text-red-400 underline mb-20">
    <Link href="/">
      <a>Latest Movie Checker</a>
      </Link>
    </h1>
  );
}