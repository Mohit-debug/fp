import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import bitoodaIcon from "./assets/bitoodaIcon.png";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100); 
    }
  };

  const handleOurTeamClick = () => {
    if (location.pathname === "/") {
      const ourTeamSection = document.getElementById("our-team-section");
      if (ourTeamSection) {
        ourTeamSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const ourTeamSection = document.getElementById("our-team-section");
        if (ourTeamSection) {
          ourTeamSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  return (
    <div className="bg-[#2a0530] py-14 px-4 text-white flex justify-center">
      <div className="container max-w-screen-xl flex flex-col md:flex-row justify-between items-center md:items-start">
        
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
          {/* Logo and Name */}
          <div className="flex items-center space-x-4 mb-4">
            <img src={bitoodaIcon} alt="Logo" className="w-10 h-10 rounded-lg" />
            <h2 className="text-2xl font-bold">FP8</h2>
          </div>

          {/* Description and Address */}
          <div className="max-w-xs text-sm text-gray-400">
            <p className="mb-4">
              A next-generation platform for the rapidly growing high-performance compute ecosystem.
            </p>
            <p>Address: 55 Arch Street, Greenwich, CT 06830</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a
              href="https://twitter.com/BitOodaCompute"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2b2c54] p-3 rounded"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/bitooda/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2b2c54] p-3 rounded"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
        
        {/* Middle Section */}
        <div className="space-y-2 mb-8 md:mb-0 text-center md:text-left">
          <button
            onClick={() => handleNavigation("/research")}
            className="text-gray-400 hover:text-white block text-left"
          >
            Research
          </button>
          <button
            onClick={() => handleNavigation("/consulting")}
            className="text-gray-400 hover:text-white block text-left"
          >
            Consulting
          </button>
          <a href="/research-subscriptions" className="text-gray-400 hover:text-white block">
            Research Subscriptions
          </a>
          <button
            onClick={handleOurTeamClick}
            className="text-gray-400 hover:text-white block text-left"
          >
            Our Team
          </button>
        </div>

        {/* Right Section */}
        <div className="space-y-2 text-center md:text-left">
          <a
            href="https://www.bitooda.io/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white block"
          >
            Privacy Policy
          </a>
          <a
            href="https://www.bitooda.io/terms-of-use"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white block"
          >
            Terms of Use
          </a>
          <a
            href="mailto:info@bitooda.io"
            className="text-gray-400 hover:text-white block"
          >
            Contact
          </a>
          <a
            href="https://www.bitooda.io/disclosures"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white block"
          >
            Disclosures
          </a>
          <p className="text-gray-500 mt-4">© 2024 FP8</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
