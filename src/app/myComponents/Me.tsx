import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Me() {
  return (
    <div className="mt-10">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="1">
          <AccordionTrigger>I'm</AccordionTrigger>
          <AccordionContent>
            <div className="border-t border-b bg-zinc-500 border-gray-200 p-4"> 
                <p className="text-gray-800 text-lg">I'm a software engineer</p>        
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
