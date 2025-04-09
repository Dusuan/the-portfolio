import Intro from "./Intro";
import { Separator } from "@/components/ui/separator";
export default function About() {
  return (
    <div className="">
      <Intro />
      <p className="text-center lg:text-start lg:text-2xl font-mono text-white">
        Description
      </p>
      <Separator orientation="horizontal" className="my-10 bg-zinc-800" />
    </div>
  );
}
