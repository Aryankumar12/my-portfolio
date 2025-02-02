"use client"

import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ message: "", type: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ message: "", type: "" });

    try {
      const res = await fetch("https://formspree.io/f/mkgobvlk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) {
        setStatus({ message: "Message sent successfully!", type: "success" });
        setEmail("");
        setMessage("");
      } else {
        setStatus({ message: "Failed to send message. Try again.", type: "error" });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({ message: "Something went wrong.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#eeeeee]" id='contactus'>
      {/* Left Div */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-6 p-5 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl text-black font-extrabold mb-6 md:mb-8">Contact Me</h1>
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/8630412121"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-3 w-48 sm:w-56 md:w-64 px-8 py-4 bg-white text-gray-800 font-semibold text-base sm:text-lg border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-lg hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all"
        >
          <FaWhatsapp className="text-green-500 text-xl sm:text-2xl" />
          <span>WhatsApp</span>
        </a>
        <a
          href="https://github.com/Aryankumar12"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-3 w-48 sm:w-56 md:w-64 px-8 py-4 bg-white text-gray-800 font-semibold text-base sm:text-lg border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-lg hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all"
        >
          <FaGithub className="text-black-500 text-xl sm:text-2xl" />
          <span>GitHub</span>
        </a>
        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/aryankumar26/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-3 w-48 sm:w-56 md:w-64 px-8 py-4 bg-white text-gray-800 font-semibold text-base sm:text-lg border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-lg hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all"
        >
          <FaLinkedin className="text-blue-600 text-xl sm:text-2xl" />
          <span>LinkedIn</span>
        </a>
      </div>

      {/* Right Div */}
      <div className="flex-1 flex justify-center items-center p-5">
        <form 
          onSubmit={handleSubmit} 
          className="bg-white p-6 sm:p-8 rounded-xl shadow-[8px_8px_0px_rgba(0,0,0,1)] w-full max-w-sm sm:max-w-md space-y-6"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center text-black">Send a Message</h2>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              placeholder="Your message"
              className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          {/* Send Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-white text-gray-800 font-semibold text-base sm:text-lg border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-lg hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {/* Status Message */}
          {status.message && (
            <p className={`text-center mt-2 ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
