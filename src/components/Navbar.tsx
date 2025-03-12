"use client";
import React, { useState } from "react";
import NavItems from "./NavItems";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

type Props = {};

export default function Navbar({ }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-4 flex flex-col items-start bg-slate-900 lg:flex-row lg:justify-center lg:mt-10 lg:bg-[#FEF4F4] lg:items-center">
      <div className="lg:hidden">
        {open ? (
          <Button className="bg-transparent" onClick={() => setOpen(false)}>
            <X className="absolute right-5 text-white" />
          </Button>
        ) : (
          <Button className="bg-transparent">
            <Menu
              className="absolute right-5 text-white"
              onClick={() => setOpen(true)}
            />
          </Button>
        )}
      </div>
      <div
        className={`${open ? "flex" : "hidden"
          } lg:flex flex-col text-white gap-5 ml-2 lg:flex-row md:gap-10 lg:text-black `}
      >
        <NavItems link={"/"} text={"Home"} setOpen={setOpen} open={open} />
        <NavItems
          link={"/categories"}
          text={"Categories"}
          setOpen={setOpen}
          open={open}
        />
        <NavItems
          link={"/about"}
          text={"About"}
          setOpen={setOpen}
          open={open}
        />
        <NavItems link={"/blog"} text={"Blog"} setOpen={setOpen} open={open} />
        <NavItems
          link={"/contact"}
          text={"Contact"}
          setOpen={setOpen}
          open={open}
        />
      </div>
    </div>
  );
}
