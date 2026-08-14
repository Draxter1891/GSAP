import gsap from "gsap";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Q1_2 = () => {
  const box1ref = useRef(null);
  const box2ref = useRef(null);
  const box3ref = useRef(null);
  const box4ref = useRef(null);

  const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "power2.out" } });

  useEffect(() => {
    console.log("useeffect running");
    tl.to(box1ref.current, {
      x: 200,
    }, "reveal")
      .to(
        box2ref.current,
        {
          x: 200,
        },
        "-=0.5",
      )
      .to(box3ref.current, {
        x: 200,
      })
      .to(box4ref.current, {
        x: 200,
      }, "reveal");
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <div ref={box1ref} className="w-3xs h-40 bg-amber-200"></div>
      <div ref={box2ref} className="w-3xs h-40 bg-blue-200"></div>
      <div ref={box3ref} className="w-3xs h-40 bg-red-200"></div>
      <div ref={box4ref} className="w-3xs h-40 bg-gray-200"></div>
    </div>
  );
};

export default Q1_2;
