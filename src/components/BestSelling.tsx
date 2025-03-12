"use client";
import React from "react";
import { bookType } from "@/types";
import { Playfair_Display } from "next/font/google";

const play = Playfair_Display({
  weight: ["600", "800"],
  subsets: ["latin"],
});
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Book from "./Book";
import Autoplay from "embla-carousel-autoplay";

type Props = { books: bookType[]; heading: string };

export default function BestSelling({ books, heading = "" }: Props) {
  return (
    <div className="md:min-w-[768px] lg: max-w-[1140px] m-auto">
      <h1 className={`text-[32px] text-center py-10 ${play.className}`}>
        {heading}
      </h1>
      <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 3000 })]}>
        <CarouselContent className="mb-8">
          {books.map((book) => (
            <CarouselItem
              className="basis-[85%] lg:basis-[23%] md:basis-[35%]"
              key={book.id}
            >
              <Book book={book} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
