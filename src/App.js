import React from "react";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Forex Signals Platform</h1>
      <p className="text-lg mb-6">
        Get free & premium signals for Gold, Silver, Oil, and Forex.
      </p>
      <div className="space-x-4">
        <a
          href="#free"
          className="px-6 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition"
        >
          Free Signals
        </a>
        <a
          href="#premium"
          className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-500 transition"
        >
          Premium Plans
        </a>
      </div>
    </div>
  );
}