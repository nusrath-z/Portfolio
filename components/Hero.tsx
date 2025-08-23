"use client";

import React from "react";
import Image from "next/image";
import me3 from "../public/me3.png";
import { IconDownload, IconMail } from "@tabler/icons-react";
import { HoverBorderGradient } from "@/ui/hover-border-gradient";
import { ContainerTextFlip } from "@/ui/container-text-flip";
import { Spotlight } from "@/ui/spotlight-new";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 py-16 md:py-24">
      {/* Background effect */}
      <Spotlight />

      {/* Portrait */}
      <div className="z-10 flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md order-1 md:order-2">
        <Image
          src={me3}
          alt="Portrait of Nusrath Zaman"
          priority
          className="w-full h-auto rounded-2xl object-cover mask-radial-at-center mask-radial-from-white"
        />
      </div>

      {/* Text content */}
      <div className="z-10 flex-1 w-full text-center md:text-left order-2 md:order-1">
        <p className="text-base text-gray-300">Hi, I&apos;m</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Nusrath Zaman
        </h1>
        <ContainerTextFlip
          className="mt-2 text-lg sm:text-xl md:text-2xl text-gray-200"
          words={["Software Engineer", "Full-Stack Developer", "Machine Learning Enthusiast"]}
        />

        <p className="mt-4 max-w-2xl text-gray-300 mx-auto md:mx-0">
          Recent Software Engineering graduate building accessible, performant products.
          I love turning ideas into polished, production-ready experiences.
        </p>

        <div className="mt-6 flex gap-3 justify-center md:justify-start">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open resume in new tab">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="px-6 py-2 bg-black text-white flex items-center"
            >
              <span>Resume</span>
              <IconDownload className="ml-2" />
            </HoverBorderGradient>
          </a>

          <a href="#contact" aria-label="Jump to contact section">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="px-6 py-2 bg-white text-black dark:bg-black dark:text-white flex items-center"
            >
              <span>Contact</span>
              <IconMail className="ml-2" />
            </HoverBorderGradient>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
