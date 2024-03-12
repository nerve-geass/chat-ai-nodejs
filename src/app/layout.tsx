import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth/next";
import SessionWrapper from "../components/session-wapper";

import '../../public/dist/icons/themify/themify-icons.css'
import '../../public/dist/icons/materialicons/css/materialdesignicons.min.css'
import '../../public/dist/vendor/bundle.css'
import '../../public/dist/vendor/slick/slick-theme.css'
import '../../public/dist/vendor/slick/slick.css'
import '../../public/dist/vendor/fancybox/jquery.fancybox.min.css'
import '../../public/dist/css/app.css'
import '../../public/dist/css/landing-page.css'
import Script from "next/script";
import { authOptions } from "./api/auth/[...nextauth]/auth-options";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brainers Chat AI girlfriend",
  description: "Chat with your beautiful AI girlfriend",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions)
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={inter.className}>{children}</body>
        {/* <!-- Bundle scripts --> */}
        <Script src="dist/vendor/bundle.js"></Script>

        {/* <!-- Feather icons --> */}
        <Script src="./dist/icons/feather/feather.min.js"></Script>

        {/* <!-- Slick --> */}
        <Script src="dist/vendor/slick/slick.min.js"></Script>

        {/* <!-- Fancybox --> */}
        <Script src="dist/vendor/fancybox/jquery.fancybox.min.js"></Script>

        {/* <!-- Jquery Stopwatch --> */}
        <Script src="dist/vendor/jquery.stopwatch.js"></Script>

        {/* <!-- Sweetalert2 --> */}
        <Script src="dist/vendor/sweetalert2.js"></Script>

        {/* <!-- App Scripts --> */}
        <Script src="./dist/js/app.min.js"></Script>
      </html>
    </SessionWrapper>
  );
}
