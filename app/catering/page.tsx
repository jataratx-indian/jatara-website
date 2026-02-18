"use client";

import Navbar from "@/components/Navbar";

export default function Catering() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      <Navbar />

      <section className="relative h-screen flex items-center justify-center text-center px-6">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/catering.jpg')" }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold">
            CATERING MENU
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Perfect for weddings, corporate events, and private celebrations.
          </p>

          <button className="mt-10 bg-[#e67e22] px-8 py-3 text-sm font-semibold tracking-wide hover:opacity-90 transition duration-300">
            View Full Catering Menu
          </button>
        </div>

      </section>

    </main>
  );
}
