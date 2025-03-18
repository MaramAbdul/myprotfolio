import Image from "next/image";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Notati Web Application",
      description:
        "A note-taking web app with advanced writing efficiency features.",
      image: "/notati.jpg",
      technologies: "Django, Python, Vue.js, PostgreSQL, AWS",
    },
    {
      title: "Bike Workshop Mobile App",
      description: "A mobile app for buying, selling, and maintaining bikes.",
      image: "/bikeapp.jpg",
      technologies: "Ionic, Angular, Firebase",
    },
    {
      title: "RM Dashboard",
      description: "A risk management dashboard for data visualization.",
      image: "/rm-dashboard.jpg",
      technologies: "React.js, .NET, Microsoft SQL, REST APIs",
    },
    {
      title: "E-Commerce Platform",
      description:
        "An online store with product management and payment gateway integration.",
      image: "/ecommerce.jpg",
      technologies: "Next.js, Node.js, Stripe, MongoDB",
    },
    {
      title: "AI Chatbot",
      description:
        "A chatbot powered by AI to assist users with automated responses.",
      image: "/chatbot.jpg",
      technologies: "Python, TensorFlow, React.js, Firebase",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio showcasing my skills, projects, and contact information.",
      image: "/portfolio.jpg",
      technologies: "Next.js, Tailwind CSS, Vercel",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary to-accent p-4"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-background text-center">
          My Projects
        </h2>
        {/* ✅ Set 3 columns layout for larger screens */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-background rounded-lg shadow-lg">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-2xl font-bold text-text">
                {project.title}
              </h3>
              <p className="mt-2 text-text">{project.description}</p>
              <p className="text-sm mt-2 text-gray-400">
                Technologies: {project.technologies}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
