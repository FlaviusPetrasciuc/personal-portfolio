import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

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
      <div className="bg-tertiary flex flex-row items-center rounded-[20px] p-6 sm:p-8 md:p-10 gap-6 h-full">
        <div className="flex-shrink-0">
          <img
            src={icon}
            alt={title}
            className="h-14 w-14 sm:h-13 sm:w-13 object-contain"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-left text-[18px] sm:text-[20px] font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-left text-sm text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        {config.sections.about.content}
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mt-4 text-[#ffff]">My Expertise.</h2>
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-0 mt-6">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
