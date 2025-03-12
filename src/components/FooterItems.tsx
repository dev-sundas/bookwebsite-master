import React from "react";
import { FooterItemType } from "@/types";
import Link from "next/link";

type Props = {
  heading?: string;
  data: FooterItemType[];
};

export default function FooterItems({ heading = "", data }: Props) {
  return (
    <div>
      <div className="font-bold text-black">
        <h1>{heading}</h1>
      </div>
      {data.map((categories) => (
        <div key={categories.id}>
          <div>
            <Link href={`/categories/${categories.id}`}>
              <p className=" md:grid md:grid-cols-2 leading-10">
                {categories.title}
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
