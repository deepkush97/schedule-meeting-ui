import React, { FC, useContext } from "react";
import { ToastMessage } from "./ToastMessage";
import { ToastContext } from "../contexts/ToastProvider";
import { ToastContextType } from "../types";

export const ToastContainer: FC = () => {
  const context = useContext(ToastContext) as ToastContextType;

  const handleRemove = (id: string) => {
    context?.remove(id);
  };

  return (
    <div className="top-0 left-1/2 -translate-x-1/2 transform fixed z-50 w-full md:max-w-sm p-4 md:p-4 max-h-screen overflow-hidden pointer-events-none">
      <div className="flex-1 flex-col fade w-full mr-8 justify-end pointer-events-none">
        {context?.data.map((toast) => {
          return (
            <div
              key={toast.id}
              className="flex py-1 w-full transform transition-all duration-300 pointer-events-auto"
            >
              <ToastMessage
                id={toast.id}
                message={toast.message}
                type={toast.type}
                onRemove={handleRemove}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
