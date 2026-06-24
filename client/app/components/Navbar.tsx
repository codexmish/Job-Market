"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: "Browse Jobs", href: "/jobs" },
    { label: "Company", href: "/company" },
    { label: "Pricing", href: "/pricing" },
  ];

  return (
    <div className="w-full px-4 pt-4 bg-[#121212]">
      {/* Floating Pill Container */}
      <nav className="mx-auto max-w-7xl bg-[#1a1a1a] text-white rounded-2xl border border-neutral-800/60 shadow-2xl">
        <header className="flex h-20 items-center justify-between px-6">
          {/* LEFT: Mobile Toggle & Brand Logo */}
          <div className="flex items-center gap-2">
            <button
              className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            <Link
              href="/"
              className="font-bold text-2xl flex items-center tracking-tight select-none"
            >
              <span className="text-[#0088ff]">Hire</span>
              <span className="text-[#ff6600]">Loop</span>
            </Link>
          </div>

          {/* CENTER: Navigation Menu Items (Hidden on Mobile) */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-neutral-300 hover:text-white text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* RIGHT: Actions Section */}
          <div className="flex items-center gap-4">
            {/* Custom Vertical Divider Line (Hidden on Mobile) */}
            <div className="hidden md:block h-5 w-[1px] bg-neutral-700/60 mx-1" />

            {/* Auth Hyperlinks */}
            <Link
              href="/login"
              className="hidden md:inline-block text-[#5651ef] hover:text-[#6c67ff] text-sm font-medium transition-colors duration-200"
            >
              Sign In
            </Link>

            <Link
              href="/register"
              className="bg-gradient-to-r from-[#5151f4] to-[#7351f4] text-white text-sm font-medium px-5 py-2.5 rounded-xl shadow-lg hover:opacity-90 transition-opacity duration-200 text-center min-w-[110px]"
            >
              Get Started
            </Link>
          </div>
        </header>

        {/* MOBILE FLYOUT LAYOUT */}
        {isMenuOpen && (
          <div className="border-t border-neutral-800/60 md:hidden bg-[#1a1a1a] rounded-b-2xl overflow-hidden">
            <ul className="flex flex-col gap-1 p-4">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="block w-full text-neutral-300 hover:text-white text-base py-2.5 px-3 rounded-lg hover:bg-neutral-800/40 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="h-[1px] bg-neutral-800/60 my-2" />
              <li>
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="block w-full text-[#5651ef] hover:text-[#6c67ff] text-base py-2.5 px-3 font-medium"
                >
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}