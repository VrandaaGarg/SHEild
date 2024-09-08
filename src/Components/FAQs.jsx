import React, { useState } from "react";

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How to create an account?",
      answer:
        "To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform.",
    },
    {
      question: "Have any trust issue?",
      answer:
        "Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.",
    },
    {
      question: "How can I reset my password?",
      answer:
        "You can reset your password by clicking the 'Forgot password' link on the login page, following the steps to receive a password reset link via email, and updating your password securely.",
    },
    {
      question: "What is the payment process?",
      answer:
        "You can make payments via various methods such as credit card, debit card, and PayPal. Once the payment is completed, you'll receive a confirmation email.",
    },
  ];

  return (
    <div className="px-16 pt-12" id="FAQs">
      <section className="">
        <div className="">
          <div className="text-[25px] text-center lg:text-4xl md:py-10 font-semibold">
            Frequently Asked Questions
          </div>
          <div className="flex flex-col justify-center items-center md:gap-x-14 md:gap-y-5 lg:flex-row ">
            <div className="w-full lg:w-1/3">
              <img
                src="/FAQ.webp"
                alt="FAQ tailwind section"
                className="w-full rounded-xl object-cover"
              />
            </div>
            <div className="w-full lg:w-2/3">
              <div className="">
                <div
                  className="accordion-group"
                  data-accordion="default-accordion"
                >
                  {faqData.map((faq, index) => (
                    <div
                      key={index}
                      className="accordion py-4 md:py-6 border-b border-solid border-gray-200"
                    >
                      <button
                        className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 "
                        aria-expanded={activeIndex === index}
                        onClick={() => handleToggle(index)}
                      >
                        <h5 className="text-left">{faq.question}</h5>
                        <svg
                          className={`text-gray-900 transition duration-500 ${
                            activeIndex === index ? "rotate-180" : ""
                          }`}
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                      <div
                        className={`accordion-content w-full px-0 overflow-hidden pr-4 ${
                          activeIndex === index ? "max-h-full" : "max-h-0"
                        } transition-max-height duration-500`}
                      >
                        <p className=" text-left text-lg pt-6 text-gray-600 ">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQs;
