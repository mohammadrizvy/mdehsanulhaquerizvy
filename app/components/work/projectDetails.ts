import {
  SiExpress,
  SiFirebase,
  SiJsonwebtokens,
  SiMongodb,
  SiNextui, 
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { IconType } from "react-icons";
import chicStylin from "./../../sections/Project Images/chic.stylin.png";
import rhythmRealm from "./../../sections/Project Images/rhythm-realm.png";
import { StaticImageData } from "next/image";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string | StaticImageData;
  available: boolean;
};

export const projects: ProjectProps[] = [
  {
    id: 0,
    name: "Rhythm Realm",
    description:
      "Rhythm Realm is a dynamic platform for music tutoring and taking classes, built with React. It offers personalized lessons and interactive learning experiences, helping students master their musical skills through innovative tools and engaging content.",
    technologies: [
      SiReact,
      SiTailwindcss,
      SiFirebase,
      SiJsonwebtokens,
      SiMongodb,
    ],
    techNames: ["React", "Tailwind CSS", "Firebase", "JWT", "MongoDB"],
    techLinks: [
      "https://reactjs.org/",
      "https://tailwindcss.com/",
      "https://firebase.google.com/",
      "https://jwt.io/",
      "https://www.mongodb.com/",
    ],
    github: "https://github.com/mohammadrizvy/rhythm-realm",
    demo: "https://rhythm-realm-177d3.web.app/",
    image: rhythmRealm,
    available: true,
  },
  {
    id: 1,
    name: "chic.stylin",
    description:
      "chic.stylin is a React-based shopping website that provides a seamless and engaging online shopping experience, featuring a wide range of products and user-friendly navigation.",
    technologies: [SiReact, SiNextui, SiFirebase, SiExpress, SiMongodb], // Using SiNextdotjs as a placeholder
    techNames: ["React", "Next.ui", "Firebase", "Express.js", "MongoDB"],
    techLinks: [
      "https://reactjs.org/",
      "https://nextjs.org/",
      "https://firebase.google.com/",
      "https://expressjs.com/",
      "https://www.mongodb.com/",
    ],
    github: "https://github.com/mohammadrizvy/chic-stylin-client",
    demo: "https://chic-stylin.web.app/",
    image: chicStylin,
    available: true,
  },
];
