import React, { useState, useEffect } from "react";
import anime from "animejs";
import Image from "next/image";
import { smallLogo } from "@/utils/assets";

type SplashScreen = {
  finishLoading: () => void;
};

const SplashScreen = ({ finishLoading }: SplashScreen) => {
  const [isMounted, setIsMounted] = useState(false);
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1.25,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1.25,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`flex h-screen items-center justify-center ${
        isMounted ? "visible" : "hidden"
      }`}
    >
      <Image src={smallLogo} alt="logo" className="w-12 h-12" id="logo" />
    </div>
  );
};

export default SplashScreen;
