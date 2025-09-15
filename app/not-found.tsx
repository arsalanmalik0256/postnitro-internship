"use client";

import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 px-4">
      <div className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-10 text-center max-w-lg w-full border border-gray-200">
        {/* 404 Title */}
        <h1 className="text-8xl font-extrabold bg-gradient-to-r from-teal-600 to-emerald-400 bg-clip-text text-transparent drop-shadow-md">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-600">
          Oops! The page you’re looking for doesn’t exist or was moved.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-teal-600 text-white font-medium shadow hover:bg-teal-700 transition"
          >
            🏠 Go Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg border border-gray-400 text-gray-700 font-medium hover:bg-gray-100 transition"
          >
            📩 Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}


