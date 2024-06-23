import { PropsWithChildren } from "react";

// 유틸리티 타입! => 여기저기서 사용할 유용한 타입을 미리 만들어놓은 것!!
type VeryUsefulType<T> = T & { children: React.ReactNode };
/**
 * 이해하면 좋은 순서
 * 1. 원래는 커스텀 컴포넌트의 모든 props마다 children: React.ReactNode 타입을 지정해줘야 했다.
 * 2. 불편해서 위의 VeryUsefulType 과 같은 타입별칭을 만들어줬다.
 * 3. 위의 코드를 리액트에서도 만들었는데 PropsWithChildren 리액트 라이브러리 내부에 포함되어 있다! => 옵셔널이라 자식이 없어도 된다!
 */

// 타입 별칭 만들기
// 타입 별칭에는 컨벤션이 있다 : 컴포넌트 이름 + Props
interface CounterButtonProps {
  onClick: () => void;
}

function CounterButton({
  children,
  onClick: handleClick,
}: PropsWithChildren<CounterButtonProps>) {
  return <button onClick={handleClick}>{children}</button>;
}

export default CounterButton;
