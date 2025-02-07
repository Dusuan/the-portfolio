import Intro from "./Intro";
import { Separator } from "@/components/ui/separator";
export default function About() {
  return (
    <div className="">
      <Intro />
      <p className="text-center lg:text-start lg:text-2xl font-mono">
        Hi, Welcome to my little corner of the internet, I'm a software
        developer that enjoys coding since highschool and is currently studying
        software engineering at Cetys Universidad, I like to develop projects on
        my free time and learn new technologies every single day as well as to
        create cool stuff!
      </p>
      <Separator orientation="horizontal" className="my-10 bg-zinc-700" />
    </div>
  );
}
