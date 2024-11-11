import Image from "next/image";
import React from "react";

function Skills() {
  return (
    <div id="skills" className="flex-wrap  mb-2  bg-gray-800 text-white pb-32 pt-16">
        <h1 className="text-center font-bold text-4xl text-teal-400">My Skills</h1>
      <div className="flex wrap mb-16 mt-5 width=[100%] height=[300px] justify-evenly">
        <div className="flex pl-5] gap-4">
          <Image
            className="h-[40px] w-[40px] "
            alt="html"
            src={require("../../../public/Assets/html.png")}
          ></Image>
          <h1 className=" text-xl font-bold">HTML</h1>
        </div>
        <div className="flex pl-5] gap-4">
          <Image
            className="h-[40px] w-[40px]"
            alt="html"
            src={require("../../../public/Assets/css.png")}
          ></Image>
         <h1 className=" text-xl font-bold"> CSS</h1>
        </div>
        <div className="flex pl-5] gap-4">
          <Image
            alt="html"
            className="h-[40px] w-[40px]"
            src={require("../../../public/Assets/react.png")}
          ></Image>
          <h1 className=" text-xl font-bold">Javascript</h1>
        </div>
      </div>

      <div className="flex wrap width=[100%] height=[300px] justify-evenly">
        <div className="flex pl-5] gap-4">
          <Image
            className="h-[40px] w-[40px] "
            alt="html"
            src={require("../../../public/Assets/hysys.png")}
          ></Image>
          <h1 className=" text-xl font-bold">Aspen Hysys</h1>
        </div>
        <div className="flex pl-5] gap-4">
          <Image
            className="h-[40px] w-[40px]"
            alt="html"
            src={require("../../../public/Assets/plus.png")}
          ></Image>
         <h1 className=" text-xl font-bold"> Aspen Plus</h1>
        </div>
        <div className="flex pl-5] gap-4">
          <Image
            alt="html"
            className="h-[40px] w-[40px]"
            src={require("../../../public/Assets/simulink.png")}
          ></Image>
          <h1 className=" text-xl font-bold">Simulink</h1>
        </div>
      </div>
      
    </div>
  );
}

export default Skills;
