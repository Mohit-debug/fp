import React, { useEffect, useRef, useState } from "react";
import { ContactUs } from './ContactUs'; // Ensure this path is correct
import '../../App.css';
import icon1 from '../assets/icon1.png';
import icon5 from '../assets/icon5.png';
import icon7 from '../assets/icon7.png';
import icon8 from '../assets/icon8.png';

function Transformer() {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible1(true);
                    observer.disconnect();
                }
            },
            { threshold: 0 }
        );

        if (ref1.current) {
            observer.observe(ref1.current);
        }

        return () => {
            if (ref1.current) {
                observer.unobserve(ref1.current);
            }
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible2(true);
                    observer.disconnect();
                }
            },
            { threshold: 0 }
        );

        if (ref2.current) {
            observer.observe(ref2.current);
        }

        return () => {
            if (ref2.current) {
                observer.unobserve(ref2.current);
            }
        };
    }, []);

    const isMobileView = window.innerWidth <= 768;

    return (
        <div className="bg-gradient-to-br from-black via-black to-[#2a0530] py-20 text-white min-h-screen flex flex-col items-center justify-center">
            {/* Top Heading */}
            <div className="text-center mb-10 px-10">
                <h1 className="text-5xl lg:text-6xl font-bold">
                    The Transformer to the Transformer
                </h1>
                <p className="text-lg lg:text-xl mb-6 px-10 py-10">
                    At FP8, <span className=" text-purple-500">end-to-end</span> expertise spanning 
                    <span className=" text-purple-500"> AI, power, HPC hardware, and data center solutions.</span>
                    From the Transformer architecture that powers state-of-the-art AI models to the step-down transformers that energize data center infrastructure, 
                    <span className=" text-purple-500">we master every facet of the AI and HPC landscape.</span> 
                    Our team combines <span className=" text-purple-500">technical brilliance, operational expertise, and financial insight</span> to solve the most complex challenges in 
                    <span className=" text-purple-500"> AI, high-performance computing (HPC), and infrastructure development.</span>
                </p>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-7xl bg-white/10 py-10 rounded-lg shadow-xl">
                <h3 className="text-3xl lg:text-4xl font-bold text-center">
                    End-to-End Expertise in AI and Infrastructure
                </h3>
                <p className="text-lg lg:text-xl mb-6 px-10 py-10 text-center">FP8 empowers your innovation, keeping you ahead in today’s fast-paced, data-driven world.</p>
                <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
                    {/* Left Section */}
                    <div className="flex-1">
                        <div className="flex-1 flex justify-center items-center lg:pr-10 pr-0 pt-5 pb-5">
                            <div
                                ref={ref1}
                                className={`w-full max-w-xl h-[400px] lg:h-[500px] bg-[#1e1e2a] rounded-lg p-6 shadow-lg flex items-center justify-center transition-transform duration-700 ${
                                    isVisible1 && !isMobileView ? 'translate-x-0' : isMobileView ? '' : 'translate-x-full'
                                }`}
                            >
                                {/* Grid Content */}
                                <div className="bg-[#292940] p-4 rounded-lg flex flex-col items-start">
                                    <img src={icon1} alt="AI & Machine Learning Services" className="w-12 h-12 mb-4" />
                                    <h3 className="text-lg font-semibold mb-4">
                                        AI & Machine Learning Services
                                    </h3>
                                    {/* List Items */}
                                    <ul className="list-disc pl-6 text-sm text-gray-300 space-y-2">
                                        <li>
                                            <strong>Strategic Consulting:</strong> Tailored guidance on AI agent
                                            design and implementation.
                                        </li>
                                        <li>
                                            <strong>Model Optimization:</strong> Fine-tuning AI models to excel in
                                            specialized use cases.
                                        </li>
                                        <li>
                                            <strong>Synthetic Data Solutions:</strong> Creation of high-quality
                                            synthetic datasets for robust training and validation.
                                        </li>
                                        <li>
                                            <strong>Resilient Systems:</strong> Expertise in adversarial AI to
                                            safeguard against vulnerabilities.
                                        </li>
                                    </ul>
                                    <button
                                        className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-4 py-2 rounded-lg mt-4"
                                        onClick={() => setShowModal(true)} // Show modal on button click
                                    >
                                        Connect →
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Modal for Contact Form */}
                        {showModal && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                                <div className={`rounded-lg shadow-lg relative ${isMobileView ? 'w-[90%] h-[80%]' : 'w-[60%] h-[90%]'}`}>
                                    <button
                                        className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded z-10"
                                        onClick={() => setShowModal(false)} // Close modal
                                    >
                                        Close
                                    </button>
                                    <ContactUs />
                                </div>
                            </div>
                        )}

                        <div className="w-full my-8 hidden lg:block">
                            <hr className="border-t border-purple-500" />
                        </div>

                        <div className="flex-1 flex justify-center items-center lg:pr-10 pr-0 pt-5 pb-5">
                            <div ref={ref2} className={`w-full max-w-xl h-[400px] lg:h-[500px] bg-[#1e1e2a] rounded-lg p-6 shadow-lg flex items-center justify-center transition-transform duration-700 ${isVisible2 && !isMobileView ? 'translate-x-0' : isMobileView ? '' : 'translate-x-full'}`}>
                                {/* Grid Content */}
                                <div className="bg-[#292940] p-4 rounded-lg flex flex-col items-start">
                                    <img
                                        src={icon5}
                                        alt="Transparent Market Value"
                                        className="w-12 h-12 mb-4"
                                    />
                                    <h3 className="text-lg font-semibold mb-4">
                                        Transparent Market Value
                                    </h3>
                                    {/* List Items */}
                                    <ul className="list-disc pl-6 text-sm text-gray-300 space-y-2">
                                        <li>
                                            <strong>Full-Service Brokerage:</strong> Transparent brokering for all HPC and AI hardware needs.
                                        </li>
                                        <li>
                                            <strong>GPU Rental Solutions:</strong> Market-value GPU rental brokerage to optimize cost and performance.
                                        </li>
                                        <li>
                                            <strong>Custom Procurement Plans:</strong> Tailored strategies to match your unique HPC hardware requirements.
                                        </li>
                                        <li>
                                            <strong>Data-Driven Insights:</strong> Market analysis to ensure the best hardware investments.
                                        </li>
                                    </ul>
                                    <button
                                        className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-4 py-2 rounded-lg mt-4"
                                        onClick={() => setShowModal(true)} // Show modal on button click
                                    >
                                        Connect →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle Section with Vertical Line and Circle */}
                    <div className="relative items-center justify-center my-10 lg:my-0 hidden lg:flex">
                        {/* Vertical Line */}
                        <div className="h-[500px] lg:h-[1200px] border-l border-purple-500 relative">
                            {/* Circle */}
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 w-6 h-6 rounded-full"></div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex-1">
                        <div className="flex-1 flex justify-center items-center lg:pl-10 pl-0 pt-5 pb-5">
                            <div
                                ref={ref1}
                                className={`w-full max-w-xl h-[400px] lg:h-[500px] bg-[#1e1e2a] rounded-lg p-6 shadow-lg flex items-center justify-center transition-transform duration-700 ${
                                    isVisible1 && !isMobileView ? 'translate-x-0' : isMobileView ? '' : '-translate-x-full'
                                }`}
                            >
                                {/* Grid Content */}
                                <div className="bg-[#292940] p-4 rounded-lg flex flex-col items-start">
                                    <img
                                        src={icon7}
                                        alt="Data Center and HPC Solutions"
                                        className="w-12 h-12 mb-4"
                                    />
                                    <h3 className="text-lg font-semibold mb-4">
                                        Data Center and HPC Solutions
                                    </h3>
                                    {/* List Items */}
                                    <ul className="list-disc pl-6 text-sm text-gray-300 space-y-2">
                                        <li>
                                            <strong>Site Selection and Financial Modeling:</strong> Optimize location decisions with precise cost-benefit analysis.
                                        </li>
                                        <li>
                                            <strong>HPC Hardware Advisory:</strong> Selection and procurement of cutting-edge computing equipment.
                                        </li>
                                        <li>
                                            <strong>Comprehensive Data Center Procurement:</strong> From racks to cooling systems and power management, we ensure every component is optimized.
                                        </li>
                                        <li>
                                            <strong>Staffing and Operational Support:</strong> End-to-end solutions for staffing and maintaining AI and HPC operations.
                                        </li>
                                    </ul>
                                    <button
                                        className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-4 py-2 rounded-lg mt-4"
                                        onClick={() => setShowModal(true)} // Show modal on button click
                                    >
                                        Connect →
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="w-full my-8 hidden lg:block">
                            <hr className="border-t border-purple-500" />
                        </div>

                        <div className="flex-1 flex justify-center items-center lg:pl-10 pl-0 pt-5 pb-5">
                            <div ref={ref2} className={`w-full max-w-xl h-[400px] lg:h-[500px] bg-[#1e1e2a] rounded-lg p-6 shadow-lg flex items-center justify-center transition-transform duration-700 ${isVisible2 && !isMobileView ? 'translate-x-0' : isMobileView ? '' : '-translate-x-full'}`}>
                                {/* Grid Content */}
                                <div className="bg-[#292940] p-4 rounded-lg flex flex-col items-start">
                                    <img
                                        src={icon8}
                                        alt="Your Go-To AI Marketplace"
                                        className="w-12 h-12 mb-4"
                                    />
                                    <h3 className="text-lg font-semibold mb-4">
                                        Your Go-To AI Marketplace
                                    </h3>
                                    {/* List Items */}
                                    <ul className="list-disc pl-6 text-sm text-gray-300 space-y-2">
                                        <h4 className="font-bold">
                                            FP8 offers a comprehensive ecosystem for all your HPC and AI needs:
                                        </h4>
                                        <li>
                                            <strong>Hardware Procurement:</strong> Fine-tuning AI models to excel in specialized use cases.
                                        </li>
                                        <li>
                                            <strong>Specialized Comprehensive Consulting:</strong> Creation of high-quality synthetic datasets for robust training and validation.
                                        </li>
                                        <li>
                                            <strong>Seamless Integration:</strong> Expertise in adversarial AI to safeguard against vulnerabilities.
                                        </li>
                                    </ul>
                                    <button
                                        className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-4 py-2 rounded-lg mt-4"
                                        onClick={() => setShowModal(true)} // Show modal on button click
                                    >
                                        Connect →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Transformer;