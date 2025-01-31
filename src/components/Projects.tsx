const ProjectsSection = () => {
  const projects = [
    {
      title: "Project 1",
      description:
        "A modern e-commerce platform built with Next.js and Tailwind CSS.",
      image: "/project1.jpg", // Replace with your project image
    },
    {
      title: "Project 2",
      description:
        "A portfolio website showcasing creative designs and animations.",
      image: "/project2.jpg", // Replace with your project image
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary to-accent"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-background text-center">
          My Projects
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-background rounded-lg shadow-lg animate-slide-in-left"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover aspect-video rounded-lg"
              />
              <h3 className="mt-4 text-2xl font-bold text-text">
                {project.title}
              </h3>
              <p className="mt-2 text-text">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
