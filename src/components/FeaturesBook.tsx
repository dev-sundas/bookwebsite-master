import React from "react";
import { bookType } from "@/types";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Rating from "./Rating";
import { Button } from "./ui/button";
import Link from "next/link";

const play = Playfair_Display({
  weight: ["600", "800"],
  subsets: ["latin"],
});

type Props = { book: bookType };

export default function FeaturesBook({ book }: Props) {
  return (
    <div>
      <Card className="rounded-none bg-transparent border-none md:h-[75vh] md:w-[65%]">
        <CardContent>
          <div className="flex flex-col  md:flex-row  text-white gap-10   ">
            <div className="py-6">
              <Image src={book.image_url} alt={""} width={280} height={280} />
            </div>
            <div className="flex flex-col  mt-[20%]  ">
              <div className="mb-10">
                <h1 className={` text-[32px] font-bold ${play.className}`}>
                  {book.title}
                </h1>
                <p>By {book.author}</p>
              </div>
              <div className="flex">
                <div>
                  <Rating rating={book.rating} color={"#fff"} />
                </div>
                <p>{book.views}</p>
              </div>
              <div className="text-[30px] font-bold">
                <p>{`${book.price}.00`}</p>
              </div>
              <div>
                <Link href={""}>
                  <Button className=" text-[18px] font-bold mt-6 bg-[red] hover:text-[red] border-[1px] rounded-full w-[80%] h-[10vh] hover:bg-white">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
