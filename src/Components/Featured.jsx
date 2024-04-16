import { motion, useAnimate, useAnimation } from "framer-motion";
import React, { useState } from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const HandleHover = (index) => {
    cards[index].start({ y: "0%" });
  };
  const HandleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full h-screen py-10 mb-28">
      <div className="w-full px-20 pt-20 border-b-[0.1px] border-black pb-16">
        <h1 className="text-7xl font-[top]">Featured projects</h1>
      </div>
      <div className="cards relative px-20 w-full flex gap-10 mt-16">
        <motion.div
          onHoverStart={() => HandleHover(0)}
          onHoverEnd={() => HandleHoverEnd(0)}
          className="cardcontainer w-1/2 relative  h-[70vh] "
        >
          <h1 className="absolute left-full flex -translate-x-1/3 overflow-hidden top-1/2 -translate-y-1/2 text-[9vw] leading-none z-[9] uppercase font-[hero] font-extrabold text-[#CDEA68]">
            {"Fyde".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.02 }}
                className=" inline-block "
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-full rounded-2xl overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          onHoverStart={() => HandleHover(1)}
          onHoverEnd={() => HandleHoverEnd(1)}
          className="cardcontainer relative w-1/2  h-[70vh] "
        >
          <h1 className="absolute left-0 overflow-hidden -translate-x-32 top-1/2 -translate-y-1/2 text-[9vw] leading-none z-[9] uppercase font-[hero] font-extrabold text-[#CDEA68]">
            {"vise".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.02 }}
                className=" inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card  w-full h-full rounded-2xl overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Featured;
