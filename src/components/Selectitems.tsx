import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type Props = { heading: string; items: { value: string; text: string }[] };

export default function Selectitems({ heading, items }: Props) {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[250px] rounded-full mt-6">
          <SelectValue placeholder={heading} />
        </SelectTrigger>
        <SelectContent>
          {items.map((item, index) => (
            <SelectItem value={item.value} key={index}>
              {item.text}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
