import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Providers } from "@/prodivers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AdAskar",
  description: "Nice name for ads website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
      <svg
          className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light"
          width="100%"
          height="100%">
          <filter id="pedroduarteisalegend">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.80"
              numOctaves="4"
              stitchTiles="stitch"></feTurbulence>
          </filter>
          <rect
            width="100%"
            height="100%"
            filter="url(#pedroduarteisalegend)"></rect>
        </svg>
        <Providers>
          <Header />
              {children}
        </Providers>
      </body>
    </html>
  );
}
