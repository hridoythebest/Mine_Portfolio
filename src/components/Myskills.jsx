import React from "react";
import {motion} from 'framer-motion'

const Myskills = () => {
  return (
    <div className="w-full md:w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between items-center p-5">
      <div className="w-full md:w-1/3 p-5 space-y-2 ">
        <h1 className="text-5xl md:text-6xl font-bold">My Development Skills</h1>
        <p className="text-xs text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit maxime
          dolorum nesciunt repellat, ab magnam laudantium fugit quas, laborum
          dolor, totam minima mollitia nisi?
        </p>
      </div>
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-5">
        <motion.div
        whileHover={{scale:[null,1.2,1.1]}}
        transition={{duration:0.3}}
         className="flex flex-col items-center bg-white rounded p-2 space-y-2 drop-shadow-xl">
            <div className="bg-gray-800 p-2 rounded-full">
                <img src="images/icons/database.png" alt="" />
            </div>
            <p className="font-semibold">Databse Dev</p>
        </motion.div>
        <motion.div
        whileHover={{scale:[null,1.2,1.1]}}
        transition={{duration:0.3}}
        className="flex flex-col items-center bg-white rounded p-2 space-y-2 drop-shadow-xl">
            <div className="bg-gray-800 p-2 rounded-full">
                <img src="images/icons/curlyBrackets.png" alt="" />
            </div>
            <p className="font-semibold">Backend Dev</p>
        </motion.div>
        <motion.div
        whileHover={{scale:[null,1.2,1.1]}}
        transition={{duration:0.3}}
         className="flex flex-col items-center bg-white rounded p-2 space-y-2 drop-shadow-xl">
            <div className="bg-gray-800 p-2 rounded-full">
                <img src="images/icons/backend.png" alt="" />
            </div>
            <p className="font-semibold">Web Dev</p>
        </motion.div>
        <motion.div 
        whileHover={{scale:[null,1.2,1.1]}}
        transition={{duration:0.3}}
        className="flex flex-col items-center bg-white rounded p-2 space-y-2 drop-shadow-xl">
            <div className="bg-gray-800 p-2 rounded-full">
                <img src="images/icons/webdev.png" alt="" />
            </div>
            <p className="font-semibold">Frontend Dev</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Myskills;
