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

export default function Me() {
  return (
    <div className="mt-10 ">
      <Card>
        <CardContent className="p-6 flex justify-between">
          <div className="relative h- w-40">
            <Image
              className="rounded-lg"
              fill={true}
              alt="My photo"
              src="/dusuanA.jpg"
            />
          </div>
          <div className="flex flex-col">
            <CardTitle>Juan Sandoval</CardTitle>
            <Button size={"sm"} className="mt-2">
              <Icon src={"/github.svg"} w={8} h={8} alt={"GithubLogo"} />
              Github
            </Button>
            <Button size={"sm"} className="mt-2">
              <Icon src={"/github.svg"} w={1} h={1} alt={"GithubLogo"} />
              Portfolio
            </Button>
            <Button size={"sm"} className="mt-2">
              <Icon src={"/github.svg"} w={1} h={1} alt={"GithubLogo"} />
              Linkedin
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
