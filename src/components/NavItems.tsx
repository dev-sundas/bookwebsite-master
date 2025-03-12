"use client";
import Link from "next/link";
import React from "react";

type Props = {
  link: string;
  text: string;
  setOpen?: (open: boolean) => void;
  open?: boolean;
};

export default function NavItems({ link, text, setOpen, open }: Props) {
  return (
    <div>
      <nav>
        <ul>
          <li className="hover:text-[#FF1616]">
            <Link href={link}  onClick={() => setOpen && setOpen(!open)}>
              {text}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
