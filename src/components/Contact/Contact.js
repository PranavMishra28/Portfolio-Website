import React, { useState } from "react";
import "./Contact.css";
import FormModal from "./FormModal";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      content: `**Name:** ${formData.name} \n **Email:** ${formData.email} \n **Message:** ${formData.message}`,
    };

    try {
      const response = await fetch(process.env.REACT_APP_DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setModalMessage("Message sent successfully!");
        setIsModalOpen(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setModalMessage("Failed to send message. Please try again later.");
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setModalMessage("An error occurred. Please try again later.");
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="sm:flex justify-center items-center min-h-max px-6 md:px-24 py-20"
      id="contact"
    >
      <div className="max-w-md w-full">
        <h2 className="text-3xl font-semibold text-orange text-center">
          Get in touch!
        </h2>
        <div>
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="shadow-effect bg-gray-50 text-gray text-sm rounded block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-orange focus:border-orange"
                  placeholder="Pranav Mishra"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="shadow-effect bg-gray-50 text-gray text-sm rounded block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-orange focus:border-orange"
                  placeholder="mishrapranav82@gmail.com" // Change after I buy domain name
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  className="shadow-effect bg-gray-50 text-gray text-sm rounded block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-orange focus:border-orange"
                  placeholder="Drop your message here"
                  required
                ></textarea>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="transition ease-in-out delay-150 hover:scale-110 py-3 px-5 text-sm font-medium text-center text-white rounded bg-orange sm:w-fit"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className={`${
          isModalOpen ? "fixed inset-0 backdrop-blur-md" : "hidden"
        }`}
      ></div>
      <FormModal
        isOpen={isModalOpen}
        message={modalMessage}
        onClose={closeModal}
      />
    </div>
  );
}

export default Contact;