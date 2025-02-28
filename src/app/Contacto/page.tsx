"use client";
import Contact from "@/app/myComponents/Contact";
import Me from "@/app/myComponents/Me";
import { useAppContext } from "@/app/AppContext";
import PdfModal from "@/app/myComponents/pdfModal";
import About from "@/app/myComponents/About";

export default function Contacto() {
  return (
    <div className="w-full text-white">
        <Contact />
    </div>
  );
}
