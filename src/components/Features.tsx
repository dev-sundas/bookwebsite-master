"use client";
import React from "react";
import { bookType } from "@/types";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import FeaturesBook from "./FeaturesBook";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

const play = Playfair_Display({
  weight: ["600", "800"],
  subsets: ["latin"],
});

type Props = { books: bookType[]; heading: string; link: string };

export default function Features({ books, heading, link }: Props) {
  return (
    <div className="md:min-w-[768px] lg: max-w-[1140px] m-auto">
      <div
        className={`flex py-14 items-center justify-between ${play.className}`}
      >
        <h1 className="text-[32px] font-bold">{heading}</h1>
        <Link className="border-b-[3px] text-[20px]" href={""}>
          {link}
        </Link>
      </div>
      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 3000 })]}
        className="bg-[red] md:w-[100%] md:h-[80vh]"
      >
        <CarouselContent>
          {books.map((book) => (
            <CarouselItem key={book.id}>
              <FeaturesBook book={book} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
