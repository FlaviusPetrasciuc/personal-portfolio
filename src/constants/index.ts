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
  git,
  figma,
  docker,
  php,
  java,
  lua,
  nestjs,
  sql,
  github,
  arduino,
  jira,
  nhlstendenexplorer,
  smarttimeregistration,
  tripguide,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills"
  },
  {
    id: "work",
    title: "Projects",
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
    name: "PHP",
    icon: php,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Lua",
    icon: lua,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "NestJS",
    icon: nestjs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Arduino",
    icon: arduino,
  },
  {
    name: "Jira - Scrum",
    icon: jira,
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
    name: "NHL Stenden Explorer",
    description:
      "This project entailed the development of a web application which allows students, visitors and staff at NHL Stenden to explore the Emmen campus and learn about the facilities provided at the location in an accessible way. It includes interactive elements and features such as 360-degree images and a virtual guide.",
    tags: [
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "orange-text-gradient",
      },
      {
        name: "Docker",
        color: "yellow-text-gradient",
      }
    ],
    image: nhlstendenexplorer,
    sourceCodeLink: "https://github.com/KyanJeuring/NHLStendenExplorer",
  },
  {
    name: "Smart Time Registration",
    description:
      "This project required the development of a web application which allows employees from within a company to automate their hour logging process. The application features a registration and login system, the ability to manage projects and to import one's Outlook agenda which the system then reads to automatically log hours spent on different tasks.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "NestJS",
        color: "yellow-text-gradient",
      },
      {
        name: "TypeScript",
        color: "orange-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      }
    ],
    image: smarttimeregistration,
    sourceCodeLink: "https://github.com/oomfrikkie/SmartTimeRegistration",
  },
  {
    name: "Silent Storytellers",
    description:
      "Part of the Maatscappelijke Diensttijd (MDT) project, this project aims to raise awareness about the struggles deaf individuals face in their daily lives through the creation of a website which allows them to submit their stories.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "orange-text-gradient",
      },
      {
        name: "Docker",
        color: "yellow-text-gradient",
      },
      {
        name: "Responsive Design",
        color: "pink-text-gradient",
      }
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/KyanJeuring/Deafinity/tree/Website",
  },
  {
    name: "SSM Product Passport and Tracking",
    description: "This project is about helping a simulated factory system to comply with new EU regulations on product passports. This was done by establishing a connection between the factory and a centralized source of truth, composed of two integrated databases.",
    tags: [
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "GraphQL",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      }
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/KyanJeuring/SSMProductPassportAndTracking",
  }
];

export { services, technologies, experiences, testimonials, projects };
