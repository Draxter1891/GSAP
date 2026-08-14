import React, { useCallback, useState } from "react";
import LoadingScreen from "./LoadingScreen";
import Hero from "./Hero";

const MPLayout = () => {
  const [isloading, setIsLoading] = useState(true);
  const [revealHero, setRevealHero] = useState(false);
  console.log("mp rendering");

  const loadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleReveal = useCallback(() => {
    setRevealHero(true);
  }, []);

  return (
    <div className="w-full h-screen">
      <Hero revealHero={revealHero} />
      {isloading && (
        <LoadingScreen onReveal={handleReveal} onComplete={loadingComplete} />
      )}
    </div>
  );
};

export default MPLayout;
