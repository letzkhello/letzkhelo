import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import SearchBar from "@/components/Search";
import Card from "@/components/Card";
import NextAuthSessionProvider from "./provider/sessionProvider";
import Carousel from '../components/Carousel'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextAuthSessionProvider>

      <Navbar fixed={undefined} />
      {/* <Carousel/>
      <SearchBar/>*/}
      <Card/> 
        {children}
      </NextAuthSessionProvider>
      <Toaster/>
      </body>
    </html>
  );
}
