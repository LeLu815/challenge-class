import { VariantProps, cva } from "class-variance-authority";

// interface ChipProps {
//   // | 파이프 기호!
//   label: string;
//   intent?: "primary" | "secondary" | "danger" | "warning" | "info";
// }
const chipVariants = cva(
  [
    "text-sm",
    "border",
    "rounded-full",
    "px-2.5",
    "py-0.5",
    "hover:opacity-50",
    "transition-opacity",
  ],
  {
    variants: {
      intent: {
        primary: "bg-blue-500 border-blue-500 text-white",
        secondary: "bg-gray-500 border-gray-500 text-white",
        danger: "bg-red-500 border-red-500 text-white",
        warning: "bg-yellow-500 border-yellow-500 text-white",
        info: "bg-violet-500-500 border-violet-500 text-violet-500",
        default: "bg-white border-black text-black",
      },
    },
    // 조합
    compoundVariants: [],
    defaultVariants: {
      intent: "default",
    },
  }
);

type ChipVariantsType = VariantProps<typeof chipVariants>;
type ChipProps = {
  label: string;
} & ChipVariantsType;

function Chip({ label, intent }: ChipProps) {
  // 첫번째 인자에는 디폴트, 두번째는 조합

  // 나만의 클래스를 넣고 싶어. : passed className => className으로 넣기
  return <div className={chipVariants({ intent })}>{label}</div>;
}

export default Chip;
