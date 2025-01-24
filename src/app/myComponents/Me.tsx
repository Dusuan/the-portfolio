import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
export default function Me() {
  return (
    <div className="mt-10 ">
      <div className="flex flex-col  justify-center items-center border-t border-b rounded-xl bg-zinc-50 border-gray-200 p-4">
        <div>
          <Image
            className="rounded-lg"
            width="200"
            height="200"
            alt="My photo"
            src="/dusuanA.jpg"
          />
        </div>
        <div>
          <p className="text-gray-800 text-lg">
            Passionate software developer who leads ways to solutions
          </p>
        </div>
      </div>
    </div>
  );
}
