import { bookType } from "@/types";
import React from "react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import Image from "next/image";
import Rating from "./Rating";
import { Playfair_Display } from "next/font/google";

const play = Playfair_Display({
  weight: ["600", "800"],
  subsets: ["latin"],
});

type Props = {
  book: bookType;
};

export default function Book({ book }: Props) {
  return (
    <Card className="min-w-[235px]">
      <CardContent className="p-0">
        <Link href={`/categories/${book.id}`}>
          <div className="h-[330px] relative rounded-lg">
            <Image
              className="rounded-t-md"
              src={book.image_url}
              alt={""}
              fill
            />
          </div>
          <div>
            <h1
              className={`text-[18px] ml-6 font-bold hover:text-[#FF1616] ${play.className}`}
            >
              {book.title}
            </h1>
            <p className="text-[14px] text-[grey] ml-6">{book.author}</p>
          </div>
        </Link>
        <div className=" flex gap-3 text-[14px] text-[grey] ml-6 py-2 items-end">
          <div>
            <Rating rating={book.rating} color={"#FF5700"} />
            {book.views}
          </div>
          <div>
            <p className="text-[#FF1616] text-[20px] font-bold ">
              {book.price}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
