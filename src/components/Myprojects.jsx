import React from "react";

const Myprojects = () => {
  return (
    <div className="bg-black">
      <div className="w-full md:w-4/5 m-auto bg-white py-10 ">
        <h1 className="text-4xl font-bold text-center">Some Of My Projects</h1>
        <div className="flex flex-col md:flex-row space-y-5 md:space-x-10 md:space-y-0 justify-center p-10">
          <div>
            <img src="images/projects/two.jpg" alt="" />
            <div className="p-2 space-y-2">
              <h2 className="text-xs text-gray-400">REACT JS AND TAILWINDCSS AND FRAMER MOTION</h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                sequi laudantium modi blanditiis quia.
              </p>
              <button className="px-5 py-2 bg-gray-900 text-white font-semibol rounded">View on github</button>
            </div>
          </div>
          <div>
            <img src="images/projects/three.jpg" alt="" />
            <div className="p-2 space-y-2">
              <h2 className="text-xs text-gray-400">REACT JS AND TAILWINDCSS AND FRAMER MOTION</h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                sequi laudantium modi blanditiis quia.
              </p>
              <button className="px-5 py-2 bg-gray-900 text-white font-semibol rounded">View on github</button>
            </div>
          </div>
          <div>
            <img src="images/projects/two.jpg" alt="" />
            <div className="p-2 space-y-2">
              <h2 className="text-xs text-gray-400">REACT JS AND TAILWINDCSS AND FRAMER MOTION</h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                sequi laudantium modi blanditiis quia.
              </p>
              <button className="px-5 py-2 bg-gray-900 text-white font-semibol rounded">View on github</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Myprojects;
