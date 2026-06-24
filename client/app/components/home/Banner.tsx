"use client";
import { metricsData } from "@/app/constants";
import { useState } from "react";
import MetricCard from "./MetricCard";

const Banner = () => {
  const [jobQuery, setJobQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  const trendingPositions = [
    "Product Designer",
    "AI Engineering",
    "Dev-ops Engineer",
  ];

  const handleSearch = (e: any) => {
    e.preventDefault();
    console.log("Searching for:", { jobQuery, locationQuery });
    // Add your search routing logic here
  };

  return (
    <>
      <section className="relative w-full bg-[#050505] text-white pt-24 pb-20 overflow-hidden">
        {/* Background radial glow effect */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1100px] h-[500px] z-0 opacity-40 mix-blend-screen" />

        <div className="absolute bottom-[-800px] left-1/2 -translate-x-1/2 w-full z-0 opacity-80 pointer-events-none select-none">
          {/* Backgroun image */}
          <img
            src="/images/globe.png"
            alt="Glowing Globe Background"
            className="w-full h-full object-contain"
          />
          {/* image bottom dark mask */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        </div>

        {/* Using your preset global layout container */}
        <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
          {/* 1. TOP BADGE */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111111] border border-neutral-800/80 shadow-inner mb-8 transition-all hover:border-neutral-700">
            {/* Gravity Briefcase Icon Wrapper */}
            <span className="text-amber-500 text-sm">
              {/* Replace with your exact Gravity Icon markup if component-based */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-8-2h4v2h-4V4zm8 15H4V8h16v11z" />
              </svg>
            </span>
            <span className="text-[11px] sm:text-xs font-mono tracking-[0.2em] text-neutral-400 font-semibold uppercase">
              <strong className="text-neutral-200 font-bold">50,000+</strong>{" "}
              New Jobs This Month
            </span>
          </div>

          {/* 2. MAIN HEADER TYPOGRAPHY */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl leading-[1.15] mb-6">
            Find Your Dream Job Today
          </h1>

          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed mb-12">
            HireLoop connects top talent with world-class companies. Browse
            thousands of curated opportunities and land your next role — faster.
          </p>

          {/* 3. RADIAL SEARCH CONSOLE BAR */}
          <form
            onSubmit={handleSearch}
            className="w-full max-w-3xl bg-[#111111]/90 backdrop-blur-md p-2 rounded-2xl sm:rounded-full border border-neutral-800/80 shadow-2xl flex flex-col sm:flex-row items-center gap-2 mb-8"
          >
            {/* Left Block: Job/Company Input */}
            <div className="w-full flex items-center gap-3 px-4 py-2">
              <span className="text-neutral-500 shrink-0">
                {/* Gravity Search Icon */}
                <svg
                  className="w-5 h-5 stroke-current fill-none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Job title, skill or company"
                value={jobQuery}
                onChange={(e) => setJobQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none"
              />
            </div>

            {/* Center Vertical Border Strip (Hidden on standalone stacked mobile layouts) */}
            <div className="hidden sm:block h-6 w-[1px] bg-neutral-800 shrink-0" />

            {/* Right Block: Location Input */}
            <div className="w-full flex items-center gap-3 px-4 py-2">
              <span className="text-neutral-500 shrink-0">
                {/* Gravity Location Pin Icon */}
                <svg
                  className="w-5 h-5 stroke-current fill-none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Location or Remote"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none"
              />
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="w-full sm:w-auto p-3.5 bg-gradient-to-r from-[#5151f4] to-[#7351f4] text-white rounded-xl sm:rounded-full transition-all duration-200 hover:opacity-90 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-900/30 min-w-[54px]"
              aria-label="Search jobs"
            >
              <svg
                className="w-5 h-5 stroke-current fill-none hidden sm:block"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <span className="sm:hidden font-medium text-sm px-4">
                Search Jobs
              </span>
            </button>
          </form>

          {/* 4. TRENDING POSITIONS CONTAINER */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="text-neutral-500 mr-1">Trending Position</span>
            {trendingPositions.map((position) => (
              <button
                key={position}
                type="button"
                onClick={() => setJobQuery(position)}
                className="text-xs text-neutral-300 bg-[#161616] hover:bg-neutral-800 border border-neutral-800 px-4 py-2 rounded-full transition-colors duration-200"
              >
                {position}
              </button>
            ))}
          </div>

          {/* --------MetricCard */}
          <div className="text-center max-w-3xl mt-20 mb-24 md:mb-32">
            <div className="text-white text-[40px] font-medium">
              Assisting over 15,000 job seekers find their dream positions.
            </div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {metricsData.map((item) => (
              <MetricCard
                key={item.id}
                icon={<item.icon />}
                number={item.value}
                title={item.label}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
