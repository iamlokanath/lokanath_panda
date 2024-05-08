"use client";
import React from 'react'

import { ContainerScroll } from "@/app/components/ui/container-scroll-animation";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import Image from "next/image";
import Lokanath from "@/public/Image/codingWallpaper.jpg";
function About() {

    const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;


  return (
    <>
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
      titleComponent={
        <>
          {/* <h1 className="text-4xl font-semibold text-black dark:text-white">
            Unleash the power of <br />
            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Scroll Animations
            </span>
          </h1> */}
        </>
      }
      >
        <Image
          src={Lokanath}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
    {/* <div className=' flex items-center justify-center'>
    <div className="w-full md:w-[1000px]">
          <TextGenerateEffect words={words} />
        </div>
    </div> */}
    </>
  )
}

export default About
