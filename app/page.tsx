"use client";

import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { TracingBeam } from "@/ui/tracing-beam";
import { FloatingNav } from "@/ui/floating_navbar";
import { IconHome, IconUser, IconMessage, IconStars} from "@tabler/icons-react";

export default function Home() {

  const navItems = [
    {
      name: "Home",
      link: "#",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
   
    {
      name: "Projects",
      link: "#projects",
      icon: <IconStars className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <main className="relative bg-black-100 text-white flex flex-col w-full overflow-hidden">
   
      <FloatingNav navItems={navItems} />

      <TracingBeam className="px-8">
        <Hero />

        <div id="main-content" className="space-y-20 md:space-y-28">
          <section id="about" aria-label="About section"><About /></section>
          <section id="expertise" aria-label="Expertise section"><Expertise /></section>
          <section id="skills" aria-label="Skills section"><Skills /></section>
          <section id="projects" aria-label="Projects section"><Projects /></section>
          <section id="contact" aria-label="Contact section"><Contact /></section>
        </div>

      
      </TracingBeam>

        <Footer />
    </main>
  );
}
