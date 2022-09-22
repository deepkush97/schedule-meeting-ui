import React, { useCallback, createContext, useState, FC } from "react";
import { ToastContainer } from "../components/ToastContainer";
import { Toast, ToastContextType, ToastMessageVariant } from "../types";

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined
);

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider: FC<ToastProviderProps> = ({ children }) => {
  const [data, setData] = useState<Array<Toast>>([]);

  const push = useCallback(
    (message: string, type: ToastMessageVariant) => {
      if (!message) return;
      const new_item: Toast = {
        id: new Date().getTime().toString(),
        message: message,
        type: type,
      };
      setData((prevState) => [...prevState, new_item]);
    },
    [setData]
  );

  const pushError = useCallback(
    (message: string) => push(message, ToastMessageVariant.ERROR),
    [push]
  );
  const pushSuccess = useCallback(
    (message: string) => push(message, ToastMessageVariant.SUCCESS),
    [push]
  );
  const pushInfo = useCallback(
    (message: string) => push(message, ToastMessageVariant.INFO),
    [push]
  );

  const toastContext = useCallback(() => {
    return {
      data,
      pushError,
      pushSuccess,
      pushInfo,
      push,
      async remove(id: string) {
        setData((prevState) => prevState.filter((e) => e.id != id));
      },
    };
  }, [data, setData, pushError, pushSuccess, pushInfo, push]);

  return (
    <ToastContext.Provider value={toastContext()}>
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  );
};
