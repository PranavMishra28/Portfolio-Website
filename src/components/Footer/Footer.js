import React from "react";

function Footer() {
  return (
    <footer className="bg-darkgray text-white py-4 sm:py-6">
      <div className="container mx-auto text-center">
        <div className="font-semibold text-lg sm:text-2xl">Pranav Mishra</div>
        <div className="text-base mt-2">
          <a href="mailto:contact@krushil.dev">
            <i className="hover:text-orange bx bxs-envelope"></i>
          </a>
        </div>
        <div className="font-semibold text-sm mt-2">Crafted with <i className="text-orange bx bxs-heart"></i> by Krushil</div>
        <div className="font-semibold text-sm mt-1">Lets connect &nbsp; :)</div>
      </div>
    </footer>
  );
}

export default Footer;
