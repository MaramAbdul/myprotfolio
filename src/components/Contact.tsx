const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-background"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text">
          Contact Me
        </h2>
        <p className="mt-4 text-lg text-text">
          Let&apos;s connect and collaborate!
        </p>
        <div className="mt-6">
          <p className="text-lg text-text">📧 Email: badimaram75@gmail.com</p>
          <p className="text-lg text-text">📞 Phone: +973 36088772</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
