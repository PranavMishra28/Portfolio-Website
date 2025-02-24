import React from "react";
import { Link } from "react-router-dom";
import resume from "../assets/resume.png";

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-primary p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link 
            to="/" 
            className="text-white hover:text-secondary transition-colors text-[18px] font-medium"
          >
            ← Back to Portfolio
          </Link>
          <a
            href={resume}
            download="Pranav_Mishra_Resume.png"
            className="bg-tertiary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
          >
            Download Resume
          </a>
        </div>
        <div className="bg-tertiary rounded-2xl p-8 shadow-xl">
          <img 
            src={resume} 
            alt="Pranav Mishra's Resume" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumePage; 