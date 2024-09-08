import React from "react";

function About() {
  return (
    <div id="About" className="py-14 px-11 md:pl-24">
      <h1 className="text-blue-600 font-bold py-6 text-4xl">SHEild</h1>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <h1 className="font-semibold pb-3 text-black text-2xl">
            Empowering and ensuring the safety of women is essential for
            building a just and secure society where everyone can thrive without
            fear.
          </h1>
          <h3 className="text-xl font-semibold pb-3 text-gray-800">
            we are committed to creating innovative, technology-driven solutions
            to ensure the safety and security of women in public spaces. With
            the growing concern over crimes against women, we believe that a
            proactive approach is crucial to safeguarding lives and fostering
            safer communities.
          </h3>
          <h3 className="text-xl font-semibold pb-1 text-blue-800">
            "The safety, honor, and welfare of women are the highest
            responsibility of every man.""
          </h3>
          <h4 className="text-lg text-blue-800 font-semibold">
            -Mahatma Gandhi
          </h4>
        </div>
        <div className="flex-1 pt-6 md:pt-0">
          <img src="/about2.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
