import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const P3Q1 = () => {
  const headRef = useRef(null);

  useEffect(() => {
    gsap.from(headRef.current, {
      x: -100,
      opacity: 0,
      duration:1,
      scrollTrigger: {
        trigger: headRef.current,
        start: "top 100%",
        toggleActions: "play none none reverse",
      
      },
    });
  }, []);
  return (
    <div className="w-full bg-black text-white">
      <div className="w-full h-screen bg-gray-700">I am section 1</div>
      <div className="w-full h-[200vh] bg-yellow-700 p-10 ">
        <h1
          ref={headRef}
          className="text-3xl bg-blue-500 font-bold mt-20 inline-block"
        >
          I am section 2
        </h1>
      </div>
    </div>
  );
};

export default P3Q1;
