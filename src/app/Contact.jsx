"use client"
import React from 'react';
import GlobeComponent from './GlobeComponent';
import Typewriter from 'typewriter-effect';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Reveal from './Reveal';
import { useState } from 'react';

function Contact() {
  const initialCameraPosition = {
    latitude: 44.179249,
    longitude: 28.649940,
    zoom: 2,
    markerType: 'flag',
    angle: 0,
  };

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [works, setWorks] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    if (fname === "" || lname === "" || email === "" || message === "") {
      setError("Please fill in all the fields");
    } else {
      setError(false);
  
      const templateParams = {
        from_name: `${fname} ${lname}`,
        from_email: email,
        message: message,
      };
  
      emailjs
        .send('service_arxn77u', 'template_npfmsne', templateParams, 'S1Pwz_vjosUCJsNTe')
        .then((result) => {
          console.log(result.text);
        })
        .catch((error) => {
          console.log(error.text);
        });
  
      form.current.reset();
      setFname("");
      setLname("");
      setEmail("");
      setMessage("");
  
      console.log("First Name:", fname);
      console.log("Last Name:", lname);
      console.log("Email:", email);
      console.log("Message:", message);
      if(emailjs.send) {
        setWorks("Email sent successfully!");
      }
    }
  };

  return (
    <div id="contact" className="flex gap-[300px]">
      <div className="flex flex-col items-center justify-center w-[40%] h-screen mr-[250px]">
        {/* <GlobeComponent initialCameraPosition={initialCameraPosition} /> */}
      </div>
      <div className="mt-[130px] ">
        <Reveal>
          <p className="uppercase opacity-50 text-blue-400">GET IN TOUCH</p>
          <h1 className="mb-[50px] text-[3rem]">CONTACT</h1>
        </Reveal>
        <form ref={form} onSubmit={sendEmail}>
          <Reveal>
            <h1 className="text-center mt-[50px] bg-[#232323] rounded-[15px] text-[2.6rem] mb-[25px] uppercase ">
              <Typewriter
                options={{
                  strings: [
                    "Got ideas?",
                    "Let's team up!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Reveal>
          <Reveal>
            <label className="text-xl font-bold">First Name</label><br />
            <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} className="w-[400px] h-[30px] rounded-[15px] mb-[20px] text-black " /><br />
          </Reveal>
          <Reveal>
            <label className="text-xl font-bold">Last Name</label><br />
            <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} className="w-[400px] h-[30px] rounded-[15px] mb-[20px] text-black" /><br />
          </Reveal>
          <Reveal>
            <label className="text-xl font-bold">E-mail</label><br />
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="w-[400px] h-[30px] rounded-[15px] mb-[20px] text-black" /><br />
          </Reveal>
          <Reveal>
            <label className="text-xl font-bold">Message</label><br />
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-[400px] h-[100px] rounded-[15px] mb-[20px] text-black" /><br />
            <button className="bg-blue-600 text-[1rem] rounded-[15px] w-[140px] h-[40px]">Send</button>
          </Reveal>
          {error && <p className="text-red-500">{error}</p>}
          {works && <p className="text-green-500">{works}</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;