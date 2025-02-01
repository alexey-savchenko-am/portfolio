import React from "react";
import {
  MdArrowForward,
  MdArrowRight,
  MdArrowRightAlt,
  MdDownload,
  MdInfo,
  MdInfoOutline,
  MdPin,
  MdPinDrop,
  MdPinEnd,
} from "react-icons/md";
import Avatar from "../assets/images/avatar.jpg";
import CV from "../assets/docs/aleksei_savchenko_CV.pdf";
import { motion } from "framer-motion";
import { FadeLeft, FadeRight } from "../utility/animation";
import { Link } from "react-router-dom";
import { RiArrowRightCircleFill, RiInfoI, RiSkipUpFill } from "react-icons/ri";
import Skill from "../components/Skill";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import "./Skill.css";

function About() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className=" bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 py-16 font-poppins mt-5">
      <div className=" container overflow-x-hidden">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-6 m-auto  bg-gray-800 rounded-lg shadow-lg p-4 md:p-6"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-300">
            About Me
          </h1>
          <p className="text-lg leading-relaxed mt-3 text-justify  ">
            Hello, my name is Aleksei, and I am a passionate software developer
            with a deep enthusiasm for technology and innovation. My journey in
            programming began during my school years, where I discovered the
            excitement of solving complex problems through code. Over the years,
            I have dedicated myself to expanding my knowledge and honing my
            skills in software development. Now, I take great pleasure in
            applying my extensive expertise to real-world projects, creating
            efficient and scalable solutions that bring tangible value to
            businesses. I thrive on the challenge of developing new
            technologies, optimizing existing systems, and contributing to the
            success of the companies I work with. Seeing my work make a
            meaningful impact is what drives me to keep learning, growing, and
            pushing the boundaries of what software can achieve.
          </p>
        </motion.div>

        {/* Columns */}
        <div className="flex flex-col md:flex-row gap-12 text-justify ">
          {/* Left Column - General Skills */}
          <motion.div
            variants={FadeRight(0.2)}
            initial="hidden"
            animate="visible"
            className="w-full md:w-[50%] bg-gray-800 rounded-lg shadow-lg  py-6 md:px-6 space-y-10 relative"
          >
            <h2 className="text-2xl font-semibold text-yellow-300 text-center">
              Professional Skills
            </h2>

            <Slider {...settings}>
              <Skill
                name="Backend Development"
                yearsExperience={12}
                projectCount={10}
              >
                I possess strong skills in C#, with expertise in microservices
                architecture, Domain-Driven Design (DDD), and Test-Driven
                Development (TDD). My proficiency in C# allows me to design and
                develop robust microservices, adhering to best practices, and
                ensuring efficient communication between services. My knowledge
                of DDD enables me to model complex domains effectively, ensuring
                a clean and maintainable codebase. Through TDD, I prioritize
                quality, identifying and addressing issues early in the
                development process. These combined skills enable me to deliver
                scalable, maintainable, and high-quality software solutions in
                the world of microservices, aligning with best industry
                standards.
              </Skill>
              <Skill
                name="Ratational Databases"
                yearsExperience={12}
                projectCount={10}
              >
                I have extensive skills in relational databases, including
                MySQL, MS SQL, and PostgreSQL. With a strong foundation in
                database design and management, I have successfully implemented
                and maintained complex database systems across various projects.
                My proficiency extends to data modeling, query optimization, and
                ensuring data integrity. I've leveraged MySQL's scalability, MS
                SQL's enterprise capabilities, and PostgreSQL's open-source
                power to cater to diverse project requirements. My expertise
                encompasses data migration, performance tuning, and developing
                efficient database-driven applications. I am adept at crafting
                robust and secure solutions, ensuring the seamless operation of
                database systems across different platforms.
              </Skill>
              <Skill name="NoSQL" yearsExperience={5} projectCount={5}>
                Proficient in NoSQL databases, I have expertise in Redis and
                MongoDB. With Redis, I excel in building high-performance,
                in-memory data stores for caching and real-time analytics. My
                skills extend to configuring Redis clusters, optimizing data
                structures, and implementing efficient caching strategies.
                Additionally, I have honed my abilities in MongoDB, adept at
                designing and maintaining scalable, document-based databases. My
                experience includes schema design, query optimization, and
                ensuring data integrity. These skills enable me to deliver
                robust and efficient data solutions for a wide range of
                applications, making me a valuable asset in the realm of NoSQL
                databases.
              </Skill>
              <Skill
                name="Message Brokers"
                yearsExperience={6}
                projectCount={7}
              >
                Specialized in message brokers, I've harnessed the power of
                RabbitMQ and Kafka to optimize microservice architecture. My
                expertise lies in architecting, configuring, and deploying these
                systems to facilitate seamless communication among
                microservices. By effectively managing queues, topics, and
                routing, I've ensured reliable data exchange within complex
                projects. These skills have empowered me to design robust,
                event-driven applications, enabling efficient data flow and
                synchronization across distributed components. Leveraging my
                proficiency in message brokers, I've contributed to enhancing
                the scalability, fault tolerance, and real-time capabilities of
                applications, fostering dynamic and responsive microservice
                ecosystems.
              </Skill>
              <Skill
                name="Cloud Solutions"
                yearsExperience={5}
                projectCount={4}
              >
                I possess a strong skill set in cloud solutions, specializing in
                both Amazon Web Services (AWS) and Azure Stack. My expertise
                spans a wide range of cloud services, including infrastructure
                provisioning, container orchestration, serverless computing, and
                data analytics. I have a proven track record in architecting and
                implementing scalable and cost-effective cloud solutions,
                enabling businesses to leverage the full potential of the cloud
                for improved agility and efficiency. My skills extend to
                security and compliance, ensuring data integrity and regulatory
                adherence. I am well-versed in hybrid cloud strategies,
                effectively bridging on-premises and cloud environments.
              </Skill>
              <Skill
                name="Frontend Development"
                yearsExperience={3}
                projectCount={2}
              >
                As a primarily backend developer, I've ventured into the realm
                of frontend development, specifically with a focus on
                technologies like React and Redux. I've honed my skills in
                crafting intuitive user interfaces, designing responsive web
                applications, and ensuring seamless user experiences. My
                proficiency extends to crafting efficient and maintainable code,
                leveraging React's component-driven architecture and Redux for
                state management. Despite my backend background, I've
                demonstrated my adaptability and dedication to mastering
                frontend technologies. My ability to bridge the gap between
                backend and frontend development allows me to create
                well-rounded, full-stack solutions that deliver high-quality
                user experiences.
              </Skill>
            </Slider>
            
            <div  className="py-10">  </div>


            <div className="flex justify-center md:justify-start gap-6 absolute bottom-10 w-full">
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
            </div>
          </motion.div>

          {/* Right Column - Technologies */}
          <motion.div
            variants={FadeLeft(0.2)}
            initial="hidden"
            animate="visible"
            className="flex-1 flex flex-col gap-8 bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-yellow-300 text-center">
              Technologies I Use
            </h2>
            <ul className="list-disc list-inside text-lg leading-relaxed">
              <li>
                <strong className="text-yellow-300">.NET Core </strong>
                Extensive expertise in developing high-performance, scalable
                backend systems using .NET Core, with a focus on clean
                architecture and microservices.
              </li>
              <li>
                <strong className="text-yellow-300">React </strong>
                Proven track record of building dynamic, user-friendly web
                applications with React, leveraging state management libraries
                like Redux and modern hooks for optimal performance.
              </li>
              <li>
                <strong className="text-yellow-300">
                  Cloud Solutions (Azure){" "}
                </strong>
                Hands-on experience in designing and deploying cloud-native
                applications on Microsoft Azure, utilizing services like Azure
                Functions, App Services, and Cosmos DB for scalable and secure
                solutions.
              </li>
              <li>
                <strong className="text-yellow-300">
                  Containerization & Orchestration{" "}
                </strong>
                Proficient in Docker for containerization and Kubernetes for
                managing containerized applications, ensuring seamless
                deployment and scalability in distributed environments.
              </li>
              <li>
                <strong className="text-yellow-300">Databases </strong>
                Deep knowledge of relational and NoSQL databases, including MS
                SQL, PostgreSQL, MongoDB, and Redis, with a focus on optimizing
                queries and ensuring data integrity.
              </li>
              <li>
                <strong className="text-yellow-300">
                  Event-Driven Architectures{" "}
                </strong>
                Strong background in implementing event-driven systems using
                RabbitMQ and Apache Kafka, enabling real-time data processing
                and reliable message delivery.
              </li>
              <li>
                <strong className="text-yellow-300">DevOps Practices </strong>
                Experience with CI/CD pipelines, infrastructure as code (IaC),
                and monitoring tools to streamline development workflows and
                ensure high availability of applications.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
