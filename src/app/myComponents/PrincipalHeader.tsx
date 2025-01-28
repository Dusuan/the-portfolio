import HeaderButton from "./HeaderButton";
import { Button } from "../../components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerDescription,
  DrawerTitle,
  DrawerClose,
} from "../../components/ui/drawer";
import { Separator } from "@radix-ui/react-separator";

type NavigateButton = {
  text: string;
  href: string;
};

type NavigateButtons = {
  Buttons: NavigateButton[];
};

export default function PrincipalHeader({ Buttons }: NavigateButtons) {
  return (
    <div className="flex sticky top-10 mt-10 md:top-0 md:mt-0 md:h-20 z-20 text-white items-center justify-center">
      <div className=" hidden md:flex md:items-center md:justify-center rounded-xl bg-zinc-900 w-full h-4/6">
        {Buttons.map((button) => (
          <HeaderButton
            key={button.href}
            text={button.text}
            href={button.href}
          />
        ))}
      </div>
      <div className="md:hidden">
        <Drawer>
          <DrawerTrigger className=" animate-bounce   active:scale-95">
            <ChevronUp className="sticky rounded-full hover:bg-zinc-900 active:bg-zinc-700" />
          </DrawerTrigger>
          <DrawerContent
            key="content"
            className="fixed items-center bg-zinc-900 "
          >
            <DrawerTitle key="title"></DrawerTitle>
            <DrawerDescription key="description"></DrawerDescription>
            <DrawerHeader
              key="header"
              className="font-bold text-2xl text-zinc-400"
            ></DrawerHeader>
            {Buttons.map((button) => (
              <div>
                <HeaderButton
                  key={button.href}
                  text={button.text}
                  href={button.href}
                />
                <Separator orientation="horizontal" className=" bg-zinc-400" />
              </div>
            ))}
            <DrawerFooter>ccc</DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
