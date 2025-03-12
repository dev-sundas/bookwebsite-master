import React from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type Props = {};

export default function NewsLetter({}: Props) {
  return (
    <div>
      <div>
        <Card className="bg-blue-950 m-6 w-[80%]  md:h-[50vh] md:w-[90%]  border-none rounded-none     ">
          <div className="py-12 text-white text-center ">
            <h1 className="text-[27px] font-bold">Join Newsletter</h1>
            <p>
              Lorem started its journey with cast iron (CI) products in 1980.
              <br />
              The initial main objective was to ensure pure water and
              <br />
              affordable irrigation.
            </p>
            <div className="flex flex-col md:flex-row justify-center m-6 mt-6 gap-2">
              <Input
                placeholder="Enter your email"
                className="md:w-[20%] rounded-full"
              />
              <Button className="bg-[red] rounded-full text-white ">
                Subscribe
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
