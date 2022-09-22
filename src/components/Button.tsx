import React from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  fill?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, fill, className = "", ...props }, ref) => {
    const colorClasses = fill
      ? " bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white"
      : " text-blue-500 hover:text-blue-400 focus:text-blue-400";
    return (
      <button
        className={`text-sm px-3 py-2 font-semibold rounded-full border border-blue-500 hover:border-blue-400 focus:border-blue-400  ${colorClasses} ${className}`}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
