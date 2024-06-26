import { PropsWithChildren } from "react";

// ui를 공통적으로 잡아준다, 공통적인 비즈니스 로직을 작성할 수 있다!
function layout({ children }: PropsWithChildren) {
  return (
    <div>
      여기서부터는 posts 레이아웃
      {children}
    </div>
  );
}

export default layout;
