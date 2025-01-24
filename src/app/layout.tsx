import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PrincipalHeader from "./myComponents/PrincipalHeader";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const Buttons = [
  { text: "Home", href: "/" },
  { text: "About", href: "/About" },
  { text: "Contact", href: "/Contact" },
  { text: "Projects", href: "/Projects" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950`}
      >
        <AppRouterCacheProvider>
          <div className=" md:mx-42 xl:mx-96">
            <PrincipalHeader Buttons={Buttons} />
            {children}
          </div>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
