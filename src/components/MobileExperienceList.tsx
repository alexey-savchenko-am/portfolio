import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { FadeLeft, FadeRight } from "../utility/animation";
import { positions } from "../utility/positions";

const MobileExperienceList = () => {
  return (
    <div className="flex flex-col gap-6 font-poppins overflow-x-hidden">
      {positions.map((position, idx) => (
        <motion.div
          key={position.company}
          initial={{opacity:0, scale:0.8}}
          whileInView={{opacity:1, scale: 1}}
          transition={{type: "spring", stiffness: "100"}}
          viewport={{once: true}}
          className="bg-gray-800 px-4 py-5 rounded-xl relative "
        >
          <div className="flex justify-between ">
            <div className="text-white">
              <div className="flex flex-col items-start">
                <div className="flex flex-col space-y-1">
                  <h2 className="text-2xl font-semibold ">{position.title}</h2>
                
                  <div className="flex gap-4">
                    <div className="">
                      <a
                        href={position.companyUrl}
                        target="_blank"
                        className=""
                      >
                        <img
                          src={position.logoUrl}
                          alt={position.company}
                          className="max-w-[30px] max-h-[30px]"
                        />
                      </a>
                    </div>

                    <a
                      href={position.companyUrl}
                      target="_blank"
                      className="text-yellow-400 font-semibold"
                    >
                      {position.company}
                    </a>
                  </div>

                  <div className="text-sm text-gray-400">
                    {position.location}
                  </div>

                  <div className="text-sm text-gray-400">{position.period}</div>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-yellow-300">
                Responsibilities
              </h3>
              <ul className="list-disc list-inside mt-2 space-y-2">
                {position.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-gray-400 text-base">
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MobileExperienceList;
