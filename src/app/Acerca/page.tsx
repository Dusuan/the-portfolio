"use client";
import About from "@/app/myComponents/About";
import Me from "@/app/myComponents/Me";
import { useAppContext } from "@/app/AppContext";
import PdfModal from "@/app/myComponents/pdfModal";
import Contact from "@/app/myComponents/Contact";
export default function Acerca() {
  const appContext = useAppContext();
  if (!appContext) {
    return null;
  }
  const { isOpen, setIsOpen } = appContext;

  return (
    <div className="w-full text-white">
      <About />
      <Contact/>
    </div>
  );
}
