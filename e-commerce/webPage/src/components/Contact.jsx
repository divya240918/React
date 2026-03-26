import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 min-h-screen flex items-center">
      <div className="max-w-3xl mx-auto w-full bg-white p-8 rounded-xl shadow-md">
        
        <h2 className="text-3xl font-bold text-center text-[#03045e] mb-6">
          Contact Us
        </h2>

        <p className="text-gray-600 text-center mb-6">
          Have any questions or feedback? Feel free to reach out!
        </p>

        <form className="space-y-4">
          
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-gray-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-gray-400"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-gray-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#03045e] text-white py-3 rounded-lg hover:bg-gray-700 transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
};

export default Contact;