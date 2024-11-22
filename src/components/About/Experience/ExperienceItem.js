import React, { useEffect, useState } from "react";
import ExperienceModal from "./ExperienceModal";
import "./ExperienceItem.css";
import client from "../../../client";

function ExperienceItem() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalExperience, setModalExperience] = useState(null);

  const [error, setError] = useState(false);
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "experience-data"] {
          Company_Name,
          image {
            asset-> {
              url
            }
          },
          Role,
          Location,
          Date,
          Icons_For_Tech_Used,
          Description
        }`
      )
      .then((data) => {
        setExperienceData(data);
        if (data.length === 0) {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  const openModal = (experience) => {
    setModalExperience(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalExperience(null);
    setIsModalOpen(false);
  };

  const renderExperience = () => {
    if (experienceData.length === 0) {
      return (
        <div className="text-sm sm:text-1xl sm:max-w-4xl text-gray text-center font-medium mt-2">
          Experience data currently unavailable. I'm working on restoring them
          soon :)
        </div>
      );
    }

    if (experienceData.length === 1) {
      return (
        <div className="flex justify-center items-center">
          {experienceData.map((experience, index) => (
            <div
              key={index}
              className="shadow-effect rounded-lg flex items-center p-2 sm:p-2 transform transition-transform duration-300 ease-in-out hover:-translate-y-2"
              onClick={() => openModal(experience)}
            >
              <div className="border-r-2 border-gray">
                <img
                  src={experience.image.asset.url}
                  alt={experience.Company_Name}
                  className="object-cover w-20 h-20 md:w-32 md:h-32"
                />
              </div>
              <div className="ml-3">
                <p className="text-xl font-semibold text-orange mb-2">
                  {experience.Company_Name}
                </p>
                <p className="dark:text-gray font-semibold mb-1">
                  {experience.Role}
                </p>
                <p className="text-gray">📍 {experience.Location}</p>
                <p className="text-gray">{experience.Date}</p>
                <button
                  onClick={() => openModal(experience)}
                  className="text-gray font-semibold"
                >
                  More info
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="grid sm:grid-cols-2 gap-5">
        {experienceData.map((experience, index) => (
          <div
            key={index}
            className="shadow-effect rounded-lg flex items-center p-2 sm:p-2 transform transition-transform duration-300 ease-in-out hover:-translate-y-2"
            onClick={() => openModal(experience)}
          >
            <div className="border-r-2 border-gray">
              <img
                src={experience.image.asset.url}
                alt={experience.Company_Name}
                className="object-cover w-20 h-20 md:w-32 md:h-32"
              />
            </div>
            <div className="ml-3">
              <p className="text-xl font-semibold text-orange mb-2">
                {experience.Company_Name}
              </p>
              <p className="dark:text-gray font-semibold mb-1">
                {experience.Role}
              </p>
              <p className="text-gray">📍 {experience.Location}</p>
              <p className="text-gray">{experience.Date}</p>
              <div onClick={() => openModal(experience)}>
                <p className="text-gray font-semibold">More info</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="max-w-4xl mx-auto">{renderExperience()}</div>
      {modalExperience && (
        <ExperienceModal experience={modalExperience} onClose={closeModal} />
      )}
    </div>
  );
}

export default ExperienceItem;