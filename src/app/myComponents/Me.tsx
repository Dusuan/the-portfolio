"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Name from "../myComponents/Name";

type MeProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Me({ isOpen, setIsOpen }: MeProps) {
  return (
    <div className="my-10 h-full font-mono flex justify-center items-center">
      <Card className="flex h-full bg-neutral-900 border border-neutral-700">
        <CardContent className="flex-col  md:flex p-6 w-full flex lg:flex-col justify-between">
          <div className="flex w-full justify-center items-center relative min-w-52">
            <Image
              className="rounded-lg"
              height={200}
              width={200}
              alt="My photo"
              src="/2.jpg"
            />
          </div>
          <Separator orientation="horizontal" className="my-5 bg-zinc-800" />

          <div className="text-neutral-50 flex w-full items-center  flex-col">
            <div>
              <CardTitle className="flex flex-col items-center">
                <Name />
                Sandoval
              </CardTitle>
            </div>
            <div className="flex flex-col items-center w-2/3">
              <Button
                asChild
                size={"sm"}
                className="mt-4 w-full"
                variant={"default"}
              >
                <Link href={"https://github.com/Dusuan"}>
                  <Image
                    width={20}
                    height={20}
                    priority
                    src={"/github.svg"}
                    alt={"Github"}
                  />{" "}
                </Link>
              </Button>

              <Button asChild size={"sm"} className="items-center w-full mt-4">
                <Link
                  href={"https://www.linkedin.com/in/juan-sandoval-195700297/"}
                >
                  <Image
                    width={20}
                    height={20}
                    className="invert"
                    priority
                    src={"/linkedin.svg"}
                    alt={"Linkedin"}
                  />{" "}
                </Link>
              </Button>
              <Button
                size={"sm"}
                onClick={() => setIsOpen(!isOpen)}
                className="mt-4 w-full active:border active:border-neutral-200"
              >
                <Image
                  width={20}
                  height={20}
                  className="invert"
                  priority
                  src={"/cv.svg"}
                  alt={"Resume"}
                />{" "}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
