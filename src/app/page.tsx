"use client";
import {useAppContext} from "@/app/AppContext";

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
import { error } from "console";

export default function Home() {

  const appContext = useAppContext();
  if (!appContext) {
   throw new Error("useAppContext must be used within an AppProvider");
  }
  const {isOpen, setIsOpen} = appContext;

  return (
      <div className="flex h-full w-full items-start">
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
