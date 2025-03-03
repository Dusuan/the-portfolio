"use client";
import About from "@/app/myComponents/About";
import { useAppContext } from "@/app/AppContext";
import Contact from "@/app/myComponents/Contact";
export default function Acerca() {
  const appContext = useAppContext();
  if (!appContext) {
    return null;
  }

  return (
    <div className="w-full text-white">
      <About />
      <Contact/>
    </div>
  );
}
