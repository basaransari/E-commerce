// src/components/Logo.jsx

import React from "react";
import { ShoppingBag } from "lucide-react";

const Logo = ({
  size = "md",
  showTagline = true,
  href = "/",
  className = "",
}) => {
  const sizeConfig = {
    sm: {
      container: "gap-2",
      iconWrapper: "h-10 w-10 rounded-xl",
      icon: "h-5 w-5",
      title: "text-xl",
      tagline: "text-xs",
    },
    md: {
      container: "gap-3",
      iconWrapper: "h-12 w-12 rounded-2xl",
      icon: "h-6 w-6",
      title: "text-2xl",
      tagline: "text-sm",
    },
    lg: {
      container: "gap-4",
      iconWrapper: "h-14 w-14 rounded-2xl",
      icon: "h-7 w-7",
      title: "text-3xl",
      tagline: "text-base",
    },
  };

  const currentSize = sizeConfig[size] || sizeConfig.md;

  return (
    <a
      href={href}
      aria-label="Shoply Home"
      className={`inline-flex items-center ${currentSize.container} group transition-all duration-300 ${className}`}
    >
      {/* Brand Icon */}
      <div
        className={`
          ${currentSize.iconWrapper}
          flex items-center justify-center
          bg-gradient-to-br
          from-indigo-600
          via-violet-600
          to-purple-700
          text-white
          shadow-lg
          group-hover:scale-105
          transition-transform
          duration-300
        `}
      >
        <ShoppingBag className={currentSize.icon} strokeWidth={2.5} />
      </div>

      {/* Branding */}
      <div className="flex flex-col">
        <span
          className={`
            ${currentSize.title}
            font-black
            tracking-tight
            leading-none
            text-slate-900
            dark:text-white
          `}
        >
          Shoply
        </span>

        
      </div>
    </a>
  );
};

export default Logo;