"use client";

import { Badge } from "@/components/ui/badge";
import { useEffect, useState, useRef } from "react";
import React from "react";
import Marquee from "react-fast-marquee";

export default function () {
  return (
    <div>
      <div className="mt-10 max-h-full max-w-full text-center">
        <p className="m-0 text-4xl md:text-5xl font-extrabold">MY </p>
        <p className="m-0 text-4xl md:text-5xl font-extrabold mb-6 text-zinc-600">
          TECHNOLOGIES
        </p>{" "}
      </div>
      <div className="w-96">
        <Marquee autoFill={true} speed={10} pauseOnHover={true}>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
        </Marquee>
        <Marquee autoFill={true} speed={10} direction="right" pauseOnHover={true}>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
        </Marquee>
        <Marquee autoFill={true} speed={10} pauseOnHover={true}>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
          <Badge>NO</Badge>
        </Marquee>
      </div>
    </div>
  );
}
