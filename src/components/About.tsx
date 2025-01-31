"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image"; // ✅ Import Next.js Image

const AboutSection = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null); // ✅ FIX: Explicitly define type
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingFinished, setTypingFinished] = useState(false);

  const fullText1 =
    "Hi, I'm John Doe, a passionate web developer with over 5 years of experience in building modern, responsive, and user-friendly web applications.";
  const fullText2 =
    "I specialize in Next.js, React, and Tailwind CSS. I love turning ideas into reality through clean and efficient code.";

  const fullText = fullText1 + " " + fullText2; // Combine both paragraphs

  useEffect(() => {
    const aboutElement = aboutRef.current;
    if (!aboutElement) return;

    const handleScroll = () => {
      if (!aboutRef.current) return;

      const rect = aboutRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;

      const scrollProgress = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / (windowHeight + sectionHeight))
      );

      const typingStart = 0.2;
      const typingEnd = 0.5;
      const deleteStart = 0.2;
      const deleteEnd = 0;

      if (scrollProgress >= typingStart && scrollProgress <= typingEnd) {
        const adjustedProgress =
          (scrollProgress - typingStart) / (typingEnd - typingStart);
        const targetCharacters = Math.floor(fullText.length * adjustedProgress);
        setTypingIndex(targetCharacters);

        if (targetCharacters >= fullText.length) {
          setTypingFinished(true);
        }
      } else if (scrollProgress <= deleteStart && scrollProgress >= deleteEnd) {
        const adjustedProgress =
          (scrollProgress - deleteEnd) / (deleteStart - deleteEnd);
        const targetCharacters = Math.floor(fullText.length * adjustedProgress);
        setTypingIndex(targetCharacters);

        if (targetCharacters <= 0) {
          setTypingFinished(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fullText.length]); // ✅ Now includes `fullText.length` as a dependency

  // Split text dynamically
  const displayedText1 = fullText.slice(
    0,
    Math.min(typingIndex, fullText1.length)
  );
  const displayedText2 =
    typingIndex > fullText1.length
      ? fullText.slice(fullText1.length, typingIndex)
      : "";

  return (
    <section
      id="about"
      ref={aboutRef}
      className="min-h-screen flex items-center justify-center bg-background"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text text-center">
          About Me
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Typing effect controlled dynamically based on scroll */}
          <div className="text-lg text-text leading-relaxed">
            <p>{displayedText1}</p>
            <p className="mt-4">{displayedText2}</p>
            {/* Show cursor only if typing is in progress */}
            {!typingFinished && typingIndex > 0 && (
              <span className="text-text font-bold animate-blink">|</span>
            )}
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={256} // Adjust width
              height={256} // Adjust height
              className="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover border-4 border-accent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
