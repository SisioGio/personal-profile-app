import React, { useState } from "react";

const ContactForm = ({id}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data Submitted:", formData);
  };

  return (
    <section className="bg-gray-100 py-16" id={id}>
      
      <div className="container mx-auto px-6 md:px-12 lg:w-1/2">
        {/* Introduction Text */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get in Touch with Us
          </h2>
          <p className="text-lg text-gray-600">
            We’d love to hear from you! Whether you have a great idea, a question, a problem that needs solving, or you’re interested in collaborating with us, feel free to reach out. Our team is here to assist you and explore new opportunities. Use the form below to get in contact, and we’ll get back to you as soon as possible.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg space-y-6"
        >
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-lg text-gray-600 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-lg text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Subject Input */}
          <div>
            <label htmlFor="subject" className="block text-lg text-gray-600 mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              placeholder="Subject of your message"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label
              htmlFor="message"
              className="block text-lg text-gray-600 mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-full focus:outline-none text-lg font-medium hover:bg-blue-700 transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
