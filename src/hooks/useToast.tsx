import { useContext } from "react";
import { ToastContext } from "../contexts/ToastProvider";
import { ToastContextType } from "../types";

export const useToast = () => useContext(ToastContext) as ToastContextType;
