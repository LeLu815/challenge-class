import { produce } from "immer";
import { v4 as uuidv4 } from "uuid";

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
    add: ({ title, content, time }) => {
      setToastList((prevList) => {
        return produce(prevList, (draft) => {
          draft.push({
            id: uuidv4(),
            title,
            content,
            time,
          });
        });
      });
    },
    delete: (id) => {
      setToastList((prevList) => prevList.filter((toast) => toast.id !== id));
    },
  };

  return (
    <ModalContext.Provider value={value}>
      <div className={div_outer_container}>
        {children}
        {toastList.length !== 0 && (
          <ul className={ul_toast_container}>
            {toastList.map((toast) => (
              <Toast
                key={toast.id}
                title={toast.title}
                content={toast.content}
                time={toast.time}
                id={toast.id}
              />
            ))}
          </ul>
        )}
      </div>
    </ModalContext.Provider>
  );
}

// 위에서 생성한 context를 이용하여 토스트 훅을 생성
export const useModal = () => useContext(ModalContext);

const div_outer_container = "w-screen h-screen grid place-items-center";
const ul_toast_container = "fixed bottom-6 right-6 grid grid-cols-1 gap-y-3";
