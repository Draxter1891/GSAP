import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const P3Q1 = () => {
  const imgRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        x: 200,
        scale: 1.5,
        borderRadius:"2rem",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=800",
          scrub: 1,
          pin: true,
       
        },
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className="w-full bg-black text-white">
      <div className="w-full h-screen bg-gray-700">I am section 1</div>
      <div
        ref={sectionRef}
        className="w-full h-screen flex justify-center items-center bg-yellow-700"
      >
        <img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1786723221846-1b4f27748243?q=80&w=866&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="caar"
          className="w-90 object-cover object-center"
        />
      </div>
      <div className="w-full h-screen bg-blue-950">I am section 3</div>
      <div className="w-full h-screen bg-red-900">I am section 4</div>
    </div>
  );
};

export default P3Q1;
