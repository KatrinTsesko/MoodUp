"use client";

import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  children = "Button",
  ...props
}) => {
  return (
    <div className="relative inline-flex">
      <button
        className="gradient-button relative z-10 flex items-center justify-center rounded-full px-6 py-2 text-sm font-semibold text-white shadow-[0_0_25px_rgba(236,72,153,0.4)] transition-transform duration-200 hover:scale-[1.03] active:scale-95 md:px-8 md:py-2.5"
        {...props}
      >
        {children}
      </button>
      <style jsx>{`
        .gradient-button::before,
        .gradient-button::after {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: 9999px;
          background: linear-gradient(
            120deg,
            rgba(236, 72, 153, 1),
            rgba(129, 140, 248, 1),
            rgba(56, 189, 248, 1),
            rgba(236, 72, 153, 1)
          );
          background-size: 300% 300%;
          animation: moodup-gradient 10s ease infinite;
          opacity: 0.9;
        }
        .gradient-button::after {
          filter: blur(18px);
          opacity: 0.6;
          z-index: -2;
        }
        .gradient-button::before {
          z-index: -1;
        }
        @keyframes moodup-gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

