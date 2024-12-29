// components/Landing.js
"use client";

import Hero from "./Hero";

export default function Landing({
  handleTopicsClick,
  handleCountriesClick,
  handleAlternateConstitutionsClick,
}) {
  return (
    <div className="relative h-screen p-6">
      <Hero videoSrc={"./screensaver.mp4"} />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="flex space-x-6">
          <div
            className="bg-blue-500 text-white p-6 rounded cursor-pointer space-y-4"
            onClick={handleCountriesClick}
          >
            {/* Title */}
            <h3 className="text-xl font-semibold">
              <img
                src={"./app icons-03.svg"}
                alt={"members-icon"}
                className="w-40 h-40 object-cover rounded-md"
              />
              Influences to the Constitution
            </h3>
          </div>

          <div
            className="bg-green-500 text-white p-6 rounded cursor-pointer"
            onClick={handleTopicsClick}
          >
            <h3 className="text-xl font-semibold">
              <img
                src={"./app icons-02.svg"}
                alt={"members-icon"}
                className="w-40 h-40 object-cover rounded-md"
              />
              Origins of the Constitution
            </h3>
          </div>
          <div
            className="bg-yellow-500 text-white p-6 rounded cursor-pointer"
            onClick={handleAlternateConstitutionsClick}
          >
            <h3 className="text-xl font-semibold">
              <img
                src={"./app icons-01.svg"}
                alt={"members-icon"}
                className="w-40 h-40 object-cover rounded-md"
              />
              Alternate Versions of Constitution
            </h3>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-5" />
    </div>
  );
}
