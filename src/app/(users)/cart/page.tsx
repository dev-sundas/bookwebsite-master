import { columns } from "@/components/Columns";
import DataTable from "@/components/DataTable";
import { books } from "@/lib/database";
import { bookType } from "@/types";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const booklist: bookType[] = books;

type Props = {};

export default function page({}: Props) {
  return (
    <div className="md:min-w-[768px] lg: max-w-[1140px] m-auto">
      <div className="h-[320px]  w-[100%] relative">
        <Image
          src={
            "https://thcu.org/wp-content/uploads/thcu-banner-invest-in-future-1024x273.jpg.webp"
          }
          alt={""}
          fill
          objectFit="cover"
        />
      </div>
      <DataTable columns={columns} data={booklist} />
      <div className="flex flex-col md:flex-row gap-3 my-10">
        <Link href={"/"}>
          <Button className="rounded-full  bg-[red]">Continue Shoping</Button>
        </Link>
        <Link href={""}>
          <Button className="rounded-full  bg-[red]">
            Proceed to Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
}
