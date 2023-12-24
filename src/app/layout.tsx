import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import NextAuthSessionProvider from "./provider/sessionProvider";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Script from 'next/script'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LetzKhelo | home",
  description: "Welcome to Letzkhelo, where sports enthusiasts unite to challenge, compete, and celebrate the spirit of athleticism At Letzkhelo, we believe that sports are more than just games; they are a way of life. Our platform was born out of a passion for sports and a desire to bring athletes and teams together like never before."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;  
}) {
  return (
    <html lang="en">
       <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body className={`${inter.className} bg-gray-700`}  >
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics ga_id= 
            {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null}
      <NextAuthSessionProvider>

      <Navbar fixed={undefined} />
        {children}
        <Analytics/>
        <Footer/>
      </NextAuthSessionProvider>
      <Toaster/>
      </body>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"
          />
    </html>
  );
}
