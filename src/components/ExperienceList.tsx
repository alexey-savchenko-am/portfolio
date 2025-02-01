import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { FadeLeft, FadeRight } from "../utility/animation";
import { positions } from "../utility/positions";


const ExperienceList = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid grid-cols-[250px_1fr] gap-4 font-poppins overflow-x-hidden">
      
      <motion.div 
        variants={FadeRight(0.2)}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-start justify-start bg-gray-800 px-4 py-5 rounded-xl gap-6">
        {positions.map((p, i) => (
          <a
            key={p.company}
            className={`${
              i === activeIndex
                ? "text-yellow-300 scale-105 transition-transform"
                : "text-gray-300 "
            } flex flex-col shadow-sm items-start justify-center cursor-pointer leading-tight text-xl font-semibold`}
            onClick={() => setActiveIndex(i)}
          >
            {p.company}

            <span className="text-xs font-thin  text-center ">
              / {p.periodShort} /
            </span>
          </a>
        ))}
      </motion.div>

      <motion.div 
        
        variants={FadeLeft(0.2)}
        initial="hidden"
        animate="visible"
        className="bg-gray-800 px-4 py-5 rounded-xl relative">
        <div className="flex  justify-between gap-6">
          <div className="text-white space-y-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="">
                <a
                  href={positions[activeIndex].companyUrl}
                  target="_blank"
                  className=""
                >
                  <img
                    src={positions[activeIndex].logoUrl}
                    alt={positions[activeIndex].company}
                    className="max-w-[100px] max-h-[100px]"
                  />
                </a>
              </div>

              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold">
                  {positions[activeIndex].title}
                </h2>
                <a
                  href={positions[activeIndex].companyUrl}
                  target="_blank"
                  className="text-yellow-400"
                >
                  {positions[activeIndex].company}
                </a>
                <div className="text-sm text-gray-400">
                  {positions[activeIndex].location}
                </div>

                <div className="text-sm text-gray-400">
                  {positions[activeIndex].period}
                </div>
              </div>
            </div>
            <p>{positions[activeIndex].desription}</p>
            <h3 className="mt-4 text-lg font-semibold text-yellow-300">
              Responsibilities
            </h3>
            <ul className="list-disc list-inside mt-2 space-y-2">
              {positions[activeIndex].responsibilities.map((resp, idx) => (
                <li key={idx} className="text-gray-400 text-base">
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceList;
