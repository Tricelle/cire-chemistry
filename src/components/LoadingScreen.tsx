"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1800);

    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`loading-screen ${isFading ? "loading-screen--fade" : ""}`}
      aria-hidden="true"
    >
      <div className="loading-content">
        <svg
          width="180"
          height="240"
          viewBox="0 0 120 160"
          xmlns="http://www.w3.org/2000/svg"
          className="loading-flask"
          overflow="visible"
        >
          <defs>
            <clipPath id="flaskClip">
              <path d="M48 58 L16 130 Q14 136 20 140 L100 140 Q106 136 104 130 L72 58 Z" />
            </clipPath>
          </defs>

          {/* Flask neck rim */}
          <rect x="44" y="4" width="32" height="6" rx="3" stroke="#3E2723" strokeWidth="2" fill="none" />
          {/* Flask neck */}
          <rect x="48" y="8" width="24" height="50" rx="2" stroke="#3E2723" strokeWidth="2.5" fill="none" />
          {/* Flask body */}
          <path
            d="M48 58 L16 130 Q14 136 20 140 L100 140 Q106 136 104 130 L72 58"
            stroke="#3E2723"
            strokeWidth="2.5"
            fill="none"
            strokeLinejoin="round"
          />

          {/* Liquid & inner bubbles clipped to flask */}
          <g clipPath="url(#flaskClip)">
            <rect x="10" y="92" width="100" height="60" fill="#C4929B" opacity="0.3" />
            <path
              d="M10 90 Q30 84, 60 90 Q90 96, 110 90 L110 150 L10 150 Z"
              fill="#C4929B"
              opacity="0.25"
              className="loading-wave loading-wave--1"
            />
            <path
              d="M10 92 Q35 98, 60 92 Q85 86, 110 92 L110 150 L10 150 Z"
              fill="#C4929B"
              opacity="0.2"
              className="loading-wave loading-wave--2"
            />

            {/* Bubbles — all start near bottom center, rise straight up */}
            <circle cx="54" cy="136" r="2.5" fill="#C4929B" opacity="0.5" className="loading-bubble loading-bubble--1" />
            <circle cx="60" cy="134" r="3" fill="#C4929B" opacity="0.45" className="loading-bubble loading-bubble--2" />
            <circle cx="66" cy="137" r="2" fill="#C4929B" opacity="0.5" className="loading-bubble loading-bubble--3" />
            <circle cx="57" cy="132" r="3.5" fill="#C4929B" opacity="0.4" className="loading-bubble loading-bubble--4" />
            <circle cx="63" cy="135" r="2" fill="#C4929B" opacity="0.45" className="loading-bubble loading-bubble--5" />
            <circle cx="50" cy="133" r="2.5" fill="#C4929B" opacity="0.4" className="loading-bubble loading-bubble--6" />
            <circle cx="68" cy="136" r="1.5" fill="#C4929B" opacity="0.5" className="loading-bubble loading-bubble--7" />
            <circle cx="55" cy="138" r="2" fill="#C4929B" opacity="0.45" className="loading-bubble loading-bubble--8" />
            <circle cx="62" cy="133" r="3" fill="#C4929B" opacity="0.4" className="loading-bubble loading-bubble--9" />
            <circle cx="58" cy="137" r="1.5" fill="#C4929B" opacity="0.5" className="loading-bubble loading-bubble--10" />
            <circle cx="52" cy="135" r="2" fill="#C4929B" opacity="0.45" className="loading-bubble loading-bubble--11" />
            <circle cx="65" cy="134" r="2.5" fill="#C4929B" opacity="0.4" className="loading-bubble loading-bubble--12" />
          </g>

          {/* Big floating bubbles — escape from the neck opening */}
          <circle cx="57" cy="2" r="5" fill="#C4929B" opacity="0.3" className="loading-float loading-float--1" />
          <circle cx="63" cy="3" r="6.5" fill="#C4929B" opacity="0.25" className="loading-float loading-float--2" />
          <circle cx="55" cy="1" r="4" fill="#C4929B" opacity="0.28" className="loading-float loading-float--3" />
          <circle cx="60" cy="4" r="5.5" fill="#C4929B" opacity="0.22" className="loading-float loading-float--4" />

          {/* Measurement lines */}
          <line x1="30" y1="115" x2="38" y2="115" stroke="#3E2723" strokeWidth="1" opacity="0.2" />
          <line x1="24" y1="125" x2="34" y2="125" stroke="#3E2723" strokeWidth="1" opacity="0.2" />
          <line x1="20" y1="135" x2="30" y2="135" stroke="#3E2723" strokeWidth="1" opacity="0.2" />
        </svg>

        <p className="loading-brand">Cire Chemistry</p>
      </div>
    </div>
  );
}
