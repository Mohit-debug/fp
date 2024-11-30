import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Modal from "../modal";
import { ContactConsulting } from "./ContactConsulting";

function ConsultingItem({ consulting, onClick, sectionId }) {
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
      id={`section-${sectionId}`}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-8 last:mb-0 w-full flex justify-center"
      onClick={() => onClick(consulting)}
    >
      <section className="card-gradient w-full max-w-[62rem] border border-purple-500/20 rounded-lg overflow-hidden p-8 hover:bg-purple-900/30 transition text-white cursor-pointer">
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold mb-4 text-center">{consulting.title}</h3>
          <p className="leading-relaxed text-gray-200 mb-6 font-semibold text-xl">
            Description:
          </p>
          <p className="leading-relaxed text-gray-200 mb-6 text-center">
            {consulting.description}
          </p>
          <p className="leading-relaxed text-gray-200 mb-6 font-semibold text-xl">
            Components:
          </p>
          <ul className="flex flex-wrap justify-center gap-2 mb-4">
            {consulting.tags.map((tag, index) => (
              <li
                className="bg-purple-900/70 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
}

export default function Consulting() {
  const [consultings, setConsultings] = useState([]);
  const [selectedConsulting, setSelectedConsulting] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('/assets/consulting.json')
      .then(response => response.json())
      .then(data => setConsultings(data))
      .catch(error => console.error('Error loading consultings:', error));
  }, []);

  const openModal = (consulting) => {
    setSelectedConsulting(consulting);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedConsulting(null);
  };

  return (
    <div className="page-gradient flex flex-col items-center py-20 min-h-screen">
      <h1 className="text-5xl sm:text-7xl font-bold text-white mb-10">
        Consulting
      </h1>
      {consultings.map((consulting, index) => (
        <ConsultingItem
          key={index}
          sectionId={index}
          consulting={consulting}
          onClick={openModal}
        />
      ))}
      {isModalOpen && selectedConsulting && (
        <Modal.ModalContainer onClose={closeModal}>
          <div className="py-5">
            <h1 className="text-3xl font-bold text-white">{selectedConsulting.title}</h1>
          </div>
          <div className="py-5">
            <h3 className="text-2xl font-semibold mb-2 text-white">Description:</h3>
            <p className="text-lg text-gray-200">{selectedConsulting.description}</p>
          </div>
          <div className="py-5">
            <h3 className="text-2xl font-semibold mb-2 text-white">Components:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-200">
              {selectedConsulting.tags.map((tag, index) => (
                <li key={index}>
                  <strong>{tag}:</strong> {selectedConsulting.tagscontent[index]}
                </li>
              ))}
            </ul>
          </div>
          <div className="py-10">
            <h3 className="text-2xl font-semibold mb-2 text-white">Key Benefits:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-200">
              {selectedConsulting.keyBenfits?.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          <ContactConsulting />
        </Modal.ModalContainer>
      )}
    </div>
  );
}