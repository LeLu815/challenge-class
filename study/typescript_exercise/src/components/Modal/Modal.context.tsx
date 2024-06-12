import React, { createContext, useContext, useState } from "react";

// 만든다.
// 사용한다.
// 범위를 지정해서 값을 내려준다.

type ModalContextValue = {
  open: (element: React.ReactElement) => void;
  close: () => void;
};

const initailValue: ModalContextValue = {
  open: () => {},
  close: () => {},
};
const ModalContext = createContext<ModalContextValue>(initailValue);

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modalElement, setModalElement] = useState<React.ReactElement | null>(
    null
  );

  const open: ModalContextValue["open"] = (element) => {
    setModalElement(element);
  };
  const close: ModalContextValue["close"] = () => {
    setModalElement(null);
  };
  return (
    <ModalContext.Provider
      value={{
        open,
        close,
      }}
    >
      {children}
      {modalElement}
    </ModalContext.Provider>
  );
}
