'use client';
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "What's your Minimum Order?",
      answer: "We offer Free Samples. You can choose from 1 piece to a complete sample kit. For bulk orders, our MOQ is 40 pieces of each style.",
    },
    {
      question: "What prices do you offer?",
      answer: "Our prices depend on your order quantity, number of styles, and customizations. The more quantity you order, the lower the price. Please contact us for a custom quote.",
    },
    {
      question: "What kind of packaging do you offer?",
      answer: "Our standard packaging includes sorted bundling and corrugated boxes with cling wrap. For customized packaging, you can choose Gift Boxes, Custom Plastic Bags, or Custom Printed Master Cartons.",
    },
    {
      question: "How long will you take to deliver?",
      answer: "Express shipping takes 3-7 days depending on your location. Sea Shipping takes 15-40 days approximately. You can also choose to book your own courier and pick up from our warehouse in New Delhi, India.",
    },
    {
      question: "Which Shipping Partners do you use?",
      answer: "We use FedEx, DHL, UPS, and direct Air Cargo for Express Delivery. For Sea Shipping, we use Nava Shiva (India).",
    },
    {
      question: "Where are you located?",
      answer: "We are based in New Delhi, Capital of India.",
    },
    {
      question: "How do I place the order?",
      answer: "You can email us your order details: Item Style code, Colour, Sizes, Design (for printing), and your billing details. Your order will be confirmed with a copy of the invoice (with a payment link).",
    },
    {
      question: "How do I make the payment?",
      answer: "You can use wire transfer or PayPal. For wire transfer, please check the fees charged by your bank. For PayPal, a 4% transaction fee + 3.5% currency conversion fee is applicable.",
    },
    {
      question: "What about shipping charges, custom duties, and taxes?",
      answer: "For international orders, our shipping charges include freight and customs clearance in India. Any other duties or charges are payable on arrival as per your country's norms. For domestic orders, 5% GST will be applicable.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">HAVE QUESTIONS? WE ARE HERE TO ANSWER 24X7</h1>
        <p className="text-lg text-gray-600 text-center mb-10">Find answers to commonly asked questions below.</p>

        <div className="max-w-3xl w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center px-5 py-4 text-lg font-semibold text-gray-800 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-gray-600 transition-transform duration-300 ease-in-out transform">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden px-5 py-3 text-gray-700 border-t border-gray-200">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
