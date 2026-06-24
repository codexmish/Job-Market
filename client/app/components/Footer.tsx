import Link from "next/link";

export default function Footer() {
  // Organized footer column links data structure
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Job discovery", href: "/jobs" },
        { label: "Worker AI", href: "/worker-ai" },
        { label: "Companies", href: "/companies" },
        { label: "Salary data", href: "/salary" },
      ],
    },
    {
      title: "Navigations",
      links: [
        { label: "Help center", href: "/help" },
        { label: "Career library", href: "/library" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Brand Guideline", href: "/brand" },
        { label: "Newsroom", href: "/news" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-[#050505] text-[#8a8a8a] py-16 px-6 md:px-12 lg:px-24 border-t border-neutral-900/60">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* TOP SECTION: Branding & Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6">
          {/* Brand Info (Spans 5 columns on desktop) */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <Link
              href="/"
              className="font-bold text-2xl flex items-center tracking-tight select-none"
            >
              <span className="text-[#0088ff]">Hire</span>
              <span className="text-[#ff6600]">Loop</span>
            </Link>
            <p className="text-sm text-neutral-500 max-w-xs leading-relaxed">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>
          </div>

          {/* Links Navigation Grid (Spans 7 columns on desktop) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerSections.map((section) => (
              <div key={section.title} className="flex flex-col gap-4">
                <h3 className="text-[#4d49d6] font-medium text-base tracking-wide">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM SECTION: Social Icons & Copyright Legal Info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4">
          {/* Social Icons Container using Gravity Icons styling placeholder */}
          <div className="flex items-center gap-3">
            {/* Facebook Icon Box */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-between p-2.5 rounded-lg bg-[#111] hover:bg-neutral-800 border border-neutral-900 text-neutral-400 hover:text-white transition-colors"
            >
              {/* Replace with your exact Gravity Icon element */}
              <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z" />
              </svg>
            </a>

            {/* Product/Pinterest Icon Box (The purple background one) */}
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-between p-2.5 rounded-lg bg-[#3b34db] hover:bg-[#4d45f4] text-white transition-colors shadow-md shadow-indigo-900/20"
            >
              {/* Replace with your exact Gravity Icon element */}
              <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.23 2.63 7.85 6.35 9.31-.09-.79-.17-2 .03-2.86.19-.78 1.2-5.06 1.2-5.06s-.31-.61-.31-1.5c0-1.4 1.14-2.5 2.5-2.5.71 0 1.35.26 1.83.7.48.44.77 1.05.77 1.73 0 1.25-.8 2.3-1.93 2.3-.38 0-.74-.2-.86-.43l-.53 2.02c-.19.73-.72 1.64-1.08 2.22C10.53 21.75 11.25 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
            </a>

            {/* LinkedIn Icon Box */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-between p-2.5 rounded-lg bg-[#111] hover:bg-neutral-800 border border-neutral-900 text-neutral-400 hover:text-white transition-colors"
            >
              {/* Replace with your exact Gravity Icon element */}
              <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>

          {/* Legal / Copyright Info Line */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-600 font-normal">
            <span>Copyright 2024 — Programming Hero</span>
            <Link
              href="/terms"
              className="hover:text-neutral-400 transition-colors"
            >
              Terms & Policy
            </Link>
            <span className="text-neutral-800">|</span>
            <Link
              href="/privacy"
              className="hover:text-neutral-400 transition-colors"
            >
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}