'use client';

import { useState, useEffect } from "react";
import TextType from '../design/text_type/text_type';
import PixelBlast from '../design/pixels/pixels';

export default function Home() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setDark(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else if (savedTheme === 'dark') {
      setDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDark(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      }
    }
  }, []);

  const toggleDark = () => {
    const nextDark = !dark;
    setDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Interactive Background */}
      <div className="fixed inset-0 -z-10 w-full h-full">
        <PixelBlast
          variant="circle"
          pixelSize={4}
          color={dark ? "#B19EEF" : "#7c3aed"}
          patternScale={5}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.8}
          edgeFade={0.25}
        />
      </div>

      <div className="relative z-10 w-full min-h-screen flex flex-col font-sans">
        {/* Header */}
        <header
          className={`flex justify-between items-center px-6 sm:px-10 py-5 w-full sticky top-0 z-20 backdrop-blur-md shadow-sm transition-colors duration-300 ${
            dark
              ? "bg-gray-900/60 border-b border-white/10 text-white"
              : "bg-white/80 border-b border-gray-200/80 text-gray-900"
          }`}
        >
          <div className="font-bold text-lg sm:text-xl tracking-tight">Philip Biechl</div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className={`text-sm sm:text-base ${dark ? "text-gray-300" : "text-gray-600"}`}>
              Located in Munich, Bavaria
            </div>

            {/* Dark mode toggle */}
            <button
              type="button"
              onClick={toggleDark}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              className={`p-2 rounded-lg border transition-all duration-200 cursor-pointer ${
                dark
                  ? "bg-gray-800/80 border-gray-700 text-yellow-400 hover:bg-gray-700"
                  : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {dark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </div>
        </header>

        {/* Hero */}
        <section className="w-full min-h-[75vh] flex justify-center items-center text-center px-4">
          <div className="py-12 px-4 max-w-3xl">
            <h1 className={`text-4xl sm:text-5xl font-bold mb-4 tracking-tight ${dark ? "text-white" : "text-gray-900"}`}>
              Hello, I’m <span className="text-blue-500">Philip Biechl</span>
            </h1>

            <div className={`text-lg sm:text-xl font-medium min-h-[3.5rem] flex items-center justify-center ${dark ? "text-gray-300" : "text-gray-700"}`}>
              <TextType 
                as="span"
                text={["A Vision forming the Engineering of tomorrow", "M.Sc. Electrical Engineering & Information Technology"]}
                typingSpeed={75}
                pauseDuration={3000}
                showCursor={true}
                cursorCharacter="|"
              />
            </div>

            <a
              href="https://github.com/PhilipBiechl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              View My Work
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="w-full py-16 px-6 sm:px-10 text-center">
          <div
            className={`rounded-2xl p-8 sm:p-10 shadow-lg max-w-3xl mx-auto backdrop-blur-md border transition-all duration-300 ${
              dark
                ? "bg-gray-900/60 border-white/10 text-gray-200 hover:border-white/20"
                : "bg-white/80 border-gray-200/80 text-gray-700 hover:border-gray-300"
            }`}
          >
            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${dark ? "text-white" : "text-gray-900"}`}>
              About Me
            </h2>
            <p className="leading-relaxed text-base sm:text-lg">
              My motto is simple: to be the best today means to be old tomorrow.
              <br /><br />
              By embracing challenges, seeking out for new opportunities, and an unbreakable will to improve, I keep my finger on the pulse of technology. At work as in university, where I define myself through precision and a strong vision for the future, this is what I am dedicated to.
              <br /><br />
              Always aim to be the best of tomorrow.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="w-full py-16 px-6 sm:px-10 text-center">
          <div
            className={`rounded-2xl p-8 sm:p-10 shadow-lg max-w-xl mx-auto backdrop-blur-md border transition-all duration-300 ${
              dark
                ? "bg-gray-900/60 border-white/10 text-gray-200 hover:border-white/20"
                : "bg-white/80 border-gray-200/80 text-gray-700 hover:border-gray-300"
            }`}
          >
            <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${dark ? "text-white" : "text-gray-900"}`}>
              Contact
            </h2>
            <p className="text-base sm:text-lg mb-6">
              Feel free to reach out if you’d like to collaborate
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="https://www.linkedin.com/in/philip-biechl/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center bg-blue-600 text-white font-medium px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                LinkedIn
              </a>
              <a
                href="mailto:philip.biechl@gmail.com"
                className="inline-flex justify-center items-center bg-blue-600 text-white font-medium px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                Email
              </a>
              <a
                href="https://www.instagram.com/philip.biechl/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center bg-blue-600 text-white font-medium px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                Instagram
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className={`text-center py-6 text-sm w-full transition-colors duration-300 border-t ${
            dark
              ? "bg-gray-900/60 text-gray-400 border-white/10"
              : "bg-white/80 text-gray-500 border-gray-200"
          }`}
        >
          © 2026 Philip Biechl. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
