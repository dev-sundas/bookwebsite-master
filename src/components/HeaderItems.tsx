import Link from "next/link";
import React from "react";

type Props = { link: string; text: string };

export default function HeaderItems({ link, text }: Props) {
  return (
    <div>
      <div>
        <Link href={link}>
          <span>{text}</span>
        </Link>
      </div>
    </div>
  );
}
