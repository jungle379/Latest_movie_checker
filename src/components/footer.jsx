import Link from "next/link";

export function Footer() {
  return (
    <Link href="/">
      <a>
        <div className="leading-10 text-center sm:bg-green-100 bg-green-300">
          To_Movies_Fun.inc
        </div>
      </a>
    </Link>
  );
}
