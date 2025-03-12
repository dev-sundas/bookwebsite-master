import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = { buttons: { link: string; text: string }[] };

export default function PublishedButtons({ buttons }: Props) {
  return (
    <div>
      {buttons.map((button, index) => (
        <Button
          key={index}
          asChild
          className="min-w-[70px] text-black hover:text-white bg-white rounded-full  hover:bg-[red] border-[1px] hover:border-none grey mx-2"
        >
          <Link href={button.link}>{button.text}</Link>
        </Button>
      ))}
    </div>
  );
}
