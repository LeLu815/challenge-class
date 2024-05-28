import { useDispatch } from "react-redux";

import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";
import { decrement, increment } from "./redux/slices/counter.slice";

function App() {
  const dispatch = useDispatch();
  const decrementByFive = () => {
    console.log("빼기");
    const action = decrement(5);
    dispatch(action);
  };
  const incrementByFive = () => {
    console.log("더하기");
    const action = increment(5);
    dispatch(action);
  };
  return (
    <div>
      <Display />
      <Button label="빼기 5" onClick={decrementByFive} />
      <Button label="더하기 5" onClick={incrementByFive} />
    </div>
  );
}

export default App;
