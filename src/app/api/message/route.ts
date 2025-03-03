import prisma from "@/lib/prisma";
import z from "zod";
import { NextResponse } from "next/server";

const formSchema = z.object({
  name: z.string().nonempty({
    message: "Please write your name",
  }),
  email: z.string().email().nonempty(),
  message: z.string().nonempty({
    message: "Please write a message",
  }),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = formSchema.parse(body);
    const message = await prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        message: data.message,
      },
    });
    return NextResponse.json(message);
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: "bruh" },
      { status: 500 }
    );
  }
}
