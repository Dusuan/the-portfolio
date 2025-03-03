import HeaderButton from "./HeaderButton";
import { ChevronUp } from "lucide-react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerDescription,
  DrawerTitle,
  
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
    <div className="flex sticky top-10 mb-10 md:top-0 md:mt-0 md:h-20 z-20 text-white items-center justify-center">
      <div className=" hidden md:flex md:items-center md:justify-center rounded-xl bg-neutral-900 border border-neutral-700 w-full h-4/6">
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
            <ChevronUp className="sticky rounded-full hover:bg-neutral-900 active:bg-neutral-700" />
          </DrawerTrigger>
          <DrawerContent
            key="content"
            className="fixed items-center bg-neutral-900 "
          >
            <DrawerTitle key="title"></DrawerTitle>
            <DrawerDescription key="description"></DrawerDescription>
            <DrawerHeader
              key="header"
              className="font-bold text-2xl text-neutral-400"
            ></DrawerHeader>
            {Buttons.map((button) => (
              <div key={button.href}>
                <HeaderButton text={button.text} href={button.href} />
                <Separator orientation="horizontal" className=" bg-neutral-400" />
              </div>
            ))}
            <DrawerFooter>ccc</DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
