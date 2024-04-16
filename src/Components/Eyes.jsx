import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setrotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (dets) => {
      let mouseX = dets.clientX;
      let mouseY = dets.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setrotate(angle - 180);
      //   console.log(angle);
    });
  });
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-0.8"
        className="relative w-full h-full  bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] bg-center bg-cover"
      >
        <div className="absolute flex items-center justify-center gap-10 top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-200 rounded-full">
            <div className="relative w-3/5 h-3/5 bg-zinc-900 rounded-full ">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full h-10 "
              >
                <div className="w-10 h-10 bg-zinc-200 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-200 rounded-full">
            <div className="relative w-3/5 h-3/5 bg-zinc-900 rounded-full ">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10 "
              >
                <div className="w-10 h-10 bg-zinc-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
