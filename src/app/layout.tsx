import { ReactNode } from "react";
import LayoutClient from "./LayoutClient"; // Import the client component

export const metadata = {
  title: "Dusuan's portfolio",
  description: "Juan Sandoval Software Developer Portfolio",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <LayoutClient>
      {children}
    </LayoutClient>
  );
}
