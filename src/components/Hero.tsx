"use client";
import React from "react";
import { ImageType } from "@/types";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

type Props = { images: ImageType[] };

export default function Hero({ images }: Props) {
  return (
    <div className="md:min-w-[768px] lg: max-w-[1140px] m-auto">
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {images.map((image) => {
            return (
              <CarouselItem key={image.id}>
                <div className=" flex justify-center items-center transition-all ">
                  <Image
                    className="w-[100%] h-[80vh]"
                    src={image.image_url}
                    alt={""}
                    width={600}
                    height={300}
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
