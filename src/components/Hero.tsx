import { motion } from "framer-motion";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary"
    >
      <div className="text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-background"
        >
          Welcome to My Portfolio
        </motion.h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-background">
          I build amazing things with Next.js and Tailwind CSS!
        </p>
        <div className="mt-8">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 bg-accent text-text rounded-lg hover:bg-secondary transition duration-300"
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
