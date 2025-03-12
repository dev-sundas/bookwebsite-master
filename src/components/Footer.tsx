import React from "react";
import Image from "next/image";
import logo from "@/images/logo.png.webp";
import Link from "next/link";
import { bookCatagories } from "@/lib/database";
import FooterItems from "./FooterItems";
import { title } from "process";
import NavItems from "./NavItems";
import HeaderItems from "./HeaderItems";
import SharedIcons from "./SharedIcons";
import { Facebook, Heart, Instagram, Linkedin, Youtube } from "lucide-react";

type Props = {};
const catagories = bookCatagories;

export default function Footer({}: Props) {
  return (
    <div className="bg-[#FEF4F4] ">
      <div className="font-[16px]  gap-6  text-[grey] flex flex-col lg:flex-row p-[30px]">
        <div>
          <Link href={"/"}>
            <Image src={logo} alt={""} />
          </Link>
          <p className="leading-5 mt-5">
            Get the breathing space now, <br />
            and we will extend your term at the other
            <br />
            end year for go.
          </p>
          <div className="flex mt-4 gap-4">
            <SharedIcons link={""} icons={<Facebook />} />
            <SharedIcons link={""} icons={<Instagram />} />
            <SharedIcons link={""} icons={<Linkedin />} />
            <SharedIcons link={""} icons={<Youtube />} />
          </div>
        </div>
        <div className=" gap-6  lg:flex ">
          <div className="md:flex">
            <FooterItems
              data={catagories.filter((title) => title.id <= 5)}
              heading="Book Categories"
            />
            <div className="mt-5">
              <FooterItems
                data={catagories.filter(
                  (title) => title.id > 5 && title.id <= 10
                )}
              />
            </div>
          </div>

          <div className=" leading-9">
            <h1 className="font-bold text-black">Site Map</h1>
            <NavItems link={"/"} text={"Home"} />
            <NavItems link={"/about"} text={"About"} />
            <HeaderItems link={"/faqs"} text={"FAQS"} />
            <NavItems link={"/blog"} text={"Blog"} />
            <NavItems link={"/contact"} text={"Contact"} />
          </div>
        </div>
      </div>
      <div className=" text-[grey] mt-20 items-center justify-center mb-3 flex flex-col lg:flex-row gap-1 p-4 ">
        <p>Copyright ©2024 All rights reserved | This template is made with</p>
        <p className="flex  gap-1">
          <Heart />
          by dev.sundas
        </p>
      </div>
    </div>
  );
}
