"use client";

import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-cyan-500/20 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        <div>
          <h3 className="text-white text-xl font-bold">
            Nazneen <span className="text-cyan-400">Rizvi</span>
          </h3>

          <p className="text-gray-400 text-sm mt-2">
            Front-End Developer • Next.js • React • TypeScript
          </p>
        </div>

        <div className="flex gap-5 text-2xl">

          <a
            href="https://github.com/NazneenRizvi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/nazneen-rizvi-2bb237208/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="#home"
            className="hover:text-cyan-400 transition"
          >
            <FaArrowUp />
          </a>

        </div>
      </div>

      <p className="text-center text-gray-500 text-sm mt-8">
       © 2026 Nazneen Rizvi. All rights reserved.
      </p>
    </footer>
  );
}