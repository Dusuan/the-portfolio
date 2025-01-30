"use client";

import { Badge } from "@/components/ui/badge";
import { LogOut } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Separator } from "@/components/ui/separator";

const technologies1 = [
  { text: "SpringBoot", logo: "/next.svg" },
  { text: "JavaScript", logo: "/globe.svg" },
  { text: "React", logo: "/file.svg" },
];

const technologies2 = [
  { text: "Python", logo: "/globe.svg" },
  { text: "C++", logo: "/globe.svg" },
  { text: "Typescript", logo: "/globe.svg" },
];

const technologies3 = [
  { text: "PostgreSQL", logo: "/globe.svg" },
  { text: "Datagrip", logo: "/globe.svg" },
  { text: "Hibernate", logo: "/globe.svg" },
];
const technologies4 = [
  { text: "PostgreSQL", logo: "/globe.svg" },
  { text: "Datagrip", logo: "/globe.svg" },
  { text: "Hibernate", logo: "/globe.svg" },
];
export default function () {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <Separator orientation="horizontal" className="my-10 bg-zinc-700" />

      <div className="mt-10 max-h-full max-w-full text-center">
        <p className="m-0 text-5xl md:text-6xl font-extrabold">MY </p>
        <p className="m-0 text-4xl md:text-5xl font-extrabold mb-6 text-zinc-600">
          TECHNOLOGIES
        </p>{" "}
      </div>
      <div className="relative w-96 border border-1 border-zinc-700 rounded-lg">
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
  );
}
