import Navbar from "./components/navBar";

import "./globals.css";

import type { Metadata } from "next";

export const revalidate = 3600

export const metadata: Metadata = {
  title: "NextJs imag gallery",
  description:
    "this is a imag gallery that I am going to develop while learning next13 how fun, it si fun ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <Navbar />

      <main className="max-w-6xl mx-auto">
         {children}
      </main>
        
       </body>
    </html>
  );
}
