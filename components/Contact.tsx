"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("mrbpakdd"); // Replace with your Formspree ID

  if (state.succeeded) {
    return (
      <div className="text-center p-6">
        <p className="text-green-500 text-lg font-semibold">
          🎉 Thanks for reaching out! We&apos;ll get back to you soon.
        </p>
        <Link
          href="/"
          className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition"
        >
          Back to Home
      
        </Link>
        
      </div>
    );
  }
  

  return (
    <div className="bg-white text-gray-900 py-10 px-5">
  <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
  <p className="text-center mb-6">
    📞 Call Us: <span className="text-orange-500 font-semibold">+91 9520671308</span>
  </p>

  <div className="bg-gray-100 p-6 rounded-lg max-w-2xl mx-auto shadow-lg border border-gray-300">
    <form onSubmit={handleSubmit} className="space-y-4">
      
      {/* Name Input */}
      <div className="flex flex-col">
        <label htmlFor="name" className="text-gray-700 font-semibold">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="p-2 border border-gray-400 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* Email Input */}
      <div className="flex flex-col">
        <label htmlFor="email" className="text-gray-700 font-semibold">
          Your Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="p-2 border border-gray-400 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* Message Input */}
      <div className="flex flex-col">
        <label htmlFor="message" className="text-gray-700 font-semibold">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="p-2 border border-gray-400 rounded-md h-24 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md w-full transition shadow-md"
      >
        Send Message
      </button>
    </form>
  </div>
</div>

  );
};

export default ContactForm;
