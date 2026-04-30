import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

import picture from "../../assets/me.jpg";

interface IServiceCard {
  index: number;
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, description, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    glareColor="#aaa6c3"
    className="h-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="shadow-card rounded-[20px] p-[1px] h-full border border-[#915EFF]"
    >
      <div className="bg-tertiary flex flex-col items-center text-center rounded-[20px] p-6 sm:p-6 h-full aspect-square">
        <div className="flex-shrink-0 mb-4">
          <img
            src={icon}
            alt={title}
            className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-center text-base sm:text-lg md:text-xl font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-center text-xs sm:text-sm text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <Header useMotion={true} {...config.sections.about} />

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary mt-4 text-[17px] leading-[30px]"
          >
            {config.sections.about.content}
          </motion.p>

          <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mt-8 text-white">
            My Expertise.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-2xl mt-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center lg:justify-end">
          <motion.div
            variants={fadeIn("left", "", 0.1, 1)}
            className="relative w-full max-w-md lg:max-w-full"
          >
            <img
              src={picture}
              alt="Profile"
              className="w-full h-auto rounded-2xl object-cover shadow-xl"
            />
            
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#915EFF]/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
