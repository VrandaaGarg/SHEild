import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Team() {
  const team = [
    {
      id: 1,
      name: "Siddharth Singhal",
      role: "Full Stack Developer",
      image: "/Siddharth.png",
      insta:
        "https://www.instagram.com/siddharthsinghal_30?igsh=MWpvMjF3ZHJjOHFwNg==",
      linkdn:
        "https://www.linkedin.com/in/siddharth-singhal-242a10244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/joytechs247",
    },
    {
      id: 2,
      name: "Pranit Khandelwal",
      role: "Full Stack Developer",
      image: "/Pranit.png",
      insta: "https://www.instagram.com/pranit._11/",
      linkdn: "https://www.linkedin.com/in/pranit-khandelwal-951913269/",
      github: "https://github.com/pranit-pk",
    },
    {
      id: 3,
      name: "Harsh Kumar",
      role: "Full Stack Developer",
      image: "/Harsh.png",
      insta: "https://www.instagram.com/harshk._.14/",
      linkdn: "",
      github: "https://github.com/Hkcoder14",
    },
    {
      id: 4,
      name: "Ishaan Verma",
      role: "Full Stack Developer",
      image: "/Ishan.png",
      insta: "https://www.instagram.com/ishaanv_06/",
      linkdn: "https://www.linkedin.com/in/ishaan-v/",
      github: "https://github.com/ishaanv1206/",
    },
    {
      id: 5,
      name: "Vranda Garg",
      role: "Frontend Developer",
      image: "/Vranda.png",
      insta: "https://www.instagram.com/vranda_garg/",
      linkdn: "https://www.linkedin.com/in/vranda-garg-b68011293/",
      github: "https://github.com/VrandaaGarg",
    },

    {
      id: 6,
      name: "Rishi Singh",
      role: "Full Stack Developer",
      image: "/Rishi.png",
      insta: "https://www.instagram.com/_rishush_",
      linkdn: "https://www.linkedin.com/in/rishush/",
      github: "https://github.com/Risheeshh",
    },
  ];

  return (
    <div id="Team" className="p-8 pt-11 ">
      <h1 className="text-4xl font-semibold text-center mb-11 ">Team SHEild</h1>

      <div className="flex flex-wrap justify-center gap-5 md:gap-12 ">
        {team.map((data) => (
          <div
            key={data.id}
            className="w-64 bg-white shadow-lg rounded-lg overflow-hidden mb-8"
          >
            <div className="relative my-3">
              <div className="absolute inset-0 mx-5">
                <div className="bg-transparent w-full -z-10 h-[30%]"></div>
                <div className="bg-amber-500  w-full -z-10 h-[70%]"></div>
              </div>
              <div className="relative place-content-center flex z-10 h-max">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-48 h-64 object-cover"
                />
              </div>
            </div>
            <div className="p-4 text-center grid gap-2">
              <h2 className="text-xl font-bold ">{data.name}</h2>
              <h3 className="text-gray-600 ">{data.role}</h3>
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href={data.github}
                  className="text-gray-400 hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                </a>
                {data.linkdn && (
                  <a
                    href={data.linkdn}
                    className="text-gray-400 hover:text-gray-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                  </a>
                )}

                <a
                  href={data.insta}
                  className="text-gray-400 hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
