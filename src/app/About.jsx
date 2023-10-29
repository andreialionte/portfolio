"use client"

import React from 'react';
import Reveal from './Reveal';
// import GlobeComponent from './GlobeComponent';

function About() {
  return (
    <div className="container mx-auto px-4 py-16 mt-[500px]" id="about">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-2/3">
          <Reveal>
            <p className="text-opacity-50 text-blue-400 uppercase">Introduction</p>
            <h1 className="mb-8 text-4xl md:text-5xl font-bold uppercase">About Me</h1>
          </Reveal>
          <Reveal>
            <h1 className="text-lg md:text-xl mb-4">Hi there, I'm glad to have you here!</h1>
          </Reveal>
          <Reveal>
            <p className="text-lg md:text-xl mb-4">My name is Andrei Alione, and I'm a second-year student hailing from Romania with a fervent enthusiasm for web development. While my journey into the world of programming initially took me through various programming languages such as Python, C#, Java, and C++, I found my true calling in web development. </p>
          </Reveal>
          <Reveal>
            <p className="text-lg md:text-xl mb-4">During my explorations, I delved into the world of Python and experimented with the Tkinter library, creating interactive desktop applications with a graphical user interface. This experience not only honed my programming skills but also taught me the importance of user-friendly design.</p>
          </Reveal>
          <Reveal>
            <p className="text-lg md:text-xl mb-4">In addition to Python, I ventured into Java, where I got acquainted with libraries like JOptionPane for creating pop-up dialog boxes in desktop applications. These diverse experiences broadened my horizons and deepened my understanding of software development.</p>
          </Reveal>
          <Reveal>
            <p className="text-lg md:text-xl mb-4">However, it was the dynamic and ever-evolving nature of web development that truly captured my heart. The limitless potential for creativity, the immediate visual feedback, and the ability to reach a global audience were all factors that drew me in. Since then, I've been on a dedicated path of growth in web development, honing my skills in HTML, CSS, JavaScript, and ReactJS to create innovative and engaging web experiences.</p>
          </Reveal>
          <Reveal>
            <p className="text-lg md:text-xl mb-4">As a second-year student, I'm continually eager to learn and collaborate with others who share my passion. My journey in programming has been a colorful one, filled with diverse experiences that have contributed to my development as a web developer. Thanks for taking the time to get to know me a bit better!</p>
          </Reveal>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 pl-8">
          <div className="sticky top-0">
            <h1 className="text-4xl md:text-5xl font-bold uppercase mb-8">Skills</h1>
            <div className="grid grid-cols-3 gap-4 text-center">
              <p className="bg-gray-800 text-white py-2 rounded-md">JavaScript</p>
              <p className="bg-gray-800 text-white py-2 rounded-md">HTML</p>
              <p className="bg-gray-800 text-white py-2 rounded-md">CSS</p>
              <p className="bg-gray-800 text-white py-2 rounded-md">React</p>
              <p className="bg-gray-800 text-white py-2 rounded-md">Redux</p>
              <p className="bg-gray-800 text-white py-2 rounded-md">NextJS</p>
              <p className="bg-gray-800 text-white py-2 rounded-md">NodeJS</p>
              <p className="bg-gray-800 text-white py-2 rounded-md">Express</p>
              <p className="bg-gray-800 text-white py-2 rounded-md">GitHub</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-16">
        {/* <GlobeComponent /> */}
      </div>
      <h1 className="mt-16 text-blue-400 font-bold text-lg md:text-xl">My links</h1>
    </div>
  );
}

export default About;