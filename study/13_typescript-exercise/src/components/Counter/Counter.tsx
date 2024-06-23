import { useState } from "react";
import CounterButton from "./CounterButton";
import CounterDisplay from "./CounterDisplay";

function Counter() {
  const [count, setCount] = useState<number>(5);
  // 단순 하나의 타입이라도 명시적으로 넣어줘도 좋다, 미래를 대비하는 입장에서 추가로 넣어줘야 할 경우가 생길 수 있기 때문에 넣어주는 것도 추천한다.
  const [unit, setUnit] = useState<number>(1);

  const decrement = () => {
    setCount(count - 1);
  };
  const increment = () => {
    setCount(count + 1);
  };
  // 1. 함수 자체의 타입을 지정해준다 => 매개변수가 타입 추론으로 나올 수 있음!
  // 2. 매개변수 자체에 타입을 작성 => 함수의 타입이 추론되게 한다!
  const handleChangeUnit: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    // 1. 함수의 인자(이벤트의 타입 자체) 설정 : onChnage 함수의 인자 e를 입력하고 타입을 확인해본다!
    // 만약에 함수의 인자가 너무 많을 경우 => 다 타입 지정? 별로 따라서 아래의 방법으로 알아서 추론할 수 있게 하는 것이 좋은 방법이다.
    // 2. 함수의 타입 자체를 설정
    setUnit(Number(e.target.value));
  };

  return (
    <div>
      <CounterDisplay value={count} />

      <input
        onChange={handleChangeUnit}
        value={unit}
        type="number"
        placeholder="이곳에 숫자를 넣어주세요"
      />

      <div className="flex">
        <CounterButton onClick={decrement}>[-]</CounterButton>
        <CounterButton onClick={increment}>[+]</CounterButton>
      </div>
    </div>
  );
}

export default Counter;
