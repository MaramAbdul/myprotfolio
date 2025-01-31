// "use client";
// import { useEffect, useState, useRef } from "react";
// import Image from "next/image";

// const AboutSection = () => {
//   const aboutRef = useRef<HTMLDivElement | null>(null);
//   const [typingIndex, setTypingIndex] = useState(0);
//   const [typingFinished, setTypingFinished] = useState(false);

//   const fullText1 =
//     "I'm a highly motivated software engineer passionate about solving complex problems through technology. I have a strong foundation in software development, cloud computing, and UI/UX design.";
//   const fullText2 =
//     "My expertise includes frontend (Vue.js, Angular, React), backend (PHP, Python, Go, Java, .NET), and cloud infrastructure (AWS, Azure, Docker). I thrive in collaborative environments, continuously learning and applying new technologies.";

//   const fullText = fullText1 + " " + fullText2;

//   useEffect(() => {
//     const aboutElement = aboutRef.current;
//     if (!aboutElement) return;

//     const handleScroll = () => {
//       if (!aboutRef.current) return;

//       const rect = aboutRef.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;
//       const sectionHeight = rect.height;

//       const scrollProgress = Math.min(
//         1,
//         Math.max(0, (windowHeight - rect.top) / (windowHeight + sectionHeight))
//       );

//       const typingStart = 0.2;
//       const typingEnd = 0.5;

//       if (scrollProgress >= typingStart && scrollProgress <= typingEnd) {
//         const adjustedProgress =
//           (scrollProgress - typingStart) / (typingEnd - typingStart);
//         const targetCharacters = Math.floor(fullText.length * adjustedProgress);
//         setTypingIndex(targetCharacters);

//         if (targetCharacters >= fullText.length) {
//           setTypingFinished(true);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const displayedText1 = fullText.slice(
//     0,
//     Math.min(typingIndex, fullText1.length)
//   );
//   const displayedText2 =
//     typingIndex > fullText1.length
//       ? fullText.slice(fullText1.length, typingIndex)
//       : "";

//   return (
//     <section
//       id="about"
//       ref={aboutRef}
//       className="min-h-screen flex items-center justify-center bg-background"
//     >
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text text-center">
//           About Me
//         </h2>
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="text-lg text-text leading-relaxed">
//             <p>{displayedText1}</p>
//             <p className="mt-4">{displayedText2}</p>
//             {!typingFinished && typingIndex > 0 && (
//               <span className="text-text font-bold animate-blink">|</span>
//             )}
//           </div>
//           <div className="flex justify-center items-center">
//             <Image
//               src="/profile.jpg"
//               alt="Profile"
//               width={256}
//               height={256}
//               className="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover border-4 border-accent"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
