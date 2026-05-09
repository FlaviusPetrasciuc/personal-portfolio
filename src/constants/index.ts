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
  siletstorytellers,
  jabberpoint
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
      "Exploring new technologies and learning the basics of web-development (HTML, CSS, JavaScript)",
      "Experimenting with Python.",
      "Deep-diving into computer science concepts and researching how computers actually work.",
      "Deciding I would like to pursue a career in IT.",
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
      "Participating in the national Dutch \"Maatschappelijke Diensttijd\" Project, using technology to raise public awareness about people with hearing difficulties."
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
      "Pursuing my first study abroad project in Braga, Portugal through the RUN-EU program in the \"AI for MedTech\" project, learning about the role of AI in medical care and how to 3D-model and print prosthetics.",
      "Working with different student groups on our first real-world projects with real clients, developing web applications using modern tools such as React, NextJS, TypeScript etc.",
      "Learning how to redesign poor-quality software by applying design patterns and debugging.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "You are a very hardworking, organized, and determined person. You are openminded, always support new ideas, and ready to help implement them. You ask questions when you do not understand something and are willing to learn more and explore new horizons. You are a friendly person who helps maintain a positive atmosphere within the team, and if any problems arise between team members, you are ready to help and find solutions. You are well organized and always do your best to finish tasks on time, which shows that you are a responsible team member. We can trust you to deliver high-quality work on time.",
    name: "Victoria Iașcevschi",
    designation: "Student",
    company: "NHL Stenden",
  },
  {
    testimonial:
      "You're definitely a competent and inspiring team leader that navigates the challenging landscape of group dynamics quite adeptly. So far, you've managed to show empathy and understanding toward all of us and struck a balance between group members tactfully. Additionally, your willingness to perform the necessary tasks for the project aided us all in having a smooth flow through the process of project completion. I am hoping to see you strive for your goals in a similarly committed manner in the future and looking forward to collaborating with you again.",
    name: "Volkan Yildirim",
    designation: "Student",
    company: "NHL Stenden",
  },
  {
    testimonial:
      "Throughout the second period I have noticed that you like taking the role of the leader. Whenever we work on the project you are the main point of focus in terms of deciding what should be done that day and in what order. You also do not just take care of leading our work, but you add a lot to the project yourself. Thanks to the organisation of work you provide, it reduces stress while working and gives me the sense of going in a right direction. This not only improves my mood, but also helps our entire group go forward with work accordingly to the schedule. I think if you keep it up you will make any team you are in move forward without major internal obstacles.",
    name: "Stefan Bryda",
    designation: "Student",
    company: "NHL Stenden",
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
      "This project consists of the development of a web application which allows employees from within a company to automate their hour logging process. The application features a registration and login system, the ability to manage projects and to import one's Outlook agenda which the system then reads to automatically log hours spent on different tasks.",
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
      "Part of the Maatscappelijke Diensttijd (MDT) project, this project aims to raise awareness about the struggles deaf individuals face in their daily lives through the creation of a website which allows persons with hearing disabilities to submit their personal stories.",
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
    image: siletstorytellers,
    sourceCodeLink: "https://github.com/KyanJeuring/Deafinity/tree/Website",
  },
  {
    name: "Jabberpoint",
    description: "This assignment focused on redesigning and reprogramming a poorly-written presentation software by applying \"Gang of 4\" design patterns, as well as fixing other errors within the software and therefore making it more efficient and properly functional. It also features a CI/CD pipeline.",
    tags: [
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Design Patterns",
        color: "pink-text-gradient",
      },
      {
        name: "UML Diagrams",
        color: "blue-text-gradient",
      },
      {
        name: "CI/CD pipeline",
        color: "yellow-text-gradient",
      }
    ],
    image: jabberpoint,
    sourceCodeLink: "https://github.com/VictoriaIascevschi/Jabberpoint-New-Version",
  }
];

export { services, technologies, experiences, testimonials, projects };
