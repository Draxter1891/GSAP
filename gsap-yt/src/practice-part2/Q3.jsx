import gsap from "gsap";
import React from "react";
import { useEffect } from "react";

const Q3 = () => {
  const tl = gsap.timeline({ defaults: { duration: 0.6 } });

  useEffect(() => {
    const parent = document.querySelector(".parent")
    const child = document.querySelector(".child")
    tl.to(".item", {
        x : parent.clientWidth - child.offsetWidth,
    //   scale:0,
    //   opacity:0,
      stagger: {
        each: 0.2,
        grid: "auto",
        from: "end",
        ease: "linear",
        amount:.6
      },
    });
  }, []);

  const boxes = Array.from({ length: 12 }, (_, index) => (
    <div key={index} className="item bg-amber-400 p-5 py-15"></div>
  ));

  return (
    <div className="w-screen h-screen bg-gray-900 parent">
        <div className="w-1/2 h-2/3 grid grid-cols-4 gap-1 child">{boxes}</div>
    </div>
  );
};

export default Q3;
