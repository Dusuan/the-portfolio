"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import HeaderButton from "./HeaderButton";
import Image from "next/image";
import Icon from "./Icon";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

type MeProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Me({ isOpen, setIsOpen }: MeProps) {
  return (
    <div className="ease-in mt-10 h-full w-full font-mono flex justify-center items-center">
      <Card className="flex h-full w-full bg-neutral-900 border border-neutral-700">
        <CardContent className="p-6 flex lg:flex-col justify-between">
          <div className="flex justify-center items-center relative w-52">
            <Image
              className="rounded-lg"
              height={300}
              width={400}
              alt="My photo"
              src="/dusuanpelon.jpg"
            />
          </div>
          <Separator
            orientation="horizontal"
            className="hidden lg:block lg:my-4 bg-neutral-800"
          />
          <Separator
            orientation="vertical"
            className="relative mx-8 lg:mx-0 lg:hidden bg-neutral-800"
          />

          <div className="text-neutral-50 flex  items-center  flex-col">
            <div >
              <CardTitle >Juan Sandoval</CardTitle>
            </div>
            <div className="flex flex-col items-center w-full">
              <Button asChild size={"sm"} className="mt-4 w-full" variant={"default"}>
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
                onClick={() => setIsOpen((prev) => !prev)}
                className="mt-4 w-full active:border active:border-neutral-200"
              >
                Resume
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
