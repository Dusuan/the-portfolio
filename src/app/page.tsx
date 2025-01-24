import Image from "next/image";
import Me from "@/app/myComponents/Me";
import Intro from "@/app/myComponents/Intro";
export default function Home() {
  return (
    <div className="m-6 flex justify-center items-center  bg-zinc-950 text-white">
      <div className="md:grid md:grid-flow-col">
        <Intro></Intro>
        <Me></Me>
      </div>
    </div>
  );
}
