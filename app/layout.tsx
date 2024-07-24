import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scriptify | Chat to your PDF",
  description: "Chat to your PDF easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className=" min-h-screen h-screen overflow-hidden flex flex-col">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
