import React from "react";
import { GitHub, Instagram, Linkedin, Mail } from "react-feather/dist";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-indigo-400 mb-4">
              Muhammad Royhan
            </h3>
            <p className="text-slate-400 mb-4">
              Software Engineer Team Lead with 6+ years of experience in
              building scalable web and mobile applications.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/muhroyhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-indigo-400 transition-colors"
                aria-label="GitHub profile"
              >
                <GitHub className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-royhan-077830168"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/muhroyhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-indigo-400 transition-colors"
                aria-label="Instagram profile"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:muhroyhan.developer@gmail.com"
                className="text-slate-400 hover:text-indigo-400 transition-colors"
                aria-label="Email contact"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Technologies</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-slate-400">React.js & Next.js</span>
              </li>
              <li>
                <span className="text-slate-400">Node.js & Express.js</span>
              </li>
              <li>
                <span className="text-slate-400">Flutter Development</span>
              </li>
              <li>
                <span className="text-slate-400">Full-Stack Solutions</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 Muhammad Royhan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
