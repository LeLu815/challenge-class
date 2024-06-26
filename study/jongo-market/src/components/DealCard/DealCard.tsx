import Image from "next/image";

import { SDeal } from "@/schemas/Deal.shema";

interface DealCardProps {
  deal: SDeal;
}

function DealCard({ deal }: DealCardProps) {
  const { imgURL, likesCount, location, price, title } = deal;
  return (
    <div>
      <div className="relative aspect-[5/3]">
        <Image className="object-cover" fill alt={title} src={imgURL} />
      </div>
      <h6>{title}</h6>
      <div>{price}</div>
      <div>{location}</div>
      <div>{likesCount}</div>
    </div>
  );
}

export default DealCard;

// fill position이 static하지 않은 것을 기준으로 잡는단
