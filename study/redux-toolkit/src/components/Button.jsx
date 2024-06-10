import { useId, useState } from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/slices/counter.slice";

function Button({ isAdd, label }) {
  const id = useId();
  const dispatch = useDispatch();
  const [inputNum, setInputNum] = useState("");
  const handleChangeNum = (e) => {
    setInputNum(e.target.value);
  };
  const handelClikcButton = () => {
    if (inputNum === "" || inputNum == 0) {
      alert("숫자를 입력해주세요");
    }
    if (isAdd) {
      dispatch(increment(inputNum));
      return setInputNum("");
    } else {
      dispatch(decrement(inputNum));
      return setInputNum("");
    }
  };
  return (
    <div>
      <label id={id} htmlFor="">
        {label}
      </label>
      <input
        id={id}
        onChange={handleChangeNum}
        type="number"
        name=""
        placeholder="숫자를 입력해주세요"
        value={inputNum}
      />
      <button onClick={handelClikcButton}>Button</button>
    </div>
  );
}

export default Button;
