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
    skills: TSection;
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
    p: ["Information Technology student at NHL Stenden,", "aspiring full-stack developer and software engineer.", "Currently looking for an internship."],
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
      content: `I'm Flavius, a second year Information Technology student at NHL Stenden University of Applied Sciences.
      I have been passionate about technology for the last couple of years and decided to pursue a career in this field. 
      I enjoy combining creative aspects with technology, and strive for high quality. I am in search of 
      new opportunities to grow and develop.
      Let's work together!`,
    },
    experience: {
      p: "Where it all started",
      h2: "My Learning Journey.",
    },
    skills: {
      p: "What do I work with?",
      h2: "My Skills",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Over the last two years at NHL Stenden, I have worked on numerous IT projects
      with real clients and companies, creating meaningful software solutions while gaining new 
      technical knowledge and experience. Check out my projects down below.`,
    },
  },
};
