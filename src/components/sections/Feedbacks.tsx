import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { testimonials } from "../../constants";
import { Header } from "../atoms/Header";
import { TTestimonial } from "../../types";
import { config } from "../../constants/config";

import { previousarrow, nextarrow } from "../../assets";

import { useState } from "react";

const FeedbackCard: React.FC<{ index: number } & TTestimonial> = ({
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <div className="bg-black-200 w-full max-w-md mx-auto rounded-3xl p-8 md:p-8">
    <p className="text-[38px] font-black text-white">"</p>

    <div className="mt-1">
      <p className="text-[16px] md:text-[14px] tracking-wider text-white leading-relaxed">
        {testimonial}
      </p>

      <div className="mt-7 flex items-center justify-between gap-1">
        <div className="flex flex-1 flex-col">
          <p className="text-[14px] md:text-[16px] font-medium text-white">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="text-secondary mt-1 text-[10px] md:text-[12px]">
            {designation} at {company}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Feedbacks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalSlides = testimonials.length;

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="bg-black-100 rounded-[20px]">

      <div className={`${styles.padding} bg-tertiary min-h-[100px] rounded-2xl`}>
        <Header useMotion={true} {...config.sections.feedbacks} />
      </div>

      <div className="w-full py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center items-center">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="w-full flex justify-center"
            >
              <FeedbackCard index={currentIndex} {...testimonials[currentIndex]} />
            </motion.div>
          </div>

          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full border-[#915EFF] flex items-center justify-center hover:bg-[#915EFF] hover:text-white transition duration-300 cursor-pointer"
            >
              <img src={previousarrow} alt="Previous" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition duration-300 ${
                    currentIndex === index
                      ? "bg-[#915EFF] w-4"
                      : "bg-gray-500 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full border-[#915EFF] flex items-center justify-center hover:bg-[#915EFF] hover:text-white transition duration-300 cursor-pointer"
            >
              <img src={nextarrow} alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;