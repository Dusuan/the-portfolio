"use client";
import {useAppContext} from "@/app/AppContext";

import About from "@/app/myComponents/About";
import ProjectCarousel from "./myComponents/ProjectCarousel";
import Technologies from "./myComponents/Technologies";
import Contact from "./myComponents/Contact";
import PdfModal from "./myComponents/pdfModal";

export default function Home() {

  const appContext = useAppContext();
  if (!appContext) {
   throw new Error("useAppContext must be used within an AppProvider");
  }
  const {isOpen, setIsOpen} = appContext;

  return (
      <div className="flex justify-center lg:items-start h-full w-full">
        <PdfModal isOpen={isOpen} setIsOpen={setIsOpen} />
      
        <div className="flex justify-center  text-white">
          <div className="flex h-full flex-col">
            <About />
            <ProjectCarousel />
            <Technologies />
            <Contact />
          </div>
        </div>
      </div>
  );
}
