"use client";

import ProjectCarousel from "../myComponents/ProjectCarousel";
import Contact from "../myComponents/Contact";
import Me from "../myComponents/Me";
import { useAppContext } from "../AppContext";
import PdfModal from "../myComponents/pdfModal";
export default function Projectos() {
  const appContext = useAppContext();
  if (!appContext) {
    return null;
  }
  const { isOpen, setIsOpen } = appContext;

  return (
    <div className="flex justify-center w-full mt-10  text-white">

      <div className="flex h-full flex-col lg:hidden">
        <ProjectCarousel />
        <Contact />
      </div>

      <div className="hidden lg:flex w-full flex-col">
        <ProjectCarousel />
        <Contact />
      </div>
    </div>
  );
}
