import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const P3Q3 = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".item", {
        x: 60,
        opacity: 0,
      });
      ScrollTrigger.batch(".item", {
        start: "top 60%",
        onEnter: (items) => {
          gsap.to(items, {
            x: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
          });
        },
        onLeaveBack:(item)=>{
         gsap.to(item,{
           x:60,
          opacity:0,
          duration:0.7,
          stagger:0.12,
          ease:"power3.out"
         })

        }
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <div className="w-full h-screen bg-amber-950"></div>
      <div className="w-full min-h-screen bg-blue-950 p-7">
        <h1 className="font-bokor text-3xl text-white">
          Below is the animated list using scrollTrigger.batch()
        </h1>
        <ul className="w-fi p-3 text-white font-bold">
          <li className="item">List item</li>
          <li className="item">List item</li>
          <li className="item">List item</li>
          <li className="item">List item</li>
          <li className="item">List item</li>
          <li className="item">List item</li>
          <li className="item">List item</li>
          <li className="item">List item</li>
          <li className="item">List item</li>
          <li className="item">List item</li>
          <li className="item">List item</li>
          <li className="item">List item</li>
          <li className="item">List item</li>
          <li className="item">List item</li>
          <li className="item">List item</li>
          <li className="item">List item</li>
          <li className="item">List item</li>
          <li className="item">List item</li>
          <li className="item">List item</li>
          <li className="item">List item</li>
        </ul>
      </div>
      <div className="w-full h-screen bg-green-950"></div>
      <div className="w-full h-screen bg-orange-950"></div>
    </div>
  );
};

export default P3Q3;
