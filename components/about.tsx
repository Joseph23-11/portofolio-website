"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a Bachelor of Information Engineering student{" "}
        <span className="font-bold">at Gadjah Mada University</span>,{" "}
        <span>who likes to alone or in a team.</span> I am proficient in using
        frameworks such as <span className="font-bold">React and Next.js</span>{" "}
        to build websites, because they make it{" "}
        <span className="underline">easy</span> to develop applications using
        JavaScript and React. Specifically, React is used to{" "}
        <span className="italic">build the UI on websites</span>, while NextJS
        is a framework{" "}
        <span className="italic">
          that simplifies web application development
        </span>{" "}
        with React. And I'm also a{" "}
        <span className="font-bold">mobile developer</span> using the{" "}
        <span className="font-bold">Flutter</span> framework because{" "}
        <span className="italic">cross-platform</span>, so it makes it easier
        for me to develop mobile applications with 2 or more devices.
      </p>
      <p>
        Additionally, I possess expertise in{" "}
        <span className="underline">designing</span> user interfaces and
        experiences utilizing software such as{" "}
        <span className="font-bold">Figma</span>.{" "}
        <span className="italic">When I'm not coding</span>, I like to watch TV
        series and play drums. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I'm currently
        studying law.
      </p>
    </motion.section>
  );
}
