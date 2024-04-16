import { motion } from "framer-motion";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.5"
      className="w-full h-screen bg-[#F1F1F1] pt-[0.1px]"
    >
      <div className="textStructure mt-40 px-[3vw]">
        {["We create", "eye-opening", "presentations"].map((item, index) => (
          <div key={index} className="masker ">
            <div className="w-fit flex items-center justify-center gap-3">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
                  className="w-[9vw] h-[5.6vw] bg-red-900 mt-5 rounded-lg overflow-hidden"
                >
                  <img
                    className="w-full h-full object-cover object-center"
                    src="src\Images\Landing.jpg"
                  />
                </motion.div>
              )}
              <h1 className=" uppercase text-[9vw] leading-[6.6vw] font-[hero]">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-[#B2B2B2] mt-52 flex items-center justify-between px-20 py-5">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p key={index} className="text-[1.1vw] font-[top] leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center justify-center gap-1">
          <div className="text-xl uppercase font-[top] border-[1px] border-black py-[0.3vw] px-4 rounded-full">
            Start the project
          </div>
          <div className="border-[1px] border-black p-2 rounded-full flex items-center justify-center">
            <MdArrowOutward className="text-2xl font-semibold" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
