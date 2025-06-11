"use client";
import React from "react";

function WaveBackground() {
  return (
    <div aria-hidden="true">
      <svg
        width="1168"
        height="309"
        viewBox="0 0 1168 309"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="wave"
        style={{
          position: "absolute",
          bottom: 0,
          left: "-500px",
          width: "1668px",
          height: "309px", 
        }}
      >
        <g clipPath="url(#clip0_2003_19)">
          <path
            d="M-500 0L-83 61.8L334 154.5L751 61.8L1168 278.1L1585 92.7L2002 216.3L2419 0L2836 154.5L3253 92.7L3670 123.6L4087 30.9L4504 185.4L4921 92.7L5338 30.9L5755 0L6172 247.2L6589 216.3L7006 185.4L7423 247.2L7840 0L8257 185.4L8674 92.7L9091 154.5L9508 92.7V309H9091H8674H8257H7840H7423H7006H6589H6172H5755H5338H4921H4504H4087H3670H3253H2836H2419H2002H1585H1168H751H334H-83H-500V0Z"
            fill="url(#paint0_linear_2003_19)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_2003_19"
            x1="-500"
            y1="309"
            x2="-500"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5F5B83" />
            <stop offset="1" stopColor="#8C87C5" />
          </linearGradient>
          <clipPath id="clip0_2003_19">
            <rect
              width="1668"
              height="309"
              fill="white"
              transform="translate(-500)"
            />
          </clipPath>
        </defs>
      </svg>
      <style jsx>{`
        @keyframes wave {
          0%, 100% {
            transform: translateX(-500px);
          }
          50% {
            transform: translateX(-400px);
          }
        }
      `}</style>
    </div>
  );
}

export default WaveBackground;

