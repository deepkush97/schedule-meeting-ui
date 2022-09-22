import React from "react";

interface TextAreaProps extends React.ComponentPropsWithoutRef<"textarea"> {
  controlId: string;
  label: string;
  error?: string;
  containerClass?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
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
        <textarea
          ref={ref}
          {...props}
          name={controlId}
          id={controlId}
          className={`outline-none border border-gray-200 p-2 rounded text-sm w-full ${className}`}
        ></textarea>
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
