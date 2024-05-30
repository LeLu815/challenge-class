import { useState } from "react";
import { useModal } from "../../contexts/modal.context";

export default function Toast({ title, content, time, id }) {
  const [isShow, setIsShow] = useState(true);
  const modalFunc = useModal;
  const handleClickDelete = () => {
    setIsShow(false);
  };
  return (
    <li
      onAnimationEnd={() => {
        if (isShow) {
          modalFunc.delete();
        }
      }}
    >
      <h6>{title}</h6>
      <p>{content}</p>
      <button onClick={handleClickDelete}>X</button>
    </li>
  );
}
