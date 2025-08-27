import React from 'react';
import { MdArrowForward, MdArrowRight, MdArrowRightAlt, MdDownload } from 'react-icons/md';
import Avatar from '../assets/images/avatar.jpg';
import CV from "../assets/docs/aleksei_savchenko_CV.pdf";
import { motion } from "framer-motion";
import { FadeLeft, FadeRight } from '../utility/animation';
import { Link } from 'react-router-dom';
import { RiArrowRightCircleFill } from 'react-icons/ri';
import ViewButton from '../components/ViewButton';


const Home = () => {
  return (
    <section className="mt-20 md:mt-0 bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 flex justify-center items-center min-h-screen overflow-x-hidden">
      <div className="container flex flex-col-reverse md:flex-row-reverse items-center text-center md:text-left gap-10">
        
        {/* Text Content */}
        <div className="flex flex-col w-full md:w-2/3 space-y-6">
          <motion.h1 
            variants={FadeLeft(0.5)}
            initial='hidden'
            animate='visible'
            className="text-3xl md:text-5xl font-paytone tracking-wide"
          >
            Hi, I'm Aleksei Savchenko
          </motion.h1>
          
          <motion.h2 
            variants={FadeLeft(0.5)}
            initial='hidden'
            animate='visible'
            className="text-yellow-300 text-xl md:text-2xl font-poppins"
           >
            Fullstack Developer (.NET + ReactJS)
          </motion.h2>

          <motion.p 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2, delay:1}}
            className="text-gray-300 md:text-lg leading-relaxed"
           >
            Experienced in .NET/C# for building scalable backend solutions, with expertise in Docker and Kubernetes for containerization and orchestration.
            Proficient in developing APIs with REST and SOAP, and managing databases like MS SQL, PostgreSQL, MongoDB, and Redis.
            Skilled in using RabbitMQ and Kafka for messaging and integration. In cloud technologies, I focus on Microsoft Azure, where I design, deploy, and optimize cloud-based solutions.
            Additionally, I have experience in front-end development, creating dynamic and responsive interfaces using React JS.
          </motion.p>
          
          <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2, delay:1.4}}
            className="flex gap-4 justify-center md:justify-start mt-4"
           >
            <Link to="/contact" className="primary-btn">Contact Me</Link>
            <a 
                href={CV}
                download="Aleksei Savchenko CV.pdf"
                className="primary-btn flex items-center gap-2"
            >
              Download CV <MdDownload />
            </a>
           
          </motion.div>
          <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2, delay:1.6}}
            className="flex justify-center md:justify-end h-10">
              <ViewButton pageId='page1'/>
          </motion.div>
        </div>

        {/* Avatar Section */}
        <motion.div 
            initial={{opacity: 0, x: -200, rotate: -75}}
            animate={{opacity: 1, x: 0, rotate: 0}}
            transition={{duration: 1, delay: 0.2}}
            className="flex justify-center items-center relative"
        >
          <div className="relative">
            <img 
              src={Avatar} 
              alt="avatar" 
              className="rounded-full border-4 border-yellow-500 shadow-xl shadow-gray-700 w-60 md:w-80 transform transition-transform "
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-full hover:bg-opacity-40 transition-opacity duration-300" />
          </div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default Home;
