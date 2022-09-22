import React, { FC } from "react";

export const Clock: FC<{ className?: string }> = ({ className }) => {
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
          d="M1545 3144 c-472 -71 -851 -328 -1077 -729 -112 -198 -166 -396 -175
 -635 -8 -232 24 -422 103 -608 191 -446 566 -754 1044 -858 133 -29 439 -27
 579 4 563 126 983 552 1107 1122 15 67 19 127 19 280 0 153 -4 213 -19 280
 -96 440 -375 805 -763 999 -209 105 -360 141 -608 146 -99 2 -193 1 -210 -1z
 m315 -961 l0 -398 267 -267 268 -268 -103 -102 -102 -103 -305 305 -305 305 0
 462 0 463 140 0 140 0 0 -397z"
        />
      </g>
    </svg>
  );
};
