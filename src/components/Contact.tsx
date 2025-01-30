const Contact = () => {
  return (
    <div className="py-20 px-6 text-center bg-gray-800 text-white">
      <h2 className="text-4xl font-bold">Contact Me</h2>
      <p className="mt-4 max-w-2xl mx-auto">
        Feel free to reach out to me for any inquiries or collaborations.
      </p>
      <a
        href="mailto:your.email@example.com"
        className="mt-6 inline-block bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600"
      >
        Email Me
      </a>
    </div>
  );
};
export default Contact;
