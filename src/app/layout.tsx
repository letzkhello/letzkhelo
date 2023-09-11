import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import { Toaster } from 'react-hot-toast';
import NextAuthSessionProvider from "./provider/sessionProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar fixed={undefined} />
      <NextAuthSessionProvider>
        {children}
      </NextAuthSessionProvider>
      <Toaster/>
      </body>
    </html>
  );
}
