import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
	const form = useRef();

	const sendEmail = (e) => {
	  e.preventDefault();
  
	  emailjs
		.sendForm('service_f60f0no', 'template_sgs5eok', form.current, 'fRf_9tEs1A934fEMU')
		.then(
		  (response) => {
			console.log('Email sent successfully:' );
			form.current.reset();
		  },
		  (error) => {
			console.error('Email failed to send:', error);
		  }
		);
	};
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-tr from-[#47284c] via-[#240829] to-[#320d38]">
          {/* Outer Container */}
          <div className="relative w-[90%] sm:max-w-5xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-xl"></div>
            <div className="relative px-6 py-8 bg-white shadow-lg rounded-xl sm:p-12">
              <div className="max-w-md mx-auto sm:max-w-full">
                <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">Contact Us</h1>
                <form ref={form} onSubmit={sendEmail} className="divide-y divide-gray-200 space-y-6 mt-6">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="user_name"
                      name="user_name"
                      type="text"
                      className="peer h-12 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500"
                      placeholder="User Name"
                    />
                    <label
                      htmlFor="user_name"
                      className="absolute left-0 -top-3.5 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                    >
                      User Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="user_email"
                      name="user_email"
                      type="email"
                      className="peer h-12 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500"
                      placeholder="Email Address"
                    />
                    <label
                      htmlFor="user_email"
                      className="absolute left-0 -top-3.5 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      className="peer h-24 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500"
                      placeholder="Message"
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-0 -top-3.5 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                    >
                      Message
                    </label>
                  </div>
                  <div className="relative">
                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
}