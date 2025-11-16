"use client";

import React from "react";
import { motion } from "framer-motion";
import * as icons from "react-feather";
import { DataInf } from "../interfaces/data_interface";

const AboutSection = (props: { data: DataInf }) => {
  const { data } = props;
  const achievements = data.achivements.map((ach) => ({
    ...ach,
    icon: icons[ach.icon as keyof typeof icons],
  }));

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-800 mb-4">
            About{" "}
            <span className="text-indigo-600">
              {data.firstname} {data.lastname}
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Passionate Software Engineer Team Lead dedicated to building
            innovative solutions and leading high-performing development teams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="/photo.jpg"
              alt="Muhammad Royhan"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              loading="eager"
              width="500"
              height="600"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-zinc-800">
              {data.about.title}
            </h3>
            {data.about.paragraphs.map((para, index) => (
              <p key={index} className="text-lg text-slate-600">
                {para}
              </p>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-slate-50 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-linear-to-r from-indigo-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-zinc-800 mb-2">
                {achievement.title}
              </h4>
              <p className="text-slate-600">{achievement.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
