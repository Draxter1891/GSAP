import gsap from "gsap";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Q4 = () => {
  const loaderRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    tlRef.current = gsap.timeline({  paused: true } );

    tlRef.current.to(loaderRef.current, {
      rotate: 360,
      duration: 1,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <div className="h-screen w-full bg-gray-950 flex flex-col gap-28 items-center justify-center">
      <div
        ref={loaderRef}
        className="w-50 aspect-square rounded-full border-b-8 border-amber-300"
      ></div>
      <div className="flex gap-10">
        <button
          onClick={() => tlRef.current.play()}
          className="px-12 py-5 bg-gray-500 text-white font-bold rounded-xl transition-all ease-in duration-100 active:scale-95 active:bg-gray-500/50 cursor-pointer"
        >
          play
        </button>
        <button onClick={()=> tlRef.current.pause()} className="px-12 py-5 bg-gray-500 text-white font-bold rounded-xl transition-all ease-in duration-100 active:scale-95 active:bg-gray-500/50 cursor-pointer">
          pause
        </button>
        <button onClick={()=> tlRef.current.reverse()} className="px-12 py-5 bg-gray-500 text-white font-bold rounded-xl transition-all ease-in duration-100 active:scale-95 active:bg-gray-500/50 cursor-pointer">
          reverse
        </button>
      </div>
    </div>
  );
};

export default Q4;
