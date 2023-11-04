"use client"
import React from 'react';
import Image from 'next/image';
import logonavbar2 from "/public/logo-navbar-white.png";
import { Link, Link as ScrollLink } from 'react-scroll';

function Navbar() {
  return (
    <div className="flex justify-between items-center top-0 bg-[#121212] bg-opacity-[100%] px-20 ">
      <Image src={logonavbar2} alt="logo" width={300} height={50}/>

      <div className="flex space-x-20 items-center text-[#E5E7EB]">
        <Link to="about" duration={700} smooth={true}  className="text-[1.5rem] font-bold max-md:hidden ">About</Link>
        <Link to="projects" duration={700} smooth={true} className="text-[1.5rem] font-bold max-md:hidden ">Projects</Link>
        <Link to="contact" duration={1000} smooth={true}  className="text-[1.5rem] font-bold max-md:hidden">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
