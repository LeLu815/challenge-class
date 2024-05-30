import { useContext } from "react";

import { AuthContext } from "./contexts/auth.context";

function Display() {
  console.log("디스플레이");
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);
  return <div>{`로그인 여부 (${isLoggedIn})`}</div>;
}

export default Display;
