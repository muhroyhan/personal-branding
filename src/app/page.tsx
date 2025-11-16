import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { promises as fs } from "fs";
import path from "path";
import { XMLParser, XMLValidator } from "fast-xml-parser";
import { DataInf } from "../interfaces/data_interface";

export const metadata = {
  title: "Home - Muhammad Royhan",
  description:
    "Welcome to Muhammad Royhan's website. Software Engineer Team Lead with expertise in React.js, Node.js, Flutter, and more.",
};

const Home = async () => {
  const datafilepath = path.join(process.cwd(), "public", "data.json");
  const datafilecontent = await fs.readFile(datafilepath, "utf-8");
  const jsondata: DataInf = JSON.parse(datafilecontent);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero data={jsondata} />
        <AboutSection data={jsondata} />
        <Skills data={jsondata.skills} />
        <Projects data={jsondata.projects} />
        <ExperienceSection data={jsondata.experiences} />
        <ContactSection data={jsondata} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
