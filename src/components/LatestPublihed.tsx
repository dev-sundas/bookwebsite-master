import React from "react";
import BestSelling from "./BestSelling";
import { books } from "@/lib/database";
import { Button } from "./ui/button";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import PublishedButtons from "./PublishedButtons";
const play = Playfair_Display({
  weight: ["600", "800"],
  subsets: ["latin"],
});

const booklist = books;

type Props = {};

export default function LatestPublihed({}: Props) {
  return (
    <div className="md:min-w-[768px] lg: max-w-[1140px] m-auto">
      <div className="mt-14">
        <div>
          <h1 className={`text-[32px] py-4 ${play.className}`}>
            Latest Published items
          </h1>
        </div>
        <div className="flex gap-4 flex-wrap">
          <PublishedButtons
            buttons={[
              {
                link: "/?s=all",
                text: "All",
              },
              {
                link: "/?=thriller",
                text: "Thriller",
              },
              {
                link: "/?s=science",
                text: "Science Fiction",
              },
              {
                link: "/?s=horror",
                text: "Horror",
              },
              {
                link: "/?s=history",
                text: "History",
              },
            ]}
          />
        </div>
      </div>
      <div>
        <BestSelling books={booklist} heading={""} />
      </div>
      <div className="flex justify-center mb-10">
        <Button
          className="w-[50%] md:w-[20%] h-12 rounded-full text-[red] hover:text-white bg-white border-[1px] border-[red] hover:bg-[red]"
          asChild
        >
          <Link href={"/"}>Browse More</Link>
        </Button>
      </div>
    </div>
  );
}
