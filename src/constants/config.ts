type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    info: {
      email: {
        span: string;
        placeholder: string;
      };
      phone: {
        span: string;
        placeholder: string;
      };
      location: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Flavius Petrasciuc",
    fullName: "Flavius Sebastian Petrasciuc",
    email: "flavius.petrasciuc5@gmail.com",
  },
  hero: {
    name: "Flavius Petrasciuc",
    p: ["Information Technology student,", "aspiring full-stack developer and software engineer."],
  },
  contact: {
    p: "Get in touch - Let's build something together",
    h2: "Contact information.",
    info: {
      email: {
        span: "Email",
        placeholder: "flavius.petrasciuc5@gmail.com",
      },
      phone: {
        span: "Phone",
        placeholder: "+31 6 47083179",
      },
      location: {
        span: "Location",
        placeholder: "Emmen, Netherlands",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "About me.",
      content: `I'm a skilled software developer with experience in TypeScript and
      JavaScript, and expertise in frameworks like React, Node.js, and
      Three.js. I'm a quick learner and collaborate closely with clients to
      create efficient, scalable, and user-friendly solutions that solve
      real-world problems. Let's work together to bring your ideas to life!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
