import { produce } from "immer";

import { createContext, useContext, useState } from "react";
import Toast from "../components/toast/Toast";

// context 초기값 설정
const initialValue = {
  add: () => {},
  delete: () => {},
};
// context를 만들고 provider를 컴포넌트로 분리함으로써 리랜더링때에 createContext의 재실행을 막는다.
const ModalContext = createContext(initialValue);
export function ModalProvider({ children }) {
  // 무엇을 상태로 관리해야 하는가?
  const [toastList, setToastList] = useState([]);

  const value = {
    add: (element) => {
      setToastList((prevList) => {
        return produce(prevList, (draft) => {
          draft.push(element);
        });
      });
    },
    delete: (id) => {
      setToastList((prevList) => prevList.filter((toast) => toast.id !== id));
    },
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {toastList.length !== 0 && (
        <ul>
          {toastList.map((toast) => (
            <Toast key={toast.id}>{toast}</Toast>
          ))}
        </ul>
      )}
    </ModalContext.Provider>
  );
}

// 위에서 생성한 context를 이용하여 토스트 훅을 생성
export const useModal = () => useContext(ModalContext);
