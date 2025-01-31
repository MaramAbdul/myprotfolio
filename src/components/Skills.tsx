"use client";
import { motion } from "framer-motion";

const skills = [
  "React.js",
  "Next.js",
  "Vue.js",
  "TypeScript",
  "Node.js",
  "Django",
  "Go",
  "PHP",
  "Docker",
  "Kubernetes",
  "AWS",
  "CI/CD",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-background text-text">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold">Skills</h2>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="px-4 py-2 bg-background text-text rounded-full shadow-md hover:bg-accent transition cursor-pointer"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
