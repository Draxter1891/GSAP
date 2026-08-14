import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useRef } from "react";

const Hero = ({ revealHero }) => {
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    
    gsap.set([headingRef.current, subHeadingRef.current], {
      yPercent: 100,
      opacity: 0,
    });
    gsap.set(imgRef.current, {
      scale: 1.5,
    });

    if (!revealHero) return;

    const tl = gsap.timeline();

    tl.to(
      imgRef.current,
      {
        scale: 1,
        duration: 0.7,
        ease: "power3.out",
      },
    )
      .to(
        headingRef.current,
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        }, "-=0.2"
      )
      .to(
        subHeadingRef.current,
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.32",
      );

    return () => {
      tl.kill();
    };
  }, [revealHero]);

  return (
    <div className="relative w-full h-screen overflow-hidden text-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          ref={imgRef}
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1784229131433-8e8e0a243284?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      {/* Heading */}
      <div className="relative top-20 overflow-hidden">
        <h1 ref={headingRef} className="text-8xl text-gray-950 font-bold">
          Welcome back, Rishabh!
        </h1>
      </div>

      {/* Subheading */}
      <div className="relative top-100 overflow-hidden">
        <h2 ref={subHeadingRef} className="text-2xl font-bold">
          Let's Code.
        </h2>
      </div>
    </div>
  );
};

export default Hero;
