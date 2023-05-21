import React from "react";

function NewsLater() {
  return (
    <div className="py-8 px-4 sm:px-8">
      <div className="max-w-screen-md mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">
          Subscribe to Our Newsletter
        </h2>
        <div className="flex flex-col sm:flex-row justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-64 rounded-l-lg py-2 px-4 mb-2 sm:mb-0 sm:mr-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full sm:w-auto rounded-r-lg py-2 px-4 bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300 ease-in-out">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newslater;
