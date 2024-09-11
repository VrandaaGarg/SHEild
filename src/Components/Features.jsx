import React from "react";

const Features = () => {
  const features = [
    {
      question: "Real-Time Emergency Response",
      answer:
        "Stay connected with local emergency services for fast, reliable assistance when you need it most. Our system integrates with emergency responders, drastically reducing response times and enhancing your safety during critical moments.",
    },
    {
      question: "SOS Distress Signal",
      answer:
        "With just one tap, activate the SOS Distress Signal to instantly alert authorities and your trusted contacts. Your real-time location and a distress message are sent immediately, ensuring rapid action when every second counts.",
    },
    {
      question: "Live Location Sharing",
      answer:
        "Keep emergency services and your loved ones updated with real-time location tracking. This feature helps responders and contacts track your movements during emergencies, improving the chances of a swift and safe rescue.",
    },
    {
      question: "Cab-Booking Service",
      answer:
        "Easily book government-authorized cabs when you're in a remote area with no transport options. Safe, reliable, and available at your fingertips for quick travel to your destination.",
    },
    {
      question: "Safe Places Database",
      answer:
        " Safe Places Database provides an interactive map that highlights safe and unsafe areas based on women's reviews, police station locations, past records, and other safety metrics. It helps you make informed decisions about where to go, guiding you to safer routes and nearby secure locations like police stations and hospitals.",
    },
    {
      question: "Women's Safety Community Chat",
      answer:
        "Our platform provides a dedicated chat space where women can connect and support each other. It offers a safe environment to discuss local areas, plan carpools for late-night travel, and share safety tips.",
    },
  ];

  return (
    <div id="Features" className="max-w-6xl  py-12 pt-16 mx-2 md:mx-auto">
      <h2 className="text-4xl text-black  font-bold mb-10 text-center">
        FEATURES
      </h2>
      <div className="grid gap-8  md:grid-cols-3 px-10 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white  hover:scale-105 cursor-pointer duration-100 text-black hover:bg-amber-300  p-6 rounded-lg shadow-md"
          >
            <div className="flex items-start">
              <div className="w-10 h-10 flex-shrink-0  bg-blue-500 text-white  rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 9l3-3 3 3m0 6l-3 3-3-3"
                  />
                </svg>
              </div>
              <div className="">
                <h3 className="text-xl text-black font-semibold mb-2 ">
                  {feature.question}
                </h3>
                <p className="text-gray-900">{feature.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
