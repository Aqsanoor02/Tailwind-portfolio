import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <div>
      <footer className="text-white bg-black body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <Image alt="image" height={40} width={40} src="/Assets/Alogo.png"></Image>

            <span className="ml-3 text-xl">A Noor's Corner</span>
          </a>
          <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 ANC
            
          </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link href={'https://www.linkedin.com/in/nooraqsa'} target="blank" className="text-white">
            <FaLinkedin className="text-3xl hover:text-blue-900" />
            </Link>
        </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
