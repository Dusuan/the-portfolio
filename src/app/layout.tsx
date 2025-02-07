import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PrincipalHeader from "./myComponents/PrincipalHeader";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Me from "./myComponents/Me";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dusuan's Portfolio",
  description: "Juan Sandoval Software Developer Portfolio",
};

const Buttons = [
  { text: "Home", href: "/" },
  { text: "About", href: "/About" },
  { text: "Contact", href: "#contact" },
  { text: "Projects", href: "/Projects" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="scroll-smooth">
      <body
         className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-gradient-to-t from-neutral-950 to-neutral-800`}
      >
        <AppRouterCacheProvider>
          <div className="min-h-svh md:mx-16 xl:mx-60 2xl:mx-72 bg-neutral-900 px-10">
            <PrincipalHeader Buttons={Buttons} />
            <div className="flex h-full justify-center items-start">
              {children }
            </div>
          </div>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
