"use client"
import React from 'react';
import Typewriter from 'typewriter-effect';
import frontwork from "/public/frontwork.png"
import Image from 'next/image';
import Reveal from './Reveal';
import { saveAs } from 'file-saver';
// import Link from 'next/link';
import { Link, Link as ScrollLink } from 'react-scroll';

const handleDownloadCV = () => {
  const filename = "AndreiAlionteCV.pdf";
  const filepath = "/AndreiAlionteCV.pdf";
  saveAs(filepath, filename);
}

function Hero() {
  return (
    <div className="ml-[100px] mt-[150px]">
      <Reveal>
      <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-green-500 to-blue-500 max-md:text-[3.5rem] max-md:mr-[30px]">
        Hello, I'm
      </h1>
      </Reveal>
      <h1 className="text-6xl font-extrabold max-md:text-2xl">
        <Typewriter
          options={{
            strings: [
              "Andrei Alionte",
              "Front-End Developer",
              "Fast Learner",
              "Student",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <Image src={frontwork} alt="working" className="w-[600px] h-[600px] absolute right-0 top-40 max-md:w-[400px] max-md:h-[400px] max-md:top-[24rem] max-md:left-8"/>
      <div className="space-x-[20px] mt-[2.5rem] max-md:space-x-1">
        <Link to="contact" duration={1000} smooth={true} className="cursor-pointer">
        <button className="bg-blue-600 text-[1rem] rounded-[15px] w-[140px] h-[40px] max-md:w-[100px]">Hire Me</button>
        </Link>
        <button className="ring-[2px] ring-blue-600 text-[1rem] rounded-[15px] w-[140px] h-[40px] transition-all duration-300 hover:bg-blue-600 active:scale-110 max-md:w-[110px]" onClick={handleDownloadCV}>Download CV</button>
      </div>
    </div>
  );
}

export default Hero; 