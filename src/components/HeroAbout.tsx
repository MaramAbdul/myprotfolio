"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const HeroAboutSection = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingFinished, setTypingFinished] = useState(false);
  const [isTypingStarted, setIsTypingStarted] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint (1024px)
    };

    checkScreenSize(); // Check screen size on load
    window.addEventListener("resize", checkScreenSize); // Listen for screen resize
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  const fullText1 = `I&apos;m a highly motivated software engineer passionate about solving complex problems through technology.`;
  const fullText2 =
    "I specialize in full-stack development with expertise in frontend (Vue.js, Angular, React), backend (PHP, Python, Go, Java, .NET), and cloud infrastructure (AWS, Azure, Docker).";
  const fullText3 =
    "I thrive in collaborative environments, continuously learning and applying new technologies to build scalable, high-quality applications.";

  const fullText = `${fullText1} ${fullText2} ${fullText3}`;

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

      const typingStart = 0.1; // Start typing at 10% visibility
      const typingEnd = 0.5; // Finish typing at 50% visibility

      if (scrollProgress >= typingStart) {
        setIsTypingStarted(true); // Ensure typing starts and never resets
      }

      if (
        scrollProgress >= typingStart &&
        scrollProgress <= typingEnd &&
        isTypingStarted
      ) {
        const adjustedProgress =
          (scrollProgress - typingStart) / (typingEnd - typingStart);
        const targetCharacters = Math.floor(fullText.length * adjustedProgress);
        setTypingIndex(targetCharacters);

        if (targetCharacters >= fullText.length) {
          setTypingFinished(true);
        }
      }
    };

    // Run handleScroll on load to check if section is already in view
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTypingStarted, fullText.length]);

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
      id="home"
      ref={aboutRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/70 to-secondary"
    >
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-background">
            Hi, I..m Maram Abdulrazzaq
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-background">
            Software Engineer | Full Stack Developer
          </p>

          {/* Typing Animation Section */}
          <div className="text-lg text-background leading-relaxed mt-6">
            <p>{displayedText1}</p>
            <p className="mt-4">{displayedText2}</p>
            {!typingFinished && typingIndex > 0 && (
              <span className="text-background font-bold animate-blink">|</span>
            )}
          </div>

          {/* Call-to-Action Button */}
          <div className="mt-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-accent text-text rounded-lg hover:bg-secondary transition duration-300"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center">
          <div
            className="w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent flex items-center justify-center"
            style={isLargeScreen ? { height: "400px" } : {}} // Apply only on large screens
          >
            <Image
              src="/profile.PNG"
              alt="Maram Abdulrazzaq"
              width={310}
              height={320}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAboutSection;
