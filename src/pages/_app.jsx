import "tailwindcss/tailwind.css";
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react'

const publicPages = ["/", "/sign-in/[[...index]]", "/sign-up/[[...index]]"];
import { useRouter } from 'next/router'

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  /**
   * If the current route is listed as public, render it directly.
   * Otherwise, use Clerk to require authentication.
   */
  return (
    <ClerkProvider
      frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}
      navigate={(to) => router.push(to)}
    >
      {publicPages.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <>
          <SignedIn>
            <Component {...pageProps} />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  );
};

export default MyApp
