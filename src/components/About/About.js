import React, { useEffect, useState } from "react";
import ExperienceItem from "./Experience/ExperienceItem";
import Mello from "../../assets/mello.png";
import client from "../../client";

function About() {
  const [text, setText] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "About_Me_Text"] {
          About_Me_Text,
        }`
      )
      .then((data) => {
        console.log(data)
        setText(data);
        if (data.length === 0) {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  return (
    <div className="container mx-auto" id="about">
      <div className="flex flex-col justify-center items-center min-h-screen bg-white-100 px-6 md:px-24 py-20">
        <div className="text-2xl sm:text-3xl text-orange font-semibold border-b-4 border-orange inline-block mb-4">
          About Me
        </div>

        {error ? (
          <div className="text-sm sm:text-1xl sm:max-w-4xl text-gray font-medium mt-2">
            About Me data currently unavailable. I'm working on restoring them soon :)
          </div>
        ) : (
          <div className="flex flex-col items-center text-center mt-1">
            <div className="flex items-center">
              <i className="bx bxs-map text-gray text-1xl hover:text-lightgray" />
              <span className="text-gray font-semibold">Pennsylvania</span>
            </div>
            <div>
              <p className="text-sm sm:text-1xl sm:max-w-4xl text-gray font-medium mt-2">
                {text.map((text, index) => (
                  <div key={index}>{text.About_Me_Text}</div>
                ))}
              </p>
            </div>

            <div className="transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <a
                className="mt-4 flex items-center shadow-2xl p-2 rounded-md"
                href="/aviation"
              >
                {/* <p className="text-xs text-gray font-semibold">
                  View my aviation shots
                </p> */}
                {/* <i className="ml-2 text-3xl bx bxs-plane-take-off text-orange"></i> */}
              </a>
            </div>
          </div>
        )}

        <div className="flex items-center text-orange font-semibold mt-8">
          <span className="text-2xl mr-2">Experience</span>
          <i className="bx bxs-shapes text-2xl mr-2" />
        </div>

        <ExperienceItem />

        <div className="mt-11 w-6/12 md:w-3/12 ml-auto md:mt-0">
          <img src={Mello} alt="Mello" className="w-full md:w-auto" />
        </div>
      </div>
    </div>
  );
}

export default About;
