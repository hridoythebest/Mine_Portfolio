import React from "react";
import {AiFillInstagram,AiFillFacebook,AiFillYoutube} from 'react-icons/ai'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <div className="w-full relative">
        <div className="w-full md:w-1/4 bg-black h-screen"></div>
        <nav className="w-full absolute top-0">
            <div className="w-11/12 md:w-4/5 m-auto flex justify-between items-center p-5">
                <h1 className="text-2xl text-white">Mine</h1>
                <button className="px-5 py-2 rounded-full border text-white bg-black">Subscribe</button>
            </div>
        </nav>
        <div className="absolute top-0 w-full md:h-full flex justify-center items-center">
            <div className="w-full md:w-4/5 mt-20 md:m-auto flex flex-col md:flex-row justify-between items-center">
                <motion.div
                animate={{y:[-500,0]}}
                transition={{ease:"easeOut",duration:2.5}}
                className="md:w-1/2 p-5 drop-shadow-2xl">
                    <img src="images/profile01.jpg" alt="" 
                    className="w-full h-full object-cover rounded"/>
                </motion.div>
                <motion.div
                animate={{x:[600,0]}}
                transition={{ease:"easeOut",duration:2.5}}
                className="md:w-1/3 p-2 text-white md:text-black space-y-2">
                    <h1 className="text-6xl md:text-8xl font-bold">Mine Portfolio</h1>
                    <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis esse ab impedit, corrupti veritatis harum.</p>
                </motion.div>
            </div>
        </div>
        <motion.div
        animate={{y:[100,90,50,30,10,0]}}
        transition={{ease:"easeOut",duration:2.5 ,repeat:"Infinity"}}
         className="hidden md:flex absolute top-0 right-0 h-screen flex justify-center items-center p-5">
            <img src="images/arrow.png" alt="" />
        </motion.div>
        <div className="absolute bottom-5 right-5 px-5">
            <div className="flex items-center space-x-5 text-white md:text-black">
                <AiFillYoutube size={"2rem"}/>
                <AiFillInstagram size={"2rem"}/>
                <AiFillFacebook size={"2rem"}/>
            </div>
        </div>
    </div>
  );
};

export default Hero;
