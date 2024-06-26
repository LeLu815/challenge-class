import { PropsWithChildren } from "react";

interface PageProps {
  title: string;
  isTitleHidden?: boolean;
}

// 검색 엔진 차원에서는 타이틀이 들어가 있다고 보장할 수 있다.
function Page({
  children,
  title,
  isTitleHidden,
}: PropsWithChildren<PageProps>) {
  return (
    <main className="container max-w-[1024px] mx-auto px-5 py-20">
      <h1
        className={
          "text-3xl font-bold mb-12" + (isTitleHidden ? " hidden" : "")
        }
      >
        {title}
      </h1>
      {children}
    </main>
  );
}

export default Page;
