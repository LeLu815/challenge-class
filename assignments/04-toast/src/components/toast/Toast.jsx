import { useEffect, useRef, useState } from "react";
import { useModal } from "../../contexts/modal.context";

import checkImg from "../../assets/check.png";

// 스타일
const li_default_style =
  "flex shadow-lg bg-white p-6 border border-slate-100 border-solid rounded-lg w-[340px]";
const h6_title_style = "font-semibold";
const button_x_cancel = "cursor-pointer";
// 타임
const TRANSITION_TIME = 600;

export default function Toast({ title, content, time = 2000, id }) {
  const ref = useRef(null);
  const [isShow, setIsShow] = useState(true);
  const modalFunc = useModal();
  const handleClickDelete = () => {
    clearTimeout(ref.current);
    setIsShow(false);
  };

  const liClassName = isShow
    ? `${li_default_style} animate-appear-left`
    : `${li_default_style} transition translate-x-120 duration-300`;

  useEffect(() => {
    ref.current = setTimeout(() => {
      setIsShow(false);
    }, parseInt(time) + TRANSITION_TIME);
  }, []);
  return (
    <li
      className={liClassName}
      onTransitionEnd={() => {
        console.log("isShow :", isShow);
        if (!isShow) {
          modalFunc.delete(id);
        }
      }}
    >
      <div className="grow flex flex-col gap-1">
        <h6 className={h6_title_style}>{title}</h6>
        <p>{content}</p>
      </div>
      <button className={button_x_cancel} onClick={handleClickDelete}>
        <img className="w-5 h-5" src={checkImg} alt="check_img" />
      </button>
    </li>
  );
}
