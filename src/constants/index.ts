import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";


import {
  code,
  server,
  thumb,
  paintbrush,
  roblox,
  nhlstenden,
  explore,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills"
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Frontend Development",
    description: "HTML5, CSS, React, JavaScript",
    icon: code,
  },
  {
    title: "Backend Development",
    description: "PHP, TypeScript, NestJS, Java",
    icon: server,
  },
  {
    title: "Software Quality",
    description: "Clean Code Principles, Software Design Patterns",
    icon: thumb,
  },
  {
    title: "UI/UX Design",
    description: "Figma, Wireframing",
    icon: paintbrush,
  }
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Beginner Game Developer",
    icon: roblox,
    iconBg: "#383E56",
    date: "March 2020 - August 2024",
    points: [
      "Researching game development through Roblox Studio.",
      "Learning how to write my first ever lines of code in Lua.",
      "Developing my first game in Roblox.",
      "Joining different Roblox game development groups and working closely with international teams to develop real, playable Roblox games.",
    ],
  },
  {
    title: "Tech Explorer",
    icon: explore,
    iconBg: "#E6DEDD",
    date: "January 2022 - August 2024",
    points: [
      "Exploring new technologies and learning web-development (HTML, CSS, JavaScript)",
      "Experimenting with Python and solving problems.",
      "Deep-diving into computer science concepts and researching how computers actually work.",
      "Realizing I would like to pursue a career in IT.",
    ],
  },
  {
    title: "First Year IT Student",
    companyName: "NHL Stenden",
    icon: nhlstenden,
    iconBg: "#ffff",
    date: "September 2024 - July 2025",
    points: [
      "Deep-diving into web development, exploring both frontend and backend.",
      "Learning PHP and how to work with forms, databases, dynamic data rendering, sessions etc.",
      "Studying database engineering and design, creating ERDs and applying normalization.",
      "Learning about servers, computer networks, virtual machines and basic security practices.",
      "Learning about Object Oriented Programming in Java and how to build UML class diagrams.",
      "Learning how to work with Arduino and programming my first robot, capable of picking up objects, following a track and avoiding obstacles.",
      "Taking part in the national Dutch Maatschappelijke Diensttijd Project, using technology to raise public awareness about people with hearing problems."
    ],
  },
  {
    title: "Second Year IT Student",
    companyName: "NHL Stenden",
    icon: nhlstenden,
    iconBg: "#E6DEDD",
    date: "September 2025 - Present",
    points: [
      "Deep-diving into Object Oriented Programming in Java, learning about complex concepts like inheritance, polymorphism, interfaces, and how to design complex software through different kinds of UML diagrams.",
      "Pursuing my first study abroad project in Braga, Portugal through the RUN-EU program in the AI for MedTech project, learning about the role of AI in medical care and how to 3D-model and print prosthetics.",
      "Working with different student groups on our first real-world projects with real clients, developing web applications using modern tools such as React, NextJS, TypeScript etc.",
      "Learning how to redesign poor-quality software by applying design patterns and debugging.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
