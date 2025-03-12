"use client";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { bookType } from "@/types";
import Image from "next/image";

type Props = {};

export const columns: ColumnDef<bookType>[] = [
  {
    accessorKey: "image_url",
    header: () => <div className="font-bold">Book Cover</div>,
    cell: ({ row }) => {
      return (
        <Image
          alt="image"
          width={100}
          height={200}
          src={row.getValue("image_url")}
        />
      );
    },
  },
  {
    accessorKey: "title",
    header: () => <div className="font-bold">Book Title</div>,
  },
  {
    accessorKey: "price",
    header: () => <div className="font-bold">Price</div>,
  },
  {
    accessorKey: "total_price",
    header: () => <div className="font-bold">Total Price</div>,
    cell: ({ row }) => row.getValue("price"),
  },
];
export default function Columns({}: Props) {
  return <div>Columns</div>;
}
