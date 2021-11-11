import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.error("ネットワークがつながっていません。");

const ClerkFeatures = () => (
  <Link href="/user">
    <a>
      <div>
        <h3>ユーザー管理ページへ</h3>
      </div>
      {/* <div className="flex">
        <img src="/icons/arrow-right.svg" />
        <img src="/icons/layout.svg" />
      </div> */}
    </a>
  </Link>
);

const SignupLink = () => (
  <Link href="/sign-up">
    <a>
      <div>
        <h3>アカウント作成</h3>
      </div>
      {/* <div className="flex">
        <img src="/icons/arrow-right.svg" />
        <img src="/icons/user-plus.svg" />
      </div> */}
    </a>
  </Link>
);

export function Header() {
  return (
    <div className="pl-10 font-thin underline flex">
      <Link href="/">
        <a className="sm:text-6xl sm:text-red-600 w-2/5">
          Latest Movie Checker
        </a>
      </Link>
      <Link href="/header/beginner">
        <a className="flex-none text-0.5xl sm:text-1xl ml-10 m-5 w-30 hover:text-red-600 underline">
          初めての方へ
        </a>
      </Link>
      <Link href="/header/creater">
        <a className="flex-none text-0.5xl sm:text-1xl ml-10 m-5 w-30 hover:text-red-600 underline">
          作成者について
        </a>
      </Link>
      {/* <div>
        <button
          className="ml-10 mt-5 hover:text-red-600 underline"
          onClick={notify}
        >
          ネットワーク確認
        </button>
        <Toaster />
      </div> */}
      <div>
        <div className="sm:visible invisible ml-10 mt-5 hover:text-red-600">
          <SignedIn>
            <ClerkFeatures />
          </SignedIn>
          <SignedOut>
            <SignupLink />
          </SignedOut>
        </div>
      </div>
      <div className="ml-20 mt-5 hover:text-red-600">
        <SignedOut>
          <Link href="/sign-in">ログイン画面へ</Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      {/* <div>
          <Link href="https://dashboard.clerk.dev">
            <a target="_blank" rel="noreferrer">
              <img src="/icons/settings.svg" />
              <div>
                <h3>Configure settings for your app</h3>
              </div>
              <div>
                <img src="/icons/arrow-right.svg" />
              </div>
            </a>
          </Link>
        </div> */}
    </div>
  );
}
