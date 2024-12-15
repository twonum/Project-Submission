"use client";

// Home icon from lucide-react
import { Home } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function SandboxPage() {
  const router = useRouter();

  const handleBackClick = () => {
    router.push("/"); // Navigate back to the main page
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      {/* Output Box */}
      <div className="w-3/4 p-8 border-2 border-white text-white bg-transparent rounded-2xl shadow-xl flex flex-col items-center space-y-4">
        <h1 className="text-4xl font-extrabold text-center text-gradient bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-6">
          Sandbox Output
        </h1>
        <p className="text-lg text-center">
          This is where your output will appear. The content is dynamically
          generated based on your inputs and interactions.
        </p>
      </div>

      {/* Back Button with Home Icon */}
      <button
        onClick={handleBackClick}
        className="absolute top-32 left-24 flex items-center space-x-2 text-white hover:text-black transition duration-300 text-lg"
      >
        <Home size={24} className="text-white" /> {/* Home Icon */}
        <span className="relative">
          <span className="underline decoration-transparent hover:decoration-white transition-all duration-300">
            Back
          </span>
        </span>
      </button>
    </div>
  );
}
