import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { fadeIn } from "../../utils/motion";

const Tech = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.skills} />

      <div className="flex flex-row flex-wrap justify-center gap-6 mt-10">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            className="w-28"
          >
            <Tilt
              glareEnable
              tiltEnable
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareColor="#aaa6c3"
              className="h-full"
            >
              <div className="bg-tertiary flex flex-col items-center text-center rounded-[20px] p-3 sm:p-4 border border-[#915EFF]">
                <div className="flex-shrink-0 mb-2">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
                  />
                </div>

                <div>
                  <p className="text-center text-[10px] sm:text-xs text-gray-300 leading-tight break-words">
                    {technology.name}
                  </p>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
