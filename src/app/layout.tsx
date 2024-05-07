"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

const disableNavbar = ["/login", "/register"]
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathName = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
        {
          !disableNavbar.includes(pathName) && <Navbar />
        }
        {children}
        </SessionProvider>
      </body>
    </html>
  );
}
