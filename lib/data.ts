import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import dietappImg from "@/public/dietapp.png";
import travelImg from "@/public/travel_course.png";
import topupGameImg from "@/public/topup_game.png";
import { FaReact } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Information Technology Intern",
    location: "Bekasi Regency, Indonesia",
    description:
      "Internship in National Land Agency of Bekasi Regency in order to fulfill Industrial Internship Course in Gadjah Mada University. Became a developer who created the office website using the React JS framework, database using mongodb and using MVVM as its architecture. Then our aim was to create the LAMPION website so that people could access land certificates without the need to come directly to the office.",
    icon: React.createElement(FaReact),
    date: "Jan 2022 - March 2022",
  },
] as const;

export const projectsData = [
  {
    title: "DietAja App",
    description:
      "The mobile application (DietAja) is an application developed with the aim of providing practical solutions for users who want to manage diet programmes and easily find information about the types of food consumed according to their dietary needs.",
    tags: ["Flutter", "GetX", "MySQL", "Laravel", "MVVM architecture"],
    imageUrl: dietappImg,
  },
  {
    title: "Travel Clean Architecture",
    description:
      "This travel application was developed to make a mobile application more complex using the clean architecture method. This application has a search function for tourist attractions based on all categories, top ratings and search by tourist name.",
    tags: ["Clean Architecture", "Flutter", "BLoc", "Paralax", "PHP", "Get It"],
    imageUrl: travelImg,
  },
  {
    title: "Top Up Game",
    description:
      "This application is a top up game developed by a full stack developer. for the frontend itself converts HTML slicing into Next.js and for the backend uses Node.js in the process of routing, middleware, database integration to testing, and integration MidTrans to payment member page.",
    tags: [
      "Node.js",
      "Next.js",
      "MongoDb",
      "Tailwind",
      "Express.js",
      "Typescript",
    ],
    imageUrl: topupGameImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Dart",
  "Flutter",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "MySQL",
  "Laravel",
  "PHP",
  "Python",
] as const;
