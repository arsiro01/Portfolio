import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-1 top-[100px] max-w-6xl mx-auto flex flex-row items-start gap-4`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#000000]" />
          <div className="w-1 sm:h-80 h-40 black-gradient" />
        </div>
        <div
          className="w-100 h-100 p-4 m-2 rounded-[88px]"
          style={{ backgroundColor: "rgba(5, 8, 22, 0.8)" }}
        >
          <h1 className="text-[70px] font-bold m-4 text-[#efd5b9]">
            Hi, I'm <span className="text-[#e85646]">Aviral</span>
          </h1>
          <p className="pl-10 m-2 text-[30px] text-[#ffffff]">
            I build and innovate, merging front-end and back-end development
            with AI expertise.
          </p>
        </div>
      </div>
      <div className="absolute inset-1 top-[100px]">
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;
