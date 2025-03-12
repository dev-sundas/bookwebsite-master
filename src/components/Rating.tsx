import { Star } from "lucide-react";
import React from "react";

type Props = {
  rating: number;
  color: string;
};

export default function Rating({ rating, color }: Props) {
  const STARS: number[] = [1, 2, 3, 4, 5];
  return (
    <div className="flex gap-2 items-center ">
      {STARS.map((index) =>
        rating >= index ? (
          <Star stroke="" key={index} size={18} fill={color} />
        ) : (
          <Star stroke="#c0c0c0" key={index} size={18} />
        )
      )}
    </div>
  );
}
