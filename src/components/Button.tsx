import React from "react";
import { twMerge } from "tailwind-merge";

interface buttonProps {
  label?: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
  disabled?: boolean;
  children?: any;
  labelClass?: string;
}

const Button: React.FC<buttonProps> = ({
  label,
  onClick,
  type,
  className,
  disabled,
  children,
  labelClass,
}) => {
  return (
    <div className="w-full">
      <button
        onClick={onClick}
        type={type ?? "button"}
        className={twMerge(
          `cursor-pointer bg-primary w-full p-2 box-border rounded hover:bg-white group hover:border-gray-400 border-2`,
          className
        )}
        disabled={disabled ?? false}
        
      >
        <span
          className={twMerge(
            `${
              children && "hidden"
            } text-white font-semibold group-hover:text-gray-800`,
            labelClass
          )}
        >
          {label}
        </span>
        {children}
      </button>
    </div>
  );
};

export default React.memo(Button);
