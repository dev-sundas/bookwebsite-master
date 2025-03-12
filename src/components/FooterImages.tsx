import React from "react";
import Image from "next/image";
import { ImageType } from "@/types";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import NewsLetter from "./NewsLetter";

type Props = { images: ImageType[] };

export default function FooterImages({ images }: Props) {
  return (
    <div className="md:min-w-[768px] lg: max-w-[1140px] m-auto">
      <div className="  items-center h-[70vh] gap-5 flex flex-col  lg:flex-row ">
        <div className=" w-[90%] h-[80vh] relative lg:h-[200px] lg:w-[48%] ">
          <Image src={images[0].image_url} alt={""} fill objectFit="cover" />
        </div>

        <div className="w-[90%] h-[80vh] relative lg:h-[200px] lg:w-[48%]">
          <div>
            <Image src={images[1].image_url} alt={""} fill objectFit="cover" />
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
}
