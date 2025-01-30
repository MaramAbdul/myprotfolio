const Projects = () => {
  return (
    <div className="py-20 px-6 text-center bg-gray-900 text-white">
      <h2 className="text-4xl font-bold">Projects</h2>
      <p className="mt-4 max-w-2xl mx-auto">
        Here are some of the projects I have worked on:
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm">
          <h3 className="text-xl font-semibold">Project One</h3>
          <p className="mt-2">
            A web app that allows users to track their daily tasks.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm">
          <h3 className="text-xl font-semibold">Project Two</h3>
          <p className="mt-2">
            An e-commerce site with an intuitive UI for online shopping.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Projects;
