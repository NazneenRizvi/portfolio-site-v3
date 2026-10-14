"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-950 text-white flex items-center py-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Passionate Front-end Developer focused on creating beautiful,
            responsive and user-friendly web applications.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-cyan-500/20 rounded-3xl p-8 shadow-lg"
          >
            <h3 className="text-3xl font-bold mb-6 text-cyan-400">
              Who am I?
            </h3>

            <p className="text-gray-300 leading-8">
              I'm <span className="text-cyan-400 font-semibold">Syeda Nazneen Rizvi</span>,
              a passionate Front-end Developer who enjoys building modern,
              responsive and user-friendly websites using React, Next.js,
              TypeScript and Tailwind CSS.
            </p>

            <p className="text-gray-300 leading-8 mt-5">
              Currently, I'm also learning Backend Development and Artificial
              Intelligence to become a Full Stack Developer.
            </p>
            <p className="text-gray-300 leading-8 mt-5">
             I enjoy turning ideas into real-world web applications with clean code,
            responsive layouts and modern user experiences.
           </p>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >

            <div className="bg-slate-900 rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400 transition">
              <h3 className="text-cyan-400 text-3xl font-bold">2+</h3>
              <p className="mt-2 text-gray-300">Years Learning</p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400 transition">
              <h3 className="text-cyan-400 text-3xl font-bold">10+</h3>
              <p className="mt-2 text-gray-300">Projects Built</p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400 transition">
              <h3 className="text-cyan-400 text-3xl font-bold">8+</h3>
              <p className="mt-2 text-gray-300">Technologies</p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400 transition">
              <h3 className="text-cyan-400 text-3xl font-bold">∞</h3>
              <p className="mt-2 text-gray-300">Always Learning</p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}