import React from 'react';
import Image from 'next/image';
import logonavbar2 from "/public/logo-navbar-white.png";
import Link from 'next/link';

function Navbar() {
  return (
    <div className="flex justify-between items-center mx-[100px] mt-[10px]">
      <Image src={logonavbar2} alt="logo" width={300} height={50}/>

      <div className="flex space-x-[20px] items-center mb-[25px] text-[#E5E7EB] ">
        <Link href="#about" className="text-[1.5rem] font-bold ">About</Link>
        <Link href="#projects" className="text-[1.5rem] font-bold ">Projects</Link>
        <Link href="#contact" className="text-[1.5rem] font-bold">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;