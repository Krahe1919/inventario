import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Healt",
  description: "Healt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-white text-black font-sans ${inter.className}
      `}>
          <Sidebar/>
          {children}
        </body>
    </html>
  );
}
