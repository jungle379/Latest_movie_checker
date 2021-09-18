import Link from "next/link"
import { SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";

export function Header() {
  return (
    <div className="sm:container pl-10 font-thin underline flex ">
      <Link href="/">
        <a className="sm:text-6xl sm:text-red-600 w-2/3">Latest Movie Checker</a>
      </Link>
      <Link href="/header/beginner">
        <a className="flex-auto text-0.5xl sm:text-1xl ml-10 m-5 w-60 hover:text-red-600 underline">初めての方へ</a>
      </Link>
      <Link href="/header/creater">
        <a className="flex-auto text-0.5xl sm:text-1xl ml-10 m-5 w-60 hover:text-red-600 underline">作成者について</a>
      </Link>
      <Link href="/header/mypage">
        <a className="flex-auto text-0.5xl sm:text-1xl ml-10 m-5 w-80 hover:text-red-600 underline">マイページへ</a>
      </Link>
      {/* <SignedIn />
      <SignedOut>
        <SignIn />
      </SignedOut> */}
    </div>
  );
}