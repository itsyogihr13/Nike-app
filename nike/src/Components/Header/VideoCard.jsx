import React, { useState, useEffect } from "react";
import video from "./demo.mp4";
export const VideoCard = () => {
  const data = [
    {
      field: `Save Up to 40% Shop`,
      desc: ` All Our New Markdowns`,
    },
    {
      field: `Hello Nike App`,
      desc: `Download the app to access everything Nike. Get Your Great`,
    },
    {
      field: `Free Delivery`,
      desc: `Applies to orders of ₹ 14 000.00 or more. View details`,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="w-full bg-primarybg h-[50px] mt-3">
        <h1>{data[currentIndex].field}</h1>
        <u>
          <p className="text-[12px]">{data[currentIndex].desc}</p>
        </u>
      </div>
      <div>
        <video src={video} width="1800" height="500" autoPlay muted></video>
      </div>
      <div className="text-center w-[50%]  m-auto">
        <h1 className="font-medium pt-[3rem] leading-[12px]">Nike Air Max</h1>
        <p className="font-black text-[65px] tracking-[1px]  ">ENHANCED AIR</p>
        <h1 className="font-medium mt-2">
          No rules. No Limits. That's how Air was bottled. Now a new
          point-loaded cushioning system is here to deliver even more comfort.
          Droping soon
        </h1>
        <button className="primaryblk-button mt-6 rounded-[60px]">
          Notify Me
        </button>
      </div>
    </>
  );
};
