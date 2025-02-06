"use client";

import { Badge } from "@/components/ui/badge";
import { LogOut } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Separator } from "@/components/ui/separator";

const technologies1 = [
  { text: "C", logo: "/c.svg" },
  { text: "C++", logo: "/cplusplus.svg" },
  { text: "JavaScript", logo: "/javascript.svg" },
  { text: "TypeScript", logo: "/typescript.svg" },
  { text: "Python", logo: "/python.svg" },
  { text: "Java", logo: "/java-icon.svg" },
];

const technologies2 = [
  { text: "Figma", logo: "/figma.svg" },
  { text: "Html", logo: "/html5.svg" },
  { text: "CSS", logo: "/css.svg" },
  { text: "Tailwind", logo: "/tailwind.svg" },
  { text: "Node.js", logo: "/nodedotjs.svg" },
  { text: "Next.js", logo: "/nextdotjs.svg" },
  { text: "Puppeteer", logo: "/puppeteer.svg" },
  { text: "React", logo: "/react.svg" },
];

const technologies3 = [
  { text: "Docker", logo: "/docker.svg" },
  { text: "Git", logo: "/git.svg" },
  { text: "Github", logo: "/github.svg" },
  { text: "Postman", logo: "/postman.svg" },
  { text: "Render", logo: "/render.svg" },
  { text: "Vercel", logo: "/vercel.svg" },
  { text: "Express", logo: "/express.svg" },
];
const technologies4 = [
  { text: "PostgreSQL", logo: "/postgresql.svg" },
  { text: "Supabase", logo: "/supabase.svg" },
  { text: "SpringBoot", logo: "/springboot.svg" },
];
export default function () {
  return (
    <div>
      <Separator orientation="horizontal" className="my-10 bg-zinc-700" />

      <div className="mt-10 max-h-full max-w-full text-center lg:text-start">
        <p className="m-0 text-5xl md:text-6xl font-extrabold ">MY </p>
        <p className="m-0 text-4xl md:text-5xl font-extrabold mb-6 text-zinc-600">
          TECHNOLOGIES
        </p>{" "}
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start overflow-hidden">
        <div className="relative w-96 lg:w-[470px] 2xl:w-[750px] 3xl:w-[1200px] border border-1 border-zinc-700 rounded-lg">
          <Marquee
            className="my-2"
            autoFill={true}
            speed={10}
            pauseOnHover={true}
          >
            {technologies1.map((technology, index) => (
              <div key={index}>
                <Badge className="h-8 fit flex justify-center border border-zinc-700 items-center">
                  <Image
                    width={20}
                    height={20}
                    className="mr-2"
                    priority
                    src={technology.logo}
                    alt={technology.text}
                  />
                  {technology.text}
                </Badge>
              </div>
            ))}
          </Marquee>
          <Marquee
            autoFill={true}
            speed={10}
            direction="right"
            pauseOnHover={true}
            className="my-2"
          >
            {technologies2.map((technology, index) => (
              <Badge
                className="h-8 fit flex justify-center border border-zinc-700  items-center"
                key={index}
              >
                <Image
                  width={20}
                  height={20}
                  className="mr-2"
                  priority
                  src={technology.logo}
                  alt={technology.text}
                />
                {technology.text}
              </Badge>
            ))}
          </Marquee>
          <Marquee
            className="my-2"
            autoFill={true}
            speed={10}
            pauseOnHover={true}
          >
            {technologies3.map((technology, index) => (
              <Badge
                className="h-8 fit flex justify-center border border-zinc-700  items-center"
                key={index}
              >
                <Image
                  width={20}
                  height={20}
                  className="mr-2"
                  priority
                  src={technology.logo}
                  alt={technology.text}
                />
                {technology.text}
              </Badge>
            ))}
          </Marquee>
          <Marquee
            autoFill={true}
            speed={10}
            direction="right"
            pauseOnHover={true}
            className="my-2"
          >
            {technologies4.map((technology, index) => (
              <Badge
                className="h-8 fit flex justify-center border border-zinc-700  items-center"
                key={index}
              >
                <Image
                  width={20}
                  height={20}
                  className="mr-2"
                  priority
                  src={technology.logo}
                  alt={technology.text}
                />
                {technology.text}
              </Badge>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
