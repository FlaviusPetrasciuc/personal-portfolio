import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { config } from "../../constants/config";

import cvFile from "../../assets/cv/CurriculumVitae.pdf";
import gitHub from "../../assets/social-media/github.svg";
import linkedIn from "../../assets/social-media/linkedin.svg";

const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = cvFile;
                link.download = 'CV.pdf';
                link.click();
              }}
              className="rounded-full px-4 py-2 hover:border-2 bg-white/20 backdrop-blur-sm mt-4 text-sm sm:text-base hover:border-[#915EFF]">
              Download My CV
            </button>
            <button className="rounded-full px-4 py-2 hover:border-2 bg-white/20 backdrop-blur-sm mt-4 text-sm sm:text-base hover:border-[#915EFF]">
              <a href={`#contact`}>Contact Me</a>
            </button>
          </div>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/flavius-sebastian-petrasciuc-1954973b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 mt-4">
              <img src={linkedIn} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/FlaviusPetrasciuc"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full mt-4 object-contain"
            >
              <img src={gitHub} alt="GitHub" />
            </a>
          </div>
        </div>
      </div>

      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
