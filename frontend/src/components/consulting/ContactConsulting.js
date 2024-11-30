import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactConsulting = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f60f0no",
        "template_2xh80gg",
        form.current,
        "fRf_9tEs1A934fEMU"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response.status, response.text);
          form.current.reset();
        },
        (error) => {
          console.error("Email failed to send:", error);
        }
      );
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4 text-white">
        Contact Us For More Details
      </h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="user_name"
            className="w-full p-3 border border-purple-900 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-purple-300"
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="user_email"
            className="w-full p-3 border border-purple-900 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-purple-300"
            placeholder="Your email"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
            Website
          </label>
          <input
            type="text"
            name="user_website"
            className="w-full p-3 border border-purple-900 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-purple-300"
            placeholder="Your website (optional)"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
            Message
          </label>
          <textarea
            name="message"
            className="w-full p-3 border border-purple-900 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-purple-300"
            placeholder="Your message"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-500 text-white font-medium rounded-lg p-3 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          Contact Us
        </button>
      </form>
    </div>
  );
};
