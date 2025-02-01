import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ns3c4ep", "template_r9v59bg", formRef.current!, "_7A63EwWpCTMwpsAm")
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <section className="min-h-screen overflow-x-hidden mt-20 flex flex-col items-center bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 font-poppins">
      <div className="container max-w-4xl space-y-8 px-6">

        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center "
        >
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-300">Contact Me</h1>
          <p className="text-lg leading-relaxed mt-3">
            I'm actively seeking software development roles. Feel free to contact me through the form below if you have any opportunities. Thank you!
          </p>
        </motion.div>

        {/* Форма */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6 bg-gray-800 p-6 rounded-xl shadow-lg"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <motion.input
              whileFocus={{ scale: 1.05, borderColor: "#facc15" }}
              transition={{ duration: 0.2 }}
              className="primary-textbox flex-1"
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />
            <motion.input
              whileFocus={{ scale: 1.05, borderColor: "#facc15" }}
              transition={{ duration: 0.2 }}
              className="primary-textbox flex-1"
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />
          </div>

          <motion.input
            whileFocus={{ scale: 1.05, borderColor: "#facc15" }}
            transition={{ duration: 0.2 }}
            className="primary-textbox"
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <motion.textarea
            whileFocus={{ scale: 1.05, borderColor: "#facc15" }}
            transition={{ duration: 0.2 }}
            className="primary-textbox h-32 resize-none"
            name="message"
            placeholder="Your Message"
            required
          ></motion.textarea>

          {/* Кнопка с эффектом "пульсации" */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            type="submit"
            className="primary-btn text-xl w-full md:w-auto px-6 py-3 rounded-lg bg-yellow-400 text-gray-700 font-semibold transition hover:bg-yellow-500"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
