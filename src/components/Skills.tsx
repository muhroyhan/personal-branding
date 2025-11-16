"use client";

import React from "react";
import { motion } from "framer-motion";

const Skills = (props: {
  data: {
    title: string;
    color: string;
    tags: string[];
  }[];
}) => {
  const { data } = props;
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-800 mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive skill set spanning frontend, backend, mobile
            development, and team leadership
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow"
            >
              <div
                className={`w-12 h-12 rounded-lg bg-linear-to-r ${category.color} flex items-center justify-center mb-4`}
              >
                <div className="w-6 h-6 bg-white rounded opacity-80"></div>
              </div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.tags.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
