import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-1 ${
          isMobile ? "top-[120px]" : "top-[100px]"
        } max-w-6xl mx-auto flex flex-row items-start gap-4`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#de4545]" />
          <div className="w-1 sm:h-80 h-40 black-gradient" />
        </div>
        <div
          className="w-100 h-100 p-4 m-2 rounded-[88px]"
          style={{ backgroundColor: "rgba(5, 8, 22, 0.3)" }}
        >
          <h1 className="text-[70px] font-bold m-4 text-[#efd5b9]">
            Hi, I'm <span className="text-[#cb3d2d]">Aviral</span>
          </h1>
          <p className="pl-10 m-2 text-[30px] font-medium  text-[#fff785]">
            I build and innovate, merging front-end and back-end development
            with AI expertise.
          </p>
        </div>
      </div>
      <div className="absolute inset-1 top-[100px]">
        <ComputersCanvas />
      </div>
      <div
        className={` ${
          isMobile ? "mt-10 flex justify-center" : "absolute xs:bottom-18 bottom-28 w-full mb-44 flex justify-center"
        } `}
      >
        <a href="#about">
          <div className={`${isMobile?'w-[44px] h-[58px]':'w-[32px] h-[58px]'} rounded-3xl border-4 border-pink-500 flex justify-center items-start p-2`}>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-yellow-300 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

