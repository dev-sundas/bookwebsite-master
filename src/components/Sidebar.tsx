import { FooterItemType, bookType, writerType } from "@/types";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { authers, bookCatagories } from "@/lib/database";
import { Sidebaritems } from "@/lib/database";
import { Slider } from "./ui/slider";
import { books } from "@/lib/database";
import FilterItem from "./FilterItem";
import Book from "./Book";
import Selectitems from "./Selectitems";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const booklist: bookType[] = books;

const publisher: writerType[] = Sidebaritems;

const auther: writerType[] = authers;

const catagories: FooterItemType[] = bookCatagories;

type Props = { image: { id: number; image_url: string } };

export default function Sidebar({ image }: Props) {
  return (
    <div>
      <div className="h-[320px] w-[100%]   relative">
        <Image src={image.image_url} alt={""} fill objectFit="cover" />
      </div>
      <div className="flex flex-col  md:flex-row">
        <Card className="rounded-none  w-[90%] lg:w-[30%] h-[100%] m-6">
          <CardContent>
            <FilterItem heading={"Filter by Genres"} catagories={catagories} />

            <h1 className="font-bold text-[16px] mt-2 mb-4 ">
              Filter by Price
            </h1>
            <Slider className=" w-[80%] " />
            <Selectitems
              heading={"Filter by Rating"}
              items={[
                { value: "dark", text: "Filter by Rating" },
                { value: "5", text: "5 star Rating" },
                { value: "4", text: "4 star Rating" },
                { value: "3", text: "3 star Rating" },
                { value: "2", text: "2 star Rating" },
                { value: "1", text: "1 star Rating" },
              ]}
            />

            <FilterItem heading={"Filter by Publisher"} publisher={publisher} />
            <FilterItem heading={"Filter by Author Name"} publisher={auther} />
          </CardContent>
        </Card>
        <div className="flex flex-col">
          <div className="flex flex-col lg:items-end m-6">
            <Selectitems
              heading={"Browse by popularity"}
              items={[
                { value: "1", text: "Browse by popularty" },
                { value: "2", text: "Name" },
                { value: "3", text: "New" },
                { value: "4", text: "Old" },
                { value: "5", text: "Price" },
              ]}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-5">
            {books.map((book) => (
              <div key={book.id}>
                <Book book={book} />
              </div>
            ))}
          </div>
          <div className="flex justify-center mb-10">
            <Button className="w-[20%] h-[12vh] md:w-[20%] md:h-12 rounded-full text-[red] hover:text-white bg-white border-[1px] border-[red] hover:bg-[red] ">
              <Link href={"/"}>Browse More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
