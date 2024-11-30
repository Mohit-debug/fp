import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaSortAmountDownAlt, FaSortAmountUpAlt } from "react-icons/fa";

function ResearchItem({ research, onClick }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
        transition: "transform 0.5s ease, opacity 0.5s ease",
      }}
      className="card-gradient w-full max-w-[500px] border border-purple-500/20 rounded-lg overflow-hidden p-6 hover:bg-purple-900/30 transition text-white cursor-pointer relative"
    >
      <div className="flex flex-col h-full justify-between">
        <div className="relative w-full h-1/3 mb-4 rounded-lg overflow-hidden">
          <img
            src={research.imageLink}
            alt={research.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-center">{research.title}</h3>
          <p className="leading-relaxed text-gray-200 mb-4 text-center">
            {research.description}
          </p>
          <ul className="flex flex-wrap justify-center gap-2">
            {research.tags.map((tag, index) => (
              <li
                className="bg-purple-900/70 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="date-container">
          <p className="text-gray-300 text-sm mb-4">
            Post date: {new Date(research.date).toLocaleDateString()}
          </p>
          <button
            onClick={() => onClick(research)}
            className="bg-gradient-to-r from-purple-900 to-purple-700 text-white font-semibold py-3 px-4 rounded w-full hover:from-purple-800 hover:to-purple-600 transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          >
            Read More
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Research() {
  const [researchItems, setResearchItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/assets/research.json")
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
        setResearchItems(sortedData);
        setFilteredItems(sortedData);
      })
      .catch((error) => console.error("Error loading research data:", error));
  }, []);

  useEffect(() => {
    let items = researchItems.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  
    if (sortOrder) {
      items = items.slice().sort((a, b) => {
        return sortOrder === "asc"
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      });
    }
  
    setFilteredItems(items);
  }, [searchQuery, sortOrder, researchItems]);

  const openResearchDetails = (research) => {
    navigate(`/research/${research.id}`, { state: { research } });
  };

  const clearSearch = () => setSearchQuery("");

  return (
    <div className="page-gradient flex flex-col items-center py-20 text-white min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold">Research</h1>
        <p className="text-lg mt-2">Market insights from the FP8 team.</p>
      </div>

      <div className="card-gradient p-6 rounded-lg w-full max-w-xl mb-10 mx-4">
        <div className="flex justify-between items-center">
          <label className="block text-lg mb-2">Search</label>
          <button onClick={clearSearch} className="text-gray-300 hover:text-white transition-colors">
            Clear
          </button>
        </div>
        <input
          type="text"
          placeholder="Search all articles"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-purple-500/20 focus:border-purple-500 transition-all duration-300 outline-none"
        />
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="flex items-center text-gray-300 hover:text-white font-semibold transition-colors"
          >
            {sortOrder === "asc" ? <FaSortAmountDownAlt className="mr-2" /> : <FaSortAmountUpAlt className="mr-2" />}
            <span>Sort by Date</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 w-full max-w-7xl">
        {filteredItems.map((research, index) => (
          <ResearchItem key={index} research={research} onClick={openResearchDetails} />
        ))}
      </div>
    </div>
  );
}