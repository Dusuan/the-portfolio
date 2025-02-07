"use client";
import { useEffect, useRef, useState } from "react";

const style: React.CSSProperties = {
  position: "fixed",
  zIndex: 1000,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background

  boxShadow: "12",
  padding: 10,
  width: "80%",
  height: "80%",
};

type PdfModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PdfModal({ isOpen, setIsOpen }: PdfModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsOpen, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="bg-opacity-60 bg-black fixed top-0 left-0 w-full h-full z-50">
      <div
        className="overflow-clip bg-black borrder border-neutral-700"
        style={style}
        ref={modalRef}
      >
        <iframe
          className="h-full w-full"
          src="/JMSR_Resume_locations.pdf"
        ></iframe>
      </div>
    </div>
  );
}
