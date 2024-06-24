import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, PropsWithChildren } from "react";

const buttonVariants = cva(
  "border rounded  font-semibold hover:brightness-90 active:brightness-75 transition-all",
  {
    variants: {
      intent: {
        primary: "bg-sky-500 border-sky-500 text-white",
        secondary: "bg-slate-500 border-slate-500 text-white",
        danger: "bg-red-500 border-red-500 text-white",
      },
      size: {
        sm: "px-3 py-1 text-[13px]",
        md: "px-4 py-1.5 text-[15px]",
        lg: "px-5 py-2 text-[17px]",
      },
      variant: {
        outline: "",
        contained: "",
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        variant: "contained",
        className: "bg-sky-500 text-white",
      },
      {
        intent: "primary",
        variant: "outline",
        className: "bg-white text-sky-500",
      },

      {
        intent: "secondary",
        variant: "contained",
        className: "bg-slate-500 text-white",
      },
      {
        intent: "secondary",
        variant: "outline",
        className: "bg-white text-slate-500",
      },

      {
        intent: "danger",
        variant: "contained",
        className: "bg-red-500 text-white",
      },
      {
        intent: "danger",
        variant: "outline",
        className: "bg-white text-red-500",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "md",
      variant: "contained",
    },
  }
);

type ButtonVariant = VariantProps<typeof buttonVariants>;
// type ButtonProps = {} & ButtonVariant &
//   DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type ButtonProps = {} & ButtonVariant & ComponentProps<"button">;

function Button({
  children,
  intent,
  size,
  variant,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button className={buttonVariants({ intent, size, variant })} {...props}>
      {children}
    </button>
  );
}

export default Button;
