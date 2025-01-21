import HeaderButton from "./HeaderButton";
import { Button } from "../../components/ui/button";
import { ChevronDown } from "lucide-react";
type MyButton = {
  text: string;
  href: string;
};

type ButtonProps = {
  Buttons: MyButton[];
};

export default function PrincipalHeader({ Buttons }: ButtonProps) {
  return (
    <div className="flex h-20 bg-zinc-950 text-white items-center justify-center">
      <div className="hidden md:flex rounded-xl bg-zinc-900 w-3/6 h-4/6">
        {Buttons.map((button) => (
          <HeaderButton
            key={button.href}
            text={button.text}
            href={button.href}
          />
        ))}
      </div>
      <div className="md:hidden">
        <Button size="icon">
          <ChevronDown />
        </Button>
      </div>
    </div>
  );
}
