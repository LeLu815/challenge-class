import { cva } from "class-variance-authority";
import { PropsWithChildren } from "react";

interface PageProps {
  title: string;
  isTitleHidden?: boolean;
  width?: "sm" | "md" | "full";
}

const pageVariant = cva("container max-w-[1024px] mx-auto px-5 py-20", {
  variants: {
    width: {
      sm: "max-w-[620px]",
      md: "max-w-[1024px]",
      full: "max-w-full",
    },
  },
  defaultVariants: {
    width: "md",
  },
});

// 검색 엔진 차원에서는 타이틀이 들어가 있다고 보장할 수 있다.
function Page({
  children,
  title,
  isTitleHidden,
  width = "md",
}: PropsWithChildren<PageProps>) {
  return (
    <main className={pageVariant({ width })}>
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
