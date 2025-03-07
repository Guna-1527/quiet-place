"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../../../../public/logo.jpg";

const page = ({ initialTime = 3600 }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [selectedOption, setSelectedOption] = useState(1);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const question = {
    text: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <div className="w-full h-[60px] flex items-center px-14 justify-between border-b-2 border-black bg-white">
        <div className="left flex gap-4 items-center">
          <div className="w-[40px] h-[40px]">
            <Image src={Logo} alt="Logo" />
          </div>
          <h3 className="pl-4 text-lg font-semibold">Quiz</h3>
        </div>
        <div className="right flex items-center gap-4">
          <div className="time bg-[#fbf4f7] px-4 py-2 rounded-md text-lg font-semibold">
            <span className="countdown">
              <span style={{ "--value": hours } as any}></span>
            </span>
            :
            <span className="countdown">
              <span style={{ "--value": minutes } as any}></span>
            </span>
            :
            <span className="countdown">
              <span style={{ "--value": seconds } as any}></span>
            </span>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
            Exit Quiz
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        {/* Question Container */}
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-8 border border-gray-200">
          {/* Question */}
          <h2 className="text-2xl font-semibold mb-6 text-center">
            {question.text}
          </h2>

          {/* Options */}
          <div className="grid gap-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedOption(index)}
                className={`w-full px-6 py-4 rounded-lg text-lg font-medium border transition-all 
                  ${
                    selectedOption === index
                      ? "bg-[#7C4DFF] text-white border-[#7C4DFF]"
                      : "bg-gray-100 hover:bg-gray-200 border-gray-300"
                  }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-end">
            <button className="bg-[#7C4DFF] text-white px-6 py-3 text-lg rounded-lg hover:bg-[#5B2FD4] transition">
              Next Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
