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
    <div className="md:mx-10 flex justify-center items-center  bg-zinc-950 text-white">
      <div className=" flex flex-col lg:grid lg:grid-flow-col">
        <Me />
        <About />
        <ProjectCarousel />
        <Technologies />
        <Contact/>
      </div>
    </div>
  );
}
