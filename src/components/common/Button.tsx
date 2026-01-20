"use client";
import React from "react";

// interface OR types

interface ButtonProps {
  label?: string;
  onClick?: (event: React.MouseEvent) => void;
  className?: string;

  type?: "button" | "submit" | "reset";
  variant?:
    | "primary"
    | "secondary"
    | "link"
    | "text"
    | "danger"
    | "success"
    | "warning"
    | "info"
    | "default";
  size?: "v-small" | "small" | "medium" | "large";

  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";

  children?: React.ReactNode;
  [key: string]: any; // Allow additional props
}

//props - state

const Button = ({
  type,
  label,
  children,
  disabled = false,
  loading = false,
  className = "",
  variant = "primary",
  size = "medium",
  onClick,
  icon,
  iconPosition = "left",
  ...props
}: ButtonProps) => {
  let btnStyle = "";
  let btnSize = "";
  switch (variant) {
    case "primary":
      btnStyle =
        "text-white bg-primary hover:bg-primary-light border border-primary";
      break;
    case "secondary":
      btnStyle =
        "text-white bg-secondary hover:bg-secondary-light border border-secondary";
      break;
    case "link":
      btnStyle = "text-blue-500 hover:text-blue-600 underline !p-0";
      break;
    case "text":
      btnStyle = "text-black hover:text-gray-900 cursor-auto !p-0";
      break;
    case "danger":
      btnStyle = "bg-red-500 text-white hover:bg-red-600 border border-red-600";
      break;
    case "success":
      btnStyle =
        "bg-green-500 text-white hover:bg-green-600 border border-green-600";
      break;
    case "warning":
      btnStyle =
        "bg-yellow-500 text-white hover:bg-yellow-600 border border-yellow-500";
      break;
    default:
      btnStyle = "bg-white text-black hover:bg-gray-300 border border-black";
      break;
  }

  switch (size) {
    case "v-small":
      btnSize = "px-2 py-1 text-[10px]";
      break;
    case "small":
      btnSize = "px-4 py-2 text-sm";
      break;
    case "medium":
      btnSize = "px-6 py-3 text-base";
      break;
    case "large":
      btnSize = "px-8 py-4 text-lg";
      break;
    default:
      btnSize = "px-[40px] py-[20px] text-base";
      break;
  }

  return (
    <button
      type={type || "button"}
      className={`flex items-center justify-center gap-1 rounded-[40px] cursor-pointer ${btnStyle} ${btnSize} ${disabled ? "not-allowed" : "pointer"} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === "left" && <span>{icon}</span>}
      <div className="flex items-center gap-2">
        {(label && label) || children}{" "}
        {loading && (
          <span className="w-5 h-5 border-2 border-secondary-light border-t-transparent rounded-full animate-spin"></span>
        )}
      </div>
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
};

export default Button;
