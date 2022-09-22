import { FC, useEffect } from "react";
import {
  ToastMessage as ToastMessageType,
  ToastMessageVariant,
} from "../types";
import { Close, Error, Info, Success } from "./icons";

const DEFAULT_TOAST_INTERVAL = 5_000;

type VariantKeys = {
  borderColorClass: string;
  textColorClass: string;
  Icon: FC<{
    className?: string | undefined;
  }>;
  name: string;
};

const VARIANTS: {
  [key in ToastMessageVariant]: VariantKeys;
} = {
  INFO: {
    borderColorClass: "border-blue",
    textColorClass: "text-blue ",
    Icon: Info,
    name: "Info",
  },

  ERROR: {
    borderColorClass: "border-red-400 ",
    textColorClass: "text-red-400 ",
    Icon: Error,
    name: "Error",
  },
  SUCCESS: {
    borderColorClass: "border-green-500",
    textColorClass: "text-green-500 ",
    Icon: Success,
    name: "Success",
  },
};

export const ToastMessage: FC<ToastMessageType> = ({
  id,
  message,
  onRemove,
  type,
}) => {
  const {
    Icon,
    borderColorClass: base,
    textColorClass: iconStyle,
    name,
  } = VARIANTS[type];

  useEffect(() => {
    if (onRemove) {
      const timeout = setTimeout(() => {
        onRemove(id);
      }, DEFAULT_TOAST_INTERVAL);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [onRemove, id]);

  return (
    <div
      className={`flex justify-center items-center p-2 px-4 rounded-md w-full shadow-md bg-white border-2 duration-100 transform transition-all max-h-40 ${base} ${iconStyle}`}
    >
      <Icon className={`h-6 w-6 `} />
      <div className="flex-1 px-2">
        <div className={`px-1`}>
          <p className="whitespace-pre-line text-sm md:text-base">{message}</p>
        </div>
      </div>
      <button
        onClick={() => onRemove(id)}
        className="close-btn hover:bg-gray-300 p-1 rounded-full transition-all duration-150"
      >
        <Close className="h-4 w-4 hover:cursor-pointer" />
      </button>
    </div>
  );
};
