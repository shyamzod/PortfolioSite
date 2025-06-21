"use client";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaCode,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import Image from "next/image";

export default function BioComponent() {
  return (
    <div className="relative  bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center md:items-stretch p-6 md:p-0">
      {/* === Curved Red Block (not full width) === */}
      <div
        className="w-full md:w-[350px] h-auto md:h-auto text-white p-6 flex flex-col justify-center"
        style={{
          background: "linear-gradient(to bottom right, #991B1B, #DC2626)",
          clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
          borderTopRightRadius: "40px",
          borderBottomRightRadius: "40px",
        }}
      >
        <div className="space-y-4">
          <p className="text-xl font-medium">Welcome to my portfolio</p>
          <h1 className="text-4xl font-extrabold leading-tight">
            I am{" "}
            <motion.span
              className="inline-block text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Shyam Zod,
            </motion.span>
          </h1>
          <p className="text-lg text-gray-100">a Software Engineer</p>
          <a href="/Resume.pdf" download>
            <button className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
              Download Resume
            </button>
          </a>
        </div>
      </div>

      {/* === Right Content (Profile + Info) === */}
      <div className="w-full md:flex-1 flex flex-col md:flex-row justify-center items-center px-6 py-10 space-y-6 md:space-y-0 md:space-x-10">
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/Profile.gif"
            alt="Profile Picture"
            width={180}
            height={180}
            className="rounded-full border-4 border-gray-300 shadow-md"
          />

          <div className="flex flex-wrap justify-center gap-4 text-white text-2xl">
            <a
              href="https://www.linkedin.com/in/shyam-zod-120421141/"
              target="_blank"
            >
              <FaLinkedin className="hover:scale-125 transition" />
            </a>
            <a href="https://x.com/shyam_zod" target="_blank">
              <FaTwitter className="hover:scale-125 transition" />
            </a>
            <a href="https://github.com/shyamzod" target="_blank">
              <FaGithub className="hover:scale-125 transition" />
            </a>
            <a href="https://leetcode.com/u/shyamzod/" target="_blank">
              <FaCode className="hover:scale-125 transition" />
            </a>
            <a href="https://www.instagram.com/zod_shyam/" target="_blank">
              <FaInstagram className="hover:scale-125 transition" />
            </a>
          </div>
        </div>

        <div className="text-gray-300 text-sm md:text-base space-y-3 text-center md:text-left mt-4 md:mt-0">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <FaLocationDot />
            <span>Pune, Maharashtra, India</span>
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <FaPhone />
            <span>+91 8788583119</span>
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <FaEnvelope />
            <span>ShyamZod03@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
