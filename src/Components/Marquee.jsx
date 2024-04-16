import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      // data-scroll-speed="0.2"
      className="w-full relative py-32 bg-[#004D43] pb-72 rounded-tl-3xl rounded-tr-3xl overflow-hidden"
    >
      <div className="text border-t-[1px] border-b-[1px] border-[#4D827B] flex items-center  whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-116%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 13 }}
          className="text-[28vw] text-white leading-[16vw] mb-14 font-[hero] pr-20 uppercase"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-116%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 13 }}
          className="text-[28vw] text-white leading-[16vw] mb-14 font-[hero] pr-20 uppercase"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-116%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 13 }}
          className="text-[28vw] text-white leading-[16vw] mb-14 font-[hero] pr-20 uppercase"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
