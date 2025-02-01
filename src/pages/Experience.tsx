import React from "react";
import ExperienceList from "../components/ExperienceList";
import { motion } from "framer-motion";
import { MdDownload } from "react-icons/md";
import CV from "../assets/docs/aleksei_savchenko_CV.pdf";
import { Link } from "react-router-dom";
import MobileExperienceList from "../components/MobileExperienceList";


type Props = {};

const Experience = (props: Props) => {
  return (
    <section className="my-20  min-h-screen flex ">
      <div className="container block font-poppins space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-6 m-auto  bg-gray-800 rounded-lg shadow-lg p-4 md:p-6 text-gray-300"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-300">
            My Experience
          </h1>
          <p className="text-lg leading-relaxed mt-3 text-justify  ">
            Over the years, I have had the privilege of working with diverse
            teams and cutting-edge technologies to deliver impactful solutions.
            My experience spans backend development, high-load systems, and
            cloud-based platforms, with a strong focus on automation,
            scalability, and performance optimization. 
            Please take a look at my experience information below or simply download my CV.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.4 }}
            className="flex gap-4 justify-center md:justify-start mt-4"
          >
            <Link to="/contact" className="primary-btn">
              Contact Me
            </Link>
            <a
              href={CV}
              download="Aleksei Savchenko CV.pdf"
              className="primary-btn flex items-center gap-2"
            >
              Download CV <MdDownload />
            </a>
          </motion.div>
        </motion.div>

        <div className="hidden md:block">
          <ExperienceList />
        </div>

        <div className="block md:hidden">
          <MobileExperienceList/>
        </div>

      </div>
    </section>
  );
};

export default Experience;
