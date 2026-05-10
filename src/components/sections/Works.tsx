import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="w-full">
      <div className="bg-tertiary rounded-2xl h-full flex flex-col border border-[#915EFF]/20 hover:border-[#915EFF] transition duration-300 overflow-hidden">

        <div className="relative h-[200px] sm:h-[220px] w-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition duration-500 hover:scale-110"
          />

          <div className="absolute top-2 right-2 z-10">
            <div
              onClick={() => window.open(sourceCodeLink, "_blank")}
              className="bg-black/70 backdrop-blur-sm flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-[#915EFF] transition duration-300"
            >
              <img
                src={github}
                alt="github"
                className="h-4 w-4 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-5 flex-1">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
            {name}
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag.name}
                className={`${tag.color} text-xs sm:text-sm px-3 py-1 rounded-full border border-[#915EFF]/50 hover:border-[#915EFF] hover:scale-105 transition duration-300`}
              >
                {tag.name}
              </button>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  );
};



const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <a
        href="https://github.com/FlaviusPetrasciuc"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl px-4 py-3 hover:border-2 bg-tertiary border border-[#915EFF]/20 hover:border-[#915EFF] transition duration-300 mt-10 mx-auto flex items-center justify-center gap-2 w-fit"
      >
        View All Projects
        <img src={github} alt="github logo" className="w-5 h-5 object-contain" />
      </a>
    </>
  );
};

export default SectionWrapper(Works, "work");
