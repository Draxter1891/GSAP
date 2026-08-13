import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const boxRef = useRef(null);
  const buttonRef1 = useRef(null);
  const buttonRef2 = useRef(null);
  const buttonRef3 = useRef(null);
  const [obj, setObj] = useState({ score: 0 });

  useEffect(() => {
    //   gsap.to(boxRef.current, {
    //     x: 750,
    //     duration: 5,
    //     rotate: 360,
    //     ease: "power3.out",
    //   });
    // }, []);

    // gsap.from(boxRef.current, {
    //   y: "105%",
    //   duration: 5,
    //   ease: "power3.out",
    // });

    gsap.fromTo(
      boxRef.current,
      {
        x: 0,
        scale: 0,
        opacity: 0,
      },
      {
        x: "+=50",
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "bounce.out",
      },
    );

    gsap.to(obj, {
      score: 100,
      duration: 2,
      onUpdate: () => {
        setObj({ score: obj.score.toFixed(0) });
      },
    });
  }, []);

  const handleMouseEnter1 = () => {
    gsap.to(buttonRef1.current, {
      scale: 1.5,
      duration: 1,
    });
  };
  const handleMouseLeave1 = () => {
    gsap.to(buttonRef1.current, {
      scale: 1,
      duration: 1,
    });
  };

  return (
    <div className="w-full h-screen bg-black text-white overflow-hidden">
      <div className="bg-gray-50/10">
        <div ref={boxRef} className="w-90 h-90 bg-amber-400"></div>
      </div>

      <h1 className="text-white text-9xl font-extrabold">{obj.score}</h1>

      <div className="flex gap-10 justify-center h-1/6 items-center bg-blue-500/40">
        <button
          onMouseEnter={() =>
            gsap.to(buttonRef1.current, {
              boxShadow: "0 0 10px 2px #F5CAC1",
              duration: 0.4,
              ease: "power2.out",
            })
          }
          onMouseLeave={() =>
            gsap.to(buttonRef1.current, {
              boxShadow: "0 0 0px 0px transparent",
              duration: 0.4,
              ease: "power2.out",
            })
          }
          ref={buttonRef1}
          className="h-fit px-6 py-3 bg-gray-500 rounded-xl cursor-pointer"
        >
          Click Me
        </button>
        <button
          onMouseEnter={() =>
          {
            gsap.set(buttonRef2.current, {rotate:-12})
            gsap.to(buttonRef2.current, {
              rotate: 12,
              yoyo: true,
              repeat: -1,
              duration: 0.2,
              ease:"power1.inOut"
            })
          }
          }
          onMouseLeave={() => {
            gsap.killTweensOf(buttonRef2.current);
            gsap.to(buttonRef2.current, {
              rotate: 0,
              duration: 0.2,
            });
          }}
          ref={buttonRef2}
          className="h-fit px-6 py-3 bg-gray-500 rounded-xl cursor-pointer"
        >
          Click Me
        </button>
        <button
        onMouseEnter={()=>gsap.to(buttonRef3.current,{
          scale:1.08,
          duration:0.4,
          ease:"back.out(2)",
        })}
        onMouseLeave={()=>gsap.to(buttonRef3.current,{
          scale:1,
          duration:0.3,
          ease:"power2.out"
        })}
          ref={buttonRef3}
          className="h-fit px-6 py-3 bg-gray-500 rounded-xl cursor-pointer"
        >
          Click Me
        </button>
      </div>
    </div>
  );
};

export default App;
