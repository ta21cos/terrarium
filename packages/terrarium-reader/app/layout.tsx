import "../styles/reset.css";
import "../styles/blog.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ReactElement, Suspense } from "react";
import Head from "next/head";
import { Nunito_Sans, Noto_Sans } from "next/font/google";
// eslint-disable-next-line import/no-unresolved
import { Analytics } from "@vercel/analytics/react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { layoutContainer, main } from "./index.css";

const _nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "900"],
  variable: "--font-nunito",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "900"],
});

const RootLayout = ({ children }: { children: ReactElement }) => {
  return (
    <html lang="ja">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>
      <body>
        <div className={`${layoutContainer} ${notoSans.className}`}>
          <Header />
          <main className={`${main} --with-max-width`}>
            <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
