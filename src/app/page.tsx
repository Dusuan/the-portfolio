import Image from "next/image";
import Me from "@/app/myComponents/Me";
import Intro from "@/app/myComponents/Intro";
import About from "@/app/myComponents/About";
import { Separator } from "@/components/ui/separator";
import ProjectCarousel from "./myComponents/ProjectCarousel";
import Technologies from "./myComponents/Technologies";
import Contact from "./myComponents/Contact";

export default function Home() {
  return (
    <div className="md:mx-10 2xl:mx-20 flex justify-center bg-zinc-950 text-white">
      <div className="flex h-full flex-col lg:hidden">
        <Me />
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
  );
}
