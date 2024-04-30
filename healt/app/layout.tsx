import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Home } from "@/components/home";
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
          <div className="min-h-screen grid grid-cols-1 xl:grid-cols-6">
            <Sidebar/>
            <div className="xl:col-span-5 ">
              <Header/>
              <div className="h-[90vh] overflow-y-scroll">
                <Home/>
              </div>
            </div>
          </div>

          {children}
        </body>
    </html>
  );
}
