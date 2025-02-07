"use client";

import Image from "next/image";
import Me from "@/app/myComponents/Me";
import Intro from "@/app/myComponents/Intro";
import About from "@/app/myComponents/About";
import { Separator } from "@/components/ui/separator";
import ProjectCarousel from "./myComponents/ProjectCarousel";
import Technologies from "./myComponents/Technologies";
import Contact from "./myComponents/Contact";
import { useState } from "react";
import PdfModal from "./myComponents/pdfModal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-full justify-center items-start">
      <PdfModal isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className="hidden lg:flex sticky top-20">
        <Me isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      {<Separator orientation="vertical" className=" bg-neutrla-700" />}

      <div className="md:mx-10 2xl:mx-20 flex justify-center  text-white">
        <div className="flex h-full flex-col lg:hidden">
          <Me isOpen={isOpen} setIsOpen={setIsOpen} />
          <About />
          <ProjectCarousel />
          <Technologies />
          <Contact />
        </div>

        <div className="hidden lg:flex flex-col">
          <About />
          <ProjectCarousel />
          <Technologies />
          <Contact />
        </div>
      </div>
    </div>
  );
}
