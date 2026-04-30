import { motion } from "framer-motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const Contact = () => {
  return (
    <div className="w-full py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-black-100 rounded-2xl p-6 sm:p-8"
        >
          <Header useMotion={false} {...config.contact} />

          <div className="mt-12 flex flex-col gap-6 sm:gap-8">
            {Object.keys(config.contact.info).map((key) => {
              const { span, placeholder } =
                config.contact.info[key as keyof typeof config.contact.info];
              return (
                <div key={key} className="flex flex-col">
                  <span className="mb-3 sm:mb-4 font-medium text-white">{span}</span>
                  <div className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-5 py-3 sm:px-6 sm:py-4 font-medium text-white outline-none">
                    {placeholder}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;