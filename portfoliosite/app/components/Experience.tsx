"use client";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="flex flex-col items-center mt-10 px-4">
      {/* <h3 className="text-4xl font-bold mb-10 text-center">Experience</h3> */}
      <motion.h3
        className="text-4xl font-bold mb-5 mt-5 text-center"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Experience
      </motion.h3>

      <div className="flex flex-col items-center w-full max-w-2xl relative">
        {/* Verisk Analytics - Present */}
        <div className="flex items-start w-full relative">
          {/* Content */}
          <div className="ml-6 flex-1 bg-green-900/30 border border-green-600 text-white p-6 rounded-xl shadow-md transition-transform hover:scale-105">
            <div className="flex justify-between">
              <h4 className="text-xl font-bold">Verisk Analytics</h4>
              <span className="text-sm font-semibold">Aug 2024 – Present</span>
            </div>
            <p className="mt-1">Software Engineer II</p>
          </div>
        </div>
        {/* Persistent Systems - Past */}
        <div className="flex items-start w-full relative mt-6">
          {/* Content */}
          <div className="ml-6 flex-1 bg-stone-950 border border-gray-600 text-white p-6 rounded-xl shadow-md opacity-80 hover:opacity-100 transition-opacity">
            <div className="flex justify-between">
              <h4 className="text-xl font-semibold">Persistent Systems</h4>
              <span className="text-sm text-gray-300">
                Sept 2021 – Aug 2024
              </span>
            </div>
            <ul className="list-disc list-inside text-gray-400 pl-2 space-y-1 mt-2">
              <li>
                <span className="font-medium text-white">
                  Senior Software Engineer
                </span>{" "}
                (Sept 2023 – Aug 2024)
              </li>
              <li>
                <span className="font-medium text-white">
                  Software Engineer
                </span>{" "}
                (Sept 2021 – Sept 2023)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
