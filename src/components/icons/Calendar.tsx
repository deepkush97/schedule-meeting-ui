import React, { FC } from "react";

export const Calendar: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 344.000000 344.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,344.000000) scale(0.100000,-0.100000)"
        fill="currentColor"
        stroke="none"
      >
        <path
          d="M860 3155 l0 -145 -95 0 c-163 0 -268 -62 -314 -185 -21 -55 -21 -69
 -21 -1105 0 -1036 0 -1050 21 -1105 27 -72 92 -137 164 -164 55 -21 69 -21
 1105 -21 1032 0 1050 0 1104 20 66 25 130 85 159 148 l22 47 3 1062 c2 1055 2
 1062 -18 1117 -47 124 -151 186 -315 186 l-95 0 0 145 0 146 -142 -3 -143 -3
 -3 -142 -3 -143 -569 0 -569 0 -3 143 -3 142 -142 3 -143 3 0 -146z m1860
 -1650 l0 -785 -1000 0 -1000 0 0 785 0 785 1000 0 1000 0 0 -785z"
        />
      </g>
    </svg>
  );
};
