"use client";
import React from "react";

function FloatingParticles() {
  return (
    <div className="overflow-hidden absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="builder-a31f9894c36c4a80abc44a201a9e16a7 absolute w-1 h-1 rounded-full animate-[float_6s_ease-in-out_infinite] bg-slate-400 left-[10%] top-[20%]" />
      <div className="absolute w-1.5 h-1.5 rounded-full animate-[float_8s_ease-in-out_infinite_reverse] bg-slate-400 right-[15%] top-[60%]" />
      <div className="absolute right-1/4 rounded-full animate-[float_7s_ease-in-out_infinite] bg-slate-400 h-[3px] top-[30%] w-[3px]" />
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default FloatingParticles;
