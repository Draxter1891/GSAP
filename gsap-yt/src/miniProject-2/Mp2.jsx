import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Mp2 = () => {
  const imgRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const gsapContext = gsap.context(() => {
      gsap.set(imgRef.current, {
        clipPath: "circle(0.3% at 50% 50%)",
        scale: 1.4,
      });

      gsap.to(imgRef.current, {
        clipPath: " circle(70.7% at 50% 50%)",
        scale: 1,

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          pin:true,
          scrub: 1,
        },
      });
    });

    return () => gsapContext.revert();
  }, []);

  return (
    <div className="w-full bg-black text-blue-300 overflow-x-clip">
      <div className="w-full h-screen bg-red-900 px-10 py-10">
        <h1 className="">Section 1</h1>
      </div>
      <div ref={sectionRef} className="w-full h-screen overflow-clip">
        <img
          className="w-full h-full object-top"
          ref={imgRef}
          src="https://plus.unsplash.com/premium_photo-1690441053731-600981d923ab?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="w-full h-screen">
        <h1>Section 3</h1>
      </div>
    </div>
  );
};

export default Mp2;
