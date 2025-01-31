import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import HeaderButton from "./HeaderButton";
import Image from "next/image";
import Icon from "./Icon";
import { Separator } from "@/components/ui/separator";

export default function Me() {
  return (
    <div className="mt-10 h-96 w-full flex justify-center items-center">
      <Card className="flex h-full w-full bg-zinc-900 border border-zinc-700">
        <CardContent className="p-6 flex justify-between">
          <div className="relative w-40">
            <Image
              className="rounded-lg"
              fill={true}
              alt="My photo"
              src="/dusuanpelon.jpg"
            />
          </div>
          <Separator orientation="vertical" className="mx-6 bg-zinc-800" />

          <div className="text-zinc-300 flex flex-col">
            <CardTitle>Juan Sandoval</CardTitle>
            <Button size={"sm"} className="mt-2" variant={"default"}>
              <Image
                width={20}
                height={20}
                className="invert"
                priority
                src={"/github.svg"}
                alt={"Github"}
              />{" "}
            </Button>

            <Button size={"sm"} className="items-center mt-2">
              <Image
                width={20}
                height={20}
                className="invert"
                priority
                src={"/linkedin.svg"}
                alt={"Linkedin"}
              />{" "}
            </Button>
            <Button size={"sm"} className="mt-2 font-mono">
              Resume
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
