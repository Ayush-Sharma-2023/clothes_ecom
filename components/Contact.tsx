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
          🎉 Thanks for reaching out! We'll get back to you soon.
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
    <div className="bg-gray-900 text-white py-10 px-5">
      <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
      <p className="text-center mb-6">
        📞 Call Us: <span className="text-yellow-400">+91 9520671308</span>
      </p>

      <div className="bg-gray-100 p-6 rounded-lg max-w-2xl mx-auto shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 font-semibold">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="p-2 border border-gray-300 rounded-md text-black"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-semibold">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="p-2 border border-gray-300 rounded-md text-black "
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-700 font-semibold">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="p-2 border border-gray-300 rounded-md h-24 text-black"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md w-full transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
