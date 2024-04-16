import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen flex gap-10 px-10 py-32">
      <div className="cardcontainer w-1/2 h-[50vh]">
        <div className="card relative w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center pb-5">
          <img
            className="w-1/6"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <div className="text-xl absolute left-10 bottom-7 text-[#A3C95F] border-[1px] w-fit border-[#A3C95F] px-3 py-1 rounded-full">
            ©2019-2022
          </div>
        </div>
      </div>
      <div className="cardcontainer w-1/2 h-[50vh] flex gap-10">
        <div className="card relative w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center">
          <img
            className="w-1/3"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <div className="text-xl uppercase absolute left-10 bottom-7 text-white border-[1px] w-fit border-white px-3 py-1 rounded-full">
            Rating 5.0 on clutch
          </div>
        </div>
        <div className="card relative w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center">
          <img
            className="w-1/3"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <div className="text-xl uppercase absolute left-10 bottom-7 text-white border-[1px] w-fit border-white px-3 py-1 rounded-full">
            Business bootcamp alumni
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
