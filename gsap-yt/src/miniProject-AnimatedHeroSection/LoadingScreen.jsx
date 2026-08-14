import gsap from "gsap";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const LoadingScreen = ({ onComplete, onReveal }) => {
  const [count, setCount] = useState(0);
  const PageRef = useRef(null);

  useEffect(() => {
    const obj = { value: 0 };
    const tl = gsap.timeline({ paused: true });

    tl.to(PageRef.current, {
      yPercent: 100,
      duration: 0.7,
      ease: "expo.out",
      onComplete
    });

    const gsaptween = gsap.to(obj, {
      value: 100,
      duration: 1.2,
      onUpdate: () => {
        setCount(Math.round(obj.value));
      },
      onComplete: () => {
        onReveal()
        tl.play();
      },
    });

    return () => {
      tl.kill();
      gsaptween.kill();
    };
  }, [onReveal, onComplete]);

  return (
    <div
      ref={PageRef}
      className="absolute top-0 left-0 w-full h-screen bg-black text-white flex items-center justify-center"
    >
      <h1 className="text-3xl font-extrabold font-bokor select-none">
        {count}%
      </h1>
    </div>
  );
};

export default LoadingScreen;
