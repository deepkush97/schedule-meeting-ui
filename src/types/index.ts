export type Toast = {
  id: string;
  message: string;
  type: ToastMessageVariant;
};

export type TostMessageType = "Info" | "Success" | "Error";

export type ToastContextType = {
  data: Array<Toast>;
  pushError(message: string): void;
  pushSuccess(message: string): void;
  pushInfo(message: string): void;
  push(message: string, type: ToastMessageVariant): void;
  remove(id: string): void;
};

export const enum ToastMessageVariant {
  "INFO" = "INFO",
  "ERROR" = "ERROR",
  "SUCCESS" = "SUCCESS",
}

export type ToastMessage = {
  onRemove: (id: string) => void;
} & Toast;
