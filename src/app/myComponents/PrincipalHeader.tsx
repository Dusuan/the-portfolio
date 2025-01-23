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
    <div className="flex h-20 bg-zinc-950 text-white items-center justify-center">
      <div className="hidden md:flex md:items-center md:justify-center rounded-xl bg-zinc-900 w-3/6 h-4/6">
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
          <DrawerTrigger className="animate-bounce  active:bg-zinc-100 active:scale-95">
            <ChevronUp />
          </DrawerTrigger>
          <DrawerContent className="flex items-center bg-zinc-900 ">
            <DrawerTitle></DrawerTitle>
            <DrawerDescription></DrawerDescription>
            <DrawerHeader className="font-bold text-2xl text-zinc-400"></DrawerHeader>
            {Buttons.map((button) => (
              <div>
                <HeaderButton
                  key={button.href}
                  text={button.text}
                  href={button.href}
                />
                <Separator orientation="horizontal" className="bg-zinc-400" />
              </div>
            ))}
            <DrawerFooter>ccc</DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
