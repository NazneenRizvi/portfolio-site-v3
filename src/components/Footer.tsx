"use client";
import { FaGithub, FaLinkedin, FaArrowUp, FaBriefcase } from "react-icons/fa";
export default function Footer(){
 return <footer className="bg-slate-950 border-t border-cyan-500/20 py-8 text-white"><div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
 <div className="text-center md:text-left"><h3 className="text-xl font-bold">Nazneen <span className="text-cyan-400">Rizvi</span></h3><p className="text-gray-400 text-sm mt-2">Frontend Developer • Next.js • React • TypeScript</p></div>
 <div className="flex items-center gap-6 text-2xl">
 <a aria-label="GitHub profile" href="https://github.com/NazneenRizvi" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400"><FaGithub/></a>
 <a aria-label="LinkedIn profile" href="https://www.linkedin.com/in/nazneen-rizvi-2bb237208/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400"><FaLinkedin/></a>
 <a aria-label="Upwork freelancer profile" href="https://www.upwork.com/freelancers/~018e1626e7c209b543" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400"><FaBriefcase/></a>
 <a aria-label="Back to top" href="#" className="hover:text-cyan-400"><FaArrowUp/></a>
 </div></div><p className="text-center text-gray-500 text-sm mt-8">© 2026 Nazneen Rizvi. All rights reserved.</p></footer>
}