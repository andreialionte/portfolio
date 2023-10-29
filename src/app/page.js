import Image from 'next/image'
import Hero from "./Hero.jsx";
import Navbar from './Navbar.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
      // <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="">
        <Navbar />
        <Hero />
        <About />
        <Contact />
    </div>
  )
}
