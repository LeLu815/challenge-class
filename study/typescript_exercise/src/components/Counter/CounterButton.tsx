// type VeryUsefulType<T> = T & { children: React.ReactNode };

import { PropsWithChildren } from "react";

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
