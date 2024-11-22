import React, { useEffect, useState } from "react";
import client from "../../client";
import "./Home.css";

function Home() {
  const [error, setError] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [arrowUp, setArrowUp] = useState(true);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "profile-image"] {
          "imageUrl": Image.asset->url
        }`
      )
      .then((data) => {
        if (data.length > 0) {
          setProfileImage(data[0].imageUrl);
        } else {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setArrowUp((prevArrowUp) => !prevArrowUp);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("about");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const homeElement = document.getElementById("home");
    if (homeElement) {
      homeElement.classList.add("active");
    }
  }, []);

  // Generate alt text based on error state
  const altText = error ? "Error fetching image" : "Pranav's img";

  return (
    <div className="container mx-auto fade-in active" id="home">
      <div className="sm:flex justify-center items-center min-h-screen bg-white-100 px-6 md:px-24 py-20">
        <div className="max-w-4xl w-9/12 space-y-12">
          <div className="text-left">
            <h1 className="text-4xl sm:text-6xl text-gray font-bold leading-tight mb-4">
              Hi,
              <br />
              I'm <span className="text-orange text-shadow">
                {Array.from("Pranav").map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
              </span>
            </h1>
            <div className="flex items-center">
              <p className="text-1xl sm:text-2xl font-medium text-gray">
              Crafting solutions, one bug at a time
              </p>
              <i className="bx bx-code-alt text-gray text-xl ml-2"></i>
            </div>
            <button
              onClick={scrollToContact}
              className="mt-5 bg-orange hover:-translate-y-1 font-semibold text-white px-8 py-3 rounded-full hover:bg-orange focus:outline-none focus:ring-2 focus:ring-orange focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
              Scroll down <i class="text-xs bx bxs-down-arrow"></i>
            </button>

            <div className="mt-6 flex space-x-6 sm:mt-10">
              <a
                href="https://www.linkedin.com/in/pm28/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-linkedin text-gray text-2xl hover:text-lightgray"></i>
              </a>
              <a
                href="https://github.com/PranavMishra28"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-github text-gray text-2xl hover:text-lightgray"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={profileImage}
            alt={altText}
            className="ml-auto w-2/3 h-auto mt-5 sm:w-auto sm:h-auto lg:w-96 lg:h-auto object-cover object-center rounded-md shadow-lg"
          />
          <i
            className={`text-orange mt-10 text-2xl bx bxs-chevron-down sm:hidden ${
              arrowUp ? "animate-bounce-up-down" : ""
            }`}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Home;
