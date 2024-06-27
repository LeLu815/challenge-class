"use client";

import { PropsWithChildren } from "react";

function Button({ children }: PropsWithChildren) {
  const handleClick = () => {
    alert("버튼 클릭!");
  };
  return <button onClick={handleClick}>{children}</button>;
}

export default Button;
