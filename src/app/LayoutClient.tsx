"use client";
import { AppProvider } from "./AppContext";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PrincipalHeader from "./myComponents/PrincipalHeader";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Me from "./myComponents/Me";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import { useAppContext } from "./AppContext";
import { create } from "domain";
import PdfModal from "./myComponents/pdfModal";

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
  { text: "About", href: "/Acerca" },
  { text: "Contact", href: "/Contacto" },
  { text: "Projects", href: "/Projectos" },
];

export type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  const appContext = useAppContext();
  if (!appContext) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  const { isOpen, setIsOpen } = appContext;
  return (
    <AppProvider>
      <html lang="en" className="scroll-smooth">
        <body
          className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-neutral-900`}
        >
          <AppRouterCacheProvider>
            <PdfModalWrapper>
              <div className="min-h-svh md:mx-16 xl:mx-60 2xl:mx-72 bg-neutral-900 px-10">
                <PrincipalHeader Buttons={Buttons} />
                <div className="flex lg:hidden">
                  <Me isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
                <div className="flex h-full justify-center items-start">
                  <div className="hidden lg:flex sticky top-20 mx-10 2xl:mx-20 justify-center  text-white">
                    <Me isOpen={isOpen} setIsOpen={setIsOpen} />
                  </div>

                  {children}
                </div>
              </div>
            </PdfModalWrapper>
          </AppRouterCacheProvider>
        </body>
      </html>
    </AppProvider>
  );
}

function PdfModalWrapper({ children }: { children: React.ReactNode }) {
  const { isOpen, setIsOpen } = useAppContext();

  return (
    <>
      <PdfModal isOpen={isOpen} setIsOpen={setIsOpen} />
      {children}
    </>
  );
}
