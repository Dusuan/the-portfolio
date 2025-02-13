
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import prisma from "@/lib/prisma";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().nonempty({
    message: "Please write your name",
  }),
  email: z.string().email().nonempty(),
  message: z.string().nonempty({
    message: "Please write a message",
  }),
});

async function PostMessage(data: z.infer<typeof formSchema>) {
  await fetch("/api/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export default function Contact () {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  

  function onSubmit(values: z.infer<typeof formSchema>) {
    PostMessage(values);
    form.reset();
  }

  return (
    <div id="contact" className="mb-64">
      <div className="mt-10 text-center lg:text-start">
        <p className="m-0 text-5xl md:text-6xl xl:text-7xl font-extrabold">
          SEND ME A{" "}
        </p>
        <p className="m-0 text-5xl md:text-6xl xl:text-7xl font-extrabold mb-6 text-neutral-600">
          MESSAGE
        </p>{" "}
      </div>

      <div className="mb-32 items-start ">
        <Form {...form}>
          <form
            className="flex flex-col font-mono border bg-neutral-900 border-neutral-900 rounded-lg"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div
              className="flex w-full gap-4 mb-8
            "
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl className="bg-neutral-800 border-neutral-900 rounded-lg p-4">
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl className="bg-neutral-800 border-neutral-900 rounded-lg p-4">
                      <Input placeholder="Your Email" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="mb-2 ">
                  <FormLabel>Message</FormLabel>
                  <FormControl className="bg-neutral-800  border-neutral-900 rounded-lg p-4">
                    <Textarea
                      placeholder="Your message"
                      {...field}
                      className="h-36"
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="hover:bg-neutral-700" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
