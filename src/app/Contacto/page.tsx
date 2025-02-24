"use client"
import Contact from "@/app/myComponents/Contact";
import Me from "@/app/myComponents/Me";
import { useAppContext } from "@/app/AppContext";
import PdfModal from "@/app/myComponents/pdfModal";
export default function Contacto() {
  const appContext = useAppContext();
  if (!appContext) {
    return null;
  }
  const { isOpen, setIsOpen } = appContext;

  return (
    <div className="text-white">

      <Contact />
    </div>
  );
}
