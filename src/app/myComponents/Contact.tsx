"use client";
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
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email().nonempty(),
  message: z.string().nonempty(),
});

export default function () {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message:"",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div id="contact">
      <div className="mt-10 text-center lg:text-start">
        <p className="m-0 text-5xl md:text-6xl font-extrabold">SEND ME A </p>
        <p className="m-0 text-5xl md:text-6xl font-extrabold mb-6 text-zinc-600">
          MESSAGE
        </p>{" "}
      </div>

      <div className="mb-32  items-start ">
        <Form {...form}>
          <form
            className="flex flex-col border bg-zinc-900 border-zinc-700 rounded-lg p-10"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="flex w-full gap-4
            ">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl className="bg-zinc-900 border border-zinc-500 rounded-lg p-4">
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl className="border-zinc-500  bg-zinc-900 rounded-lg p-4">
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
              name="name"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel>Message</FormLabel>
                  <FormControl className="border-zinc-500  bg-zinc-900 rounded-lg p-4">
                    <Textarea placeholder="Your message" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
