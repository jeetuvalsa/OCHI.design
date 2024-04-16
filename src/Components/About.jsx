import React from "react";
import { MdArrowOutward } from "react-icons/md";

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.3"
      className="w-full min-h-screen bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl pb-20"
    >
      <div className="atext pt-20 px-20 mb-24">
        <p className="text-7xl font-[top] w-[85%] relative mt-16 font-light">
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to{" "}
          <span className="relative after:content-[''] after:w-full after:h-20  after:absolute after:border-b-[4px] after:border-black after:left-0 after:top-0 after:hover:w-0 after:transition-all ">
            raise funds
          </span>
          ,{" "}
          <span className="relative after:content-[''] after:w-full after:h-20  after:absolute after:border-b-[4px] after:border-black after:left-0 after:top-0 after:hover:w-0 after:transition-all ">
            sell prod­ucts
          </span>
          ,{" "}
          <span className="relative after:content-[''] after:w-full after:h-20  after:absolute after:border-b-[4px] after:border-black after:left-0 after:top-0 after:hover:w-0 after:transition-all ">
            ex­plain com­plex ideas
          </span>
          , and{" "}
          <span className="relative after:content-[''] after:w-full after:h-20  after:absolute after:border-b-[4px] after:border-black after:left-0 after:top-0 after:hover:w-0 after:transition-all ">
            hire great peo­ple
          </span>
          .
        </p>
      </div>
      <div className="flllexx border-t-[1px] border-b-[1px] border-[#99AD52] px-20 pt-10 pb-32 flex items-start justify-between">
        <p className="text-2xl font-[top]">What you can expect:</p>
        <div className="parabox  flex flex-col gap-10 ml-52">
          <p className=" text-2xl font-[top] inline-block ">
            We create tailored presentations to help <br /> you persuade your
            colleagues, clients, or <br /> investors. Whether it’s live or
            digital, <br /> delivered for one or a hundred people.
          </p>
          <p className=" text-2xl font-[top] inline-block">
            We believe the mix of strategy and <br /> design (with a bit of
            coffee) is what <br /> makes your message clear, convincing, <br />{" "}
            and captivating.
          </p>
        </div>
        <div className="slinks mt-20 mr-20">
          {["S:", "Instagram", "Behance", "Facebook", "LinkedIn"].map(
            (item, index) => (
              <h1
                key={index}
                className={`text-2xl font-[top] mb-1 ${index == 0 && "mb-8"} ${
                  index > 0 &&
                  "relative after:content-[''] after:w-full after:h-8  after:absolute after:border-b-[1px] after:border-black after:left-0 after:top-0 after:hover:w-0 after:transition-all"
                }`}
              >
                {item}
              </h1>
            )
          )}
        </div>
      </div>
      <div className="aboutimg pt-5 px-20 flex items-start justify-between">
        <div className="left">
          <h1 className="text-7xl font-[top] mb-7">Our approach:</h1>
          <div className="flex items-center justify-center text-xl uppercase whitespace-nowrap w-60 pl-7 border-[1px] border-black py-2 text-white bg-black px-6 rounded-full">
            Read more
            <span className="text-3xl bg-white text-black rounded-full p-3 ml-10">
              <MdArrowOutward />
            </span>
          </div>
        </div>
        <div className="right w-[50vw] h-[32vw] bg-red-500 rounded-2xl overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
