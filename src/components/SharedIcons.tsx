import Link from "next/link";
import React from "react";

type Props = { link: string; icons: React.ReactNode };

export default function sharedIcons({ link, icons }: Props) {
  return (
    <div>
      <Link href={link}>{icons}</Link>
    </div>
  );
}
