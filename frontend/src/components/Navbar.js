import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import bitoodaIcon from "../components/assets/bitoodaIcon.png";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [consultingTitles, setConsultingTitles] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetch("/assets/consulting.json")
      .then((response) => response.json())
      .then((data) => setConsultingTitles(data.map((item) => item.title)))
      .catch((error) => console.error("Error fetching consulting titles:", error));
  }, []);

  const handleOurTeamClick = () => {
    if (location.pathname === "/") {
      const ourTeamSection = document.getElementById("our-team-section");
      if (ourTeamSection) {
        ourTeamSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { replace: false });
      setTimeout(() => {
        const ourTeamSection = document.getElementById("our-team-section");
        if (ourTeamSection) {
          ourTeamSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  const navItems = [
    { name: "AI Marketplace", externalLink: "https://fpinfinity.xyz/" },
    { name: "Consulting", href: "/consulting" },
    { name: "Research", href: "/research" },
    { name: "Our Team", action: handleOurTeamClick },
  ];

  return (
    <div
      className={`max-w-full fixed top-0 left-0 right-0 z-50 ${
        sticky ? "shadow-md bg-[#2a0530] text-white" : "bg-transparent"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between py-4 px-4 md:px-10 lg:px-20 text-white">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={bitoodaIcon} alt="Logo" className="w-10 h-10 shadow-lg rounded-lg" />
          <span className="text-2xl font-bold px-2">FP8</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex lg:space-x-6">
          {navItems.map((item) =>
            item.externalLink ? (
              <a
                key={item.name}
                href={item.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded hover:bg-gray-700 transition duration-200 text-white no-underline"
              >
                {item.name}
              </a>
            ) : item.name === "Our Team" ? (
              <button
                key={item.name}
                onClick={item.action}
                className="p-2 rounded hover:bg-gray-700 transition duration-200"
              >
                {item.name}
              </button>
            ) : item.name === "Consulting" ? (
              <div key={item.name} className=" flex flex-col items-center">
                <div className="flex items-center relative">
                  <button
                    onClick={() => navigate("/consulting")}
                    className="p-2 rounded hover:bg-gray-700 transition duration-200 flex items-center"
                  >
                    {item.name}
                  </button>
                  <span
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="hover:cursor-pointer"
                  >
                    {dropdownOpen ? "▲" : "▼"}
                  </span>
                </div>
                {dropdownOpen && (
                  <div className="absolute top-10 bg-[#2a0530] text-white mt-4 w-64 shadow-lg rounded-lg">
                    {consultingTitles.map((title, index) => (
                      <a
                        key={index}
                        href={`/consulting#section-${index}`}
                        className="block px-4 py-2 hover:bg-gray-700 text-white no-underline"
                      >
                        {title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="p-2 rounded hover:bg-gray-700 transition duration-200 text-white no-underline"
              >
                {item.name}
              </a>
            )
          )}

          {/* Login and Sign Up Buttons */}
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-4 6h-8"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {menuOpen && (
        <div className="flex flex-col space-y-2 mt-2 px-4">
          {navItems.map((item) =>
            item.externalLink ? (
              <a
                key={item.name}
                href={item.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-gray-700 hover:bg-gray-700 transition duration-200 text-white no-underline"
              >
                {item.name}
              </a>
            ) : item.name === "Our Team" ? (
              <button
                key={item.name}
                onClick={item.action}
                className="p-2 rounded bg-gray-700 hover:bg-gray-700 transition duration-200 text-white no-underline"
              >
                {item.name}
              </button>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="p-2 rounded bg-gray-700 hover:bg-gray-700 transition duration-200 text-white no-underline"
              >
                {item.name}
              </a>
            )
          )}
          {/* Login and Sign Up for Mobile */}
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
