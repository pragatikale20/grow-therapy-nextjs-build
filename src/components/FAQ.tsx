
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, I do not accept insurance directly. However, I provide a detailed superbill (receipt) after each session that you can submit to your insurance company for potential reimbursement. Many clients find they receive partial reimbursement depending on their out-of-network benefits."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes! I offer secure virtual sessions via Zoom on Mondays, Wednesdays, and Fridays from 1 PM to 5 PM. Virtual sessions are just as effective as in-person therapy and provide the convenience of receiving care from the comfort of your own space."
    },
    {
      question: "What is your cancellation policy?",
      answer: "I require 24-hour advance notice for cancellations or rescheduling. This allows me to offer the time slot to other clients who may need it. Cancellations made with less than 24 hours notice will be charged the full session fee."
    },
    {
      question: "How long are therapy sessions?",
      answer: "Individual therapy sessions are 50 minutes long, while couples sessions are 80 minutes. This provides adequate time to explore issues deeply while maintaining a structured therapeutic framework."
    },
    {
      question: "How often should I attend therapy sessions?",
      answer: "Most clients benefit from weekly sessions initially. As you progress, we may adjust the frequency based on your needs and goals. Some clients prefer bi-weekly sessions, while others benefit from more intensive weekly work, especially when addressing trauma or significant life changes."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Get answers to common questions about therapy sessions and policies
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6 animate-fade-in">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
