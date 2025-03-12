"use client";
import React from "react";
import Image from "next/image";
import logo from "@/images/logo.png.webp";
import { Input } from "./ui/input";
import HeaderItems from "./HeaderItems";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Navbar from "./Navbar";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header>
      <div className="md:min-w-[768px] lg: max-w-[1140px] m-auto">
        <div className="ml-2 justify-between gap-7 py-[20px] flex flex-col md:flex-row">
          <div className="  gap-5  flex flex-col md:flex-row md:w-[55%] items-center ">
            <Link href={"/"}>
              <Image className="ml-2" src={logo} alt={""} />
            </Link>

            <div className="relative w-full ">
              <Input
                placeholder="Search by author or Publisher"
                className="rounded-full p-[25px] text-[grey] "
              />
              <Search className=" absolute top-3 right-5 text-[#FF1616] " />
            </div>
          </div>
          <div className="flex ml-2 gap-5 items-center md:w-[35%] text-[grey]">
            <HeaderItems link={"/faqs"} text={"FAQS"} />
            <HeaderItems link={"/track order"} text={"Track Order"} />
            <div className="flex relative">
              <Link href={"/cart"}>
                <ShoppingCart />
              </Link>
              <Badge className="rounded-full absolute w-5 h-5 pl-1 top-[-6px] right-[-6px]  bg-[#FF1616] shadow-2xl ">
                0
              </Badge>
            </div>

            <Link href={"/loginuser"}>
              <Button className="rounded-full bg-[#FF1616] text-white hover:bg-[#FF1616]/80 md:w[30%] h-10 ">
                Sign in
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
}
