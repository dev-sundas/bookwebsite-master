import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { FooterItemType, writerType } from "@/types";
import { Label } from "./ui/label";

type Props = {
  heading: string;
  catagories?: FooterItemType[];
  publisher?: writerType[];
};

export default function FilterItem({ heading, catagories, publisher }: Props) {
  return (
    <div>
      <h1 className="font-bold text-[16px] py-2">{heading}</h1>
      <RadioGroup>
        {catagories &&
          catagories
            .filter((title) => title.id <= 5)
            .map((category) => (
              <Label
                key={category.id}
                className="gap-2 flex items-center leading-6"
              >
                <RadioGroupItem
                  value={category.id.toString()}
                  id={`option-${category.id}`}
                />
                {category.title}
              </Label>
            ))}

        {publisher &&
          publisher
            .filter((title) => title.id <= 5)
            .map((category) => (
              <Label
                key={category.id}
                className="gap-2 flex items-center leading-6"
              >
                <RadioGroupItem
                  value={category.id.toString()}
                  id={`option-${category.id}`}
                />
                {category.name}
              </Label>
            ))}
      </RadioGroup>
    </div>
  );
}
