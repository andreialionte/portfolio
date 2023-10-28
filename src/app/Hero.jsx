"use client"
import React from 'react';
import Typewriter from 'typewriter-effect';
import wing from "/public/wing.png"
import frontwork from "/public/frontwork.png"
import Image from 'next/image';
import Reveal from './Reveal';

function Hero() {
  return (
    <div className="ml-[100px] mt-[150px]">
      <Reveal>
      <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-green-500 to-blue-500">
        Hello, I'm
      </h1>
      </Reveal>
      <h1 className="text-6xl font-extrabold">
        <Typewriter
          options={{
            strings: [
              "Andrei Alionte",
              "Front-End Developer",
              "Fast Learner",
              "Student",
            ],
            autoStart: true,
            loop: true, // Set loop to true for repetition
          }}
        />
      </h1>
      <Image src={frontwork} alt="working" className="w-[600px] h-[600px] absolute right-0 top-40"/>
      <div className="space-x-[20px] mt-[2.5rem]">
        <button className="bg-blue-600 text-[1rem] rounded-[15px] w-[140px] h-[40px]">Hire Me</button>
        <button className="ring-[2px] ring-blue-600 text-[1rem] rounded-[15px] w-[140px] h-[40px] transition-all duration-300 hover:bg-blue-600 active:scale-110">Download CV</button>
      </div>
    </div>
  );
}

export default Hero;