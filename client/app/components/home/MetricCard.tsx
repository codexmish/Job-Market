import { Metriccard } from "@/app/constants/interface";
import React from "react";

const MetricCard = ({ icon, number, title }: Metriccard) => {
  return (
    <>
      <div className="w-full max-w-[260px] bg-[#111111] border border-neutral-800/60 rounded-2xl p-6 flex flex-col gap-6 shadow-xl select-none">
        {/* TOP: Gravity Icon Container */}
        <div className="text-neutral-400 w-8 h-8 flex items-center justify-center">
          {icon}
        </div>

        {/* BOTTOM: Typography Content Stack */}
        <div className="flex flex-col gap-1.5">
          <span className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-sans">
            {number}
          </span>
          <span className="text-sm sm:text-base text-neutral-400 font-medium tracking-wide">
            {title}
          </span>
        </div>
      </div>
    </>
  );
};

export default MetricCard;
