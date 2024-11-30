// InsideResearch.js
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const pdfjsDistVersion = "3.11.174"; // Ensure this matches the installed version

function InsideResearch() {
  const { state } = useLocation();
  const research = state?.research;

  if (!research) {
    return (
      <>
        <Navbar /> {/* Include Navbar */}
        <p className="text-center text-white">No research data found.</p>
      </>
    );
  }

  return (
    <>
      <Navbar /> {/* Include Navbar */}
      <div className="flex flex-col items-center py-20 bg-gradient-to-br from-[#2a0530] via-black to-[#2a0530] text-white">
        
        {/* Title */}
        <h1 className="text-4xl font-bold mb-8 text-center px-6 sm:px-8">{research.title}</h1>
        
        {/* Description */}
        <div className="max-w-2xl flex flex-col mb-6 px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row items-start">
              <h2 className="text-lg font-semibold mb-2 sm:mb-0 sm:mr-2">Description:</h2>
              <p className="text-lg text-left">{research.description}</p>
          </div>
        </div>

        {/* Components and Tags Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4 px-6 sm:px-8">
          <h2 className="text-lg font-semibold">Components:</h2>
          <ul className="flex flex-wrap justify-center gap-2">
            {research.tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.9rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Date and Download Row */}
        <div className="flex justify-between items-center w-full max-w-3xl lg:max-w-6xl mb-10 px-6 sm:px-8">
          <p className="text-gray-300 text-sm">Posted on: {new Date(research.date).toLocaleDateString()}</p>
          <a
            href={research.pdfLink}
            download={`${research.title}.pdf`}
            className="bg-gradient-to-br from-purple-900 to-purple-300 hover:bg-gradient-to-bl text-white font-bold py-2 px-4 rounded focus:ring focus:ring-blue-300 focus:outline-none"
          >
            Download PDF
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="w-full max-w-3xl lg:max-w-6xl px-4">
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsDistVersion}/build/pdf.worker.min.js`}>
            <Viewer fileUrl={research.pdfLink} />
          </Worker>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default InsideResearch;
