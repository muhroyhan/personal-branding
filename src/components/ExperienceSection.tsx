"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin } from "react-feather";
import { ExperienceInf } from "../interfaces/data_interface";

const ExperienceSection = (props: { data: ExperienceInf[] }) => {
  const { data } = props;

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-800 mb-4">
            Professional <span className="text-indigo-600">Experience</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            6+ years of progressive growth in software development, from junior
            developer to team lead, with expertise across multiple technologies
            and domains.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-indigo-200"></div>

          <div className="space-y-12">
            {data.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center z-10">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>

                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  } ml-16 md:ml-0`}
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                        {experience.start_date} - {experience.end_date}
                      </span>
                      <div className="flex items-center text-slate-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{experience.location}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-zinc-800 mb-2">
                      {experience.position}
                    </h3>
                    <h4 className="text-lg font-semibold text-indigo-600 mb-4">
                      {experience.company}
                    </h4>

                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-zinc-800 mb-3">
                        Responsibilities
                      </h5>
                      <ul className="space-y-2">
                        {experience.responsibilities.map(
                          (responsibility, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 shrink-0"></div>
                              <span className="text-slate-600">
                                {responsibility}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
