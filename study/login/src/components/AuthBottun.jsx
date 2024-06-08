import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/reducers/auth.reducer";

function AuthBottun() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleClickButton = () => {
    // isLoggedIn ? dispatch(logout()) : dispatch(login());
    const action = isLoggedIn ? logout() : login();
    dispatch(action);
  };
  return (
    <button onClick={handleClickButton}>
      {isLoggedIn ? "로그아웃하기" : "로그인하기"}
    </button>
  );
}

export default AuthBottun;
