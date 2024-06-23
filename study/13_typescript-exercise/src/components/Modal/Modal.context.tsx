// 1. 만든다
// 2. 사용한다 => 커스텀 훅으로 만들어준다
// 3. 범위를 지정해서 값을 내려준다

import { createContext, useContext, useState } from "react";

type ModalContextValue = {
  open: (element: React.ReactElement) => void;
  close: () => void;
};

const initialContextValue: ModalContextValue = {
  // 어떤 함수가 들어갈지 모를 때에는 그냥 비어있는 함수를 초기값으로 넣어주면 된다. 형태만 맞춰서 마음대로 넣어주면 된다!
  open: () => {},
  close: () => {},
};

const ModalContext = createContext<ModalContextValue>(initialContextValue);

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modalElement, setModalElement] = useState<React.ReactElement | null>(
    null
  );

  // 객체 타입에 대괄호 열고 키 값 넣어주면 해당 타입 리턴!
  const open: ModalContextValue["open"] = (element) => {
    setModalElement(element);
  };
  const close: ModalContextValue["close"] = () => {
    setModalElement(null);
  };
  return (
    <ModalContext.Provider value={{ open, close }}>
      {children}
      {modalElement}
    </ModalContext.Provider>
  );
}
