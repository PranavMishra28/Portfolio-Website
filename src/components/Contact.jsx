import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // Add status state

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
    
    // Clear status when user modifies form
    if (status) {
      setStatus(null);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate name
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    // Validate email
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Validate message
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.length > 300) {
      newErrors.message = "Message cannot exceed 300 characters";
    }
    
    // Check for URLs or image patterns in message
    const urlPattern = /(https?:\/\/[^\s]+)|(www\.[^\s]+)|(\[img\])|(<img)/i;
    if (urlPattern.test(form.message)) {
      newErrors.message = "Message cannot contain URLs or images";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Client-side validation
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setStatus(null);

    try {
      console.log("Submitting form to API...");
      
      // First try to hit the test endpoint to check API connectivity
      try {
        const testResponse = await fetch("/api/test");
        if (!testResponse.ok) {
          console.error("API test endpoint failed:", await testResponse.text());
          throw new Error("API server is not responding correctly");
        } else {
          console.log("API test successful:", await testResponse.json());
        }
      } catch (testError) {
        console.error("API test error:", testError);
        throw new Error("Cannot connect to API server. Backend might not be running.");
      }
      
      // Now try the actual form submission
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      console.log("Raw API response:", response);
      
      // Handle non-JSON responses properly
      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
        console.log("API JSON response:", data);
      } else {
        const textResponse = await response.text();
        console.error("Non-JSON response:", textResponse);
        throw new Error("Server returned an invalid response format");
      }

      if (response.ok) {
        setStatus({
          type: "success",
          message: data.message || "Thank you. I will get back to you as soon as possible."
        });
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        // Handle validation errors from server
        if (data.errors) {
          const serverErrors = {};
          data.errors.forEach((err) => {
            serverErrors[err.path] = err.msg;
          });
          setErrors(serverErrors);
        } else {
          setStatus({
            type: "error",
            message: data.message || "Failed to send message. Please try again."
          });
        }
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setStatus({
        type: "error",
        message: `Error: ${error.message || "Network error. Please check your connection and try again."}`
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          {/* Show status messages */}
          {status && (
            <div className={`p-4 rounded-lg ${status.type === "success" ? "bg-green-800/50 text-green-200" : "bg-red-800/50 text-red-200"}`}>
              {status.message}
            </div>
          )}
          
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium ${
                errors.name ? "border-2 border-red-500" : "border-none"
              }`}
            />
            {errors.name && (
              <span className="text-red-500 mt-1">{errors.name}</span>
            )}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium ${
                errors.email ? "border-2 border-red-500" : "border-none"
              }`}
            />
            {errors.email && (
              <span className="text-red-500 mt-1">{errors.email}</span>
            )}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What would you like to say?'
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium ${
                errors.message ? "border-2 border-red-500" : "border-none"
              }`}
            />
            {errors.message && (
              <span className="text-red-500 mt-1">{errors.message}</span>
            )}
            <span className="text-gray-400 mt-1">
              {form.message.length}/300 characters
            </span>
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#915EFF] transition-colors disabled:opacity-50'
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
