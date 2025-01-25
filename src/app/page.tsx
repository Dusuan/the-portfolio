import Image from "next/image";
import Me from "@/app/myComponents/Me";
import Intro from "@/app/myComponents/Intro";
import About from "@/app/myComponents/About";
import { Separator } from "@/components/ui/separator";
import ProjectCarousel from "./myComponents/ProjectCarousel";

export default function Home() {
  return (
    <div className="mx-10 flex justify-center items-center  bg-zinc-950 text-white">
      <div className="md:grid md:grid-flow-col ">
        <Me/>
        <Separator orientation="horizontal" className="my-10 bg-zinc-600" />
        <Intro/>
        <About/>
        <Separator orientation="horizontal" className="my-10 bg-zinc-600"/>
        <ProjectCarousel/>
      </div>
    </div>
  );
}
