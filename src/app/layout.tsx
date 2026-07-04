import { Suspense } from "react";

import type { Metadata } from "next";
import { Alata } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";

import Navbar from "@/components/common/Navbar";
import ScrollManager from "@/components/common/ScrollManager";
import {
  SITE_ALTERNATE_NAMES,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/constants/seo";

import Providers from "./providers";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "리핏",
  alternateName: SITE_ALTERNATE_NAMES,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: ["ko-KR", "en"],
};

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

const alata = Alata({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alata",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.className} ${alata.variable} h-full antialiased`}>
      {/* <body className="flex min-h-full flex-col"> */}
      <body>
        <div className="mobile:w-97.5 mx-auto min-h-screen w-full bg-white">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
          />
          <Providers>{children}</Providers>
          <Suspense fallback={null}>
            <ScrollManager />
          </Suspense>
          <Navbar />
          <Script id="ms-clarity" strategy="afterInteractive">
            {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);
              t.async=1;
              t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
          `}
          </Script>
        </div>
      </body>
    </html>
  );
}
