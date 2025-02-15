import "mapbox-gl/dist/mapbox-gl.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bridge",
  description:
    "Our mission is to foster a sense of community, renewal, and support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className='font-[family-name:var(--font-geist-sans)]'>
          <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start w-full'>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
