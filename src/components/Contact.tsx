const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-background"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text text-center">
          Contact Me
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <form className="space-y-4 animate-scale-up">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border border-text rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border border-text rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 border border-text rounded-lg"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-text text-background rounded-lg hover:bg-primary transition duration-300"
            >
              Send
            </button>
          </form>
          <div className="flex flex-col space-y-4">
            <p className="text-lg text-text">
              Feel free to reach out to me for collaborations or just a friendly
              chat!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                className="text-text hover:text-accent transition duration-300"
              >
                Twitter
              </a>
              <a
                href="https://github.com"
                className="text-text hover:text-accent transition duration-300"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                className="text-text hover:text-accent transition duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
