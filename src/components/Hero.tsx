"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "react-feather";
import { DataInf } from "../interfaces/data_interface";

const Hero = (props: { data: DataInf }) => {
  const { data } = props;
  return (
    <section
      id="hero"
      className="relative bg-linear-to-br from-indigo-50 via-white to-blue-50 py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-800 mb-6">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500">
                {data.firstname} {data.lastname}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-4">
              {data.position}
            </p>
            <p className="text-lg text-slate-500 mb-8 max-w-2xl">
              {data.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition-colors"
              >
                Download CV
                <Download className="ml-2 h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-linear-to-r from-indigo-600 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <img
                src="photo.jpg"
                alt="Muhammad Royhan - Software Engineer Team Lead"
                className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl"
                loading="eager"
                width="400"
                height="400"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
