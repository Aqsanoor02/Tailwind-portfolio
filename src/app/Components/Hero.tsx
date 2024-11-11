"use client";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-96 shadow-md border-r-4 lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              alt="image"
             src="/Assets/pic.jpg"
             height={300} width={300}
            ></Image>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I am
              <br className="hidden lg:inline-block" />
              Web developer
              
            </h1>
            <h2 className="text-black text-xl ">
              Crafting Code, Building Experiences{" "}
            </h2>
            <p className="mb-8 leading-relaxed">
              Chemical Engineer and web development enthusiast with a unique
              blend of analytical skills and a passion for coding. Experienced
              in optimizing processes, enhancing productivity, and ensuring
              quality control in industrial settings, while also developing web
              applications that focus on functionality and user experience. From
              managing production lines and maintaining safety protocols to
              building responsive web interfaces with HTML, CSS, and JavaScript,
              each role refines my problem-solving skills and adaptability.
              Committed to continuous learning, I’m excited to bring both
              technical engineering expertise and a creative coding mindset to
              innovative projects.{" "}
            </p>
            <div className="flex justify-center">
              <a target="blank" href="/Assets/Aqsa-Noor-Resume.pdf">
                <button className="inline-flex items-center bg-black border-0 py-1 px-3 text-white text-2xl focus:outline-none hover:bg-teal-600 rounded  mt-4 md:mt-0">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
