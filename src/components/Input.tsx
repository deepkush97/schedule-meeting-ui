import React from "react";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  controlId: string;
  label: string;
  error?: string;
  containerClass?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      controlId,
      required,
      label,
      className = "",
      containerClass = "",
      ...props
    },
    ref
  ) => {
    return (
      <div className={`flex flex-col  ${containerClass}`}>
        <label htmlFor={controlId} className="text-sm mb-1 font-bold">
          {label} {required && <sup>*</sup>}
        </label>
        <input
          {...props}
          ref={ref}
          name={controlId}
          id={controlId}
          className={`outline-none border border-gray-200 p-2 rounded text-sm w-full ${className}`}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
