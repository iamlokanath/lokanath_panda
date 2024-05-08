import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lokanath Panda || Full Stack Developer",
  description: "This is the Portfolio website of Lokanath Panda. Website Is designed and developed by Lokanath Panda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex items-center">
        <Navbar/>
        </div>
        {children}</body>
    </html>
  );
}
