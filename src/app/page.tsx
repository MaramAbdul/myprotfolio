"use client";

import Navbar from "@/components/Navbar";

import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import HeroAboutSection from "@/components/HeroAbout";
import SkillsSection from "@/components/Skills";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white text-textColor min-h-screen"
    >
      <Navbar />
      {/* <Hero />
      <AnimatedSection id="about">
        <About />
      </AnimatedSection> */}
      <HeroAboutSection />
      <SkillsSection />
      <AnimatedSection id="projects">
        <Projects />
      </AnimatedSection>
      <AnimatedSection id="contact">
        <Contact />
      </AnimatedSection>
      <Footer />
    </motion.div>
  );
}
