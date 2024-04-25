import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({index, title, icon}) =>{
    return (
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right","spring",0.5*index,0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-20px shadow-card">
            <div options = {
                {
                  max:45,
                  scale:1,
                  speed:450
                }}
                className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
            >
              <img src={icon} alt={title} className="w-16 h-16 object-contain" />
              <h3 className="text-[rgb(245,245,245)] font-semibold text-center">{title}</h3>
            </div>
          </motion.div>
      </Tilt>
    )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className='text-[rgb(214,8,255)] text-[26px]'>Introduction</p>
        <h2 className='text-[rgb(121,236,249)] text-[70px]'>Overview.</h2>
      </motion.div>
      <motion.p 
    variants={fadeIn("", "", 0.1, 1)}
    className="mt-4 text-[rgb(89,251,173)] text-[20px] leading-[40px] text-balance text-justify"
>
    
Proficient in both Full Stack Development and AI Engineering, my goal is to drive innovation and create impactful solutions. With expertise in front-end and back-end technologies such as HTML, CSS, JavaScript, React.js, Node.js, as well as in-depth knowledge of machine learning algorithms, deep learning frameworks like TensorFlow, and programming languages including Python, I am equipped to handle complex challenges at the intersection of technology and artificial intelligence. With a passion for continuous learning and a keen eye for emerging trends, I stay ahead of the curve in both the realms of software development and artificial intelligence.
</motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
