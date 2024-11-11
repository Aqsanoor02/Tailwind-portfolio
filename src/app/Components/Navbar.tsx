import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="z-50 sticky top-0">
      <header className=" bg-black text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              alt="Logo"
              height={80}
              width={80}
              src="/Assets/Alogo.png"
            ></Image>
            <span className="text-teal-100 ml-3 text-xl  ">
              A Noor's Corner
            </span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link
              id="links"
              href={"#about"}
              className="mr-5 hover:text-gray-300"
            >
              Home
            </Link>
            <Link href={"#skills"} className="mr-5 hover:text-gray-300">
              Skills
            </Link>
            <Link href={"#contact"} className="mr-5 hover:text-gray-300">
              Contact
            </Link>
          </nav>
          <a  target="blank" href="/Assets/Aqsa-Noor-Resume.pdf">
            <button  className="inline-flex items-center bg-teal-400 border-0 py-1 px-3 focus:outline-none hover:bg-teal-600 rounded text-base mt-4 md:mt-0">
              Download CV
            </button>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
