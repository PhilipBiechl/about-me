'use client'

import { useState } from "react";
import TextType from '../design/text_type/text_type';
import PixelBlast from '../design/pixels/pixels';

export default function Home() {
  const [dark, setDark] = useState(true);
  return (
    <>
      <div className='w-full h-screen relative flex'>
      <PixelBlast
        variant="circle"
        pixelSize={6}
        color="#B19EEF"
        patternScale={3}
        patternDensity={1.2}
        pixelSizeJitter={0.5}
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        liquidStrength={0.12}
        liquidRadius={1.2}
        liquidWobbleSpeed={5}
        speed={0.6}
        edgeFade={0.25}
      />
      <div/>

      <div className={`font-sans absolute`}>
      {/* Navbar */}
      <header className={`flex justify-between items-center px-10 py-6 ${dark ? "bg-gray-800" : "bg-white"} shadow-md sticky top-0 z-10`}>
      <div className="font-bold text-lg">Philip Biechl</div>
      <nav>
      <ul className="flex gap-6">
      <li><a href="#about" className="hover:text-blue-600">About</a></li>
      <li><a href="#whatido" className="hover:text-blue-600">What I do</a></li>
      <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>
      </nav>
      {/* Dark mode toggle */}
      <label className="relative inline-flex items-center cursor-pointer ml-4">
      <input type="checkbox" className="sr-only peer" checked={dark} onChange={() => setDark(!dark)} />
      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 transition-colors"></div>
      <span className={`absolute left-1 top-1 w-4 h-4 ${dark ? "bg-gray-800" : "bg-white"} rounded-full transition-transform peer-checked:translate-x-5`}></span>
      </label>
      </header>


      {/* Hero */}
      <section className={`flex justify-center items-center {"h-[80vh]"} text-center bg-gradient-to-r from-${dark ? "indigo-400 to-gray-800" : "indigo-100 to-gray-50"} px-4`}>
      <div style={{ padding: '50px 10px', margin: '25px' }}>
      <h1 className="text-4xl font-bold mb-2">
      Hello, I’m <span className="text-blue-600">Philip Biechl</span>
      </h1>

      <p className="text-lg">
        <TextType 
          text={["A Vision forming the Engineering of tomorrow", "B.Sc. Student Electronics and Information Technology"]}
          typingSpeed={75}
          pauseDuration={3000}
          showCursor={true}
          cursorCharacter="|"
        />
      </p>
      
      {/*<p className="text-lg">B.Sc. Student Electronics and Information Technology | A Vision forming the Engineering of tomorrow</p>*/}
      <a href="#whatido" className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">View My Work</a>
      </div>
      </section>


      {/* About */}
      <section id="about" className="py-16 px-10 text-center">
      <div className={`${dark ? "bg-gray-800" : "bg-white"} rounded-xl p-10 shadow-md max-w-3xl mx-auto`}>
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p>
      My motto is simple: to be the best today means to be old tomorrow. 

      By embracing challenges, seeking out for new opportunities, and an unbreakable will to improve, I keep my finger on the pulse of technology. At work as in university, where I define myself through precision and a strong vision for the future, this is what I am dedicated to.

      Always aim to be the best of tomorrow.
      </p>
      </div>
      </section>


      {/* Projects */}
      <section id="whatido" className="py-16 px-10 text-center">
      <h2 className="text-2xl font-bold mb-6">What I do</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {[
      { title: "My work as a technical student", desc: "While completing my Bachelor's degree I pursue getting insights and working in the industry to stay at the pulse of time and refine my talent to optimise my knowledge and skill." },
      { title: "Personal projects", desc: "You're welcome to take a look at my Github profile to get some insights. Be it uninversity projects, programms for personal use or conjoint projects with my connections, I always immerse myself to reach perfection in my work." },
      { title: "Skills & interests", desc: "Combining industrial knowledge with interpersonal skills, I love to immerse myself in big visions and take the lead on cutting-edge projects." }
      ].map((p, i) => (
      <div key={i} className={`${dark ? "bg-gray-800" : "bg-white"} p-6 rounded-xl shadow-md hover:-translate-y-1 transition-transform`}>
      <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
      <p>{p.desc}</p>
      </div>
      ))}
      </div>
      </section>


      {/* Contact */}
      <section id="contact" className="py-16 px-10 text-center">
      <div className={`${dark ? "bg-gray-800" : "bg-white"} rounded-xl p-10 shadow-md max-w-xl mx-auto`}>
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p>Feel free to reach out if you'd like to collaborate or chat about engineering!</p>
      <a href="mailto:philip.biechl@gmail.com" className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Email Me</a>
      </div>
      </section>


      {/* Footer */}
      <footer className={`${dark ? "bg-gray-800" : "bg-white"} text-center py-4 ${dark ? "text-gray-400" : "text-gray-500"} text-sm`}>
      © 2025 Philip Biechl. All rights reserved.
      </footer>
      </div>
    </div>
    </>
  );
}
