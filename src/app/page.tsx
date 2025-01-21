import Image from "next/image";
import Intro from "@/app/myComponents/Intro";
export default function Home() {
  return (
    <div className="m-6 flex justify-center items-center  bg-zinc-950 text-white">
      <div>
        <Intro></Intro>
      </div>
    </div>
  );
}
