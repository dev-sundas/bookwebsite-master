import BestSelling from "@/components/BestSelling";
import NewsLetter from "@/components/NewsLetter";
import PublishedButtons from "@/components/PublishedButtons";
import { Card, CardContent } from "@/components/ui/card";
import { books } from "@/lib/database";
import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import Book from "@/components/Book";
import Rating from "@/components/Rating";

const play = Playfair_Display({
  weight: ["600", "800"],
  subsets: ["latin"],
});

const booklist = books;

type Props = {
  params: { id: string };
};

export default function page({ params }: Props) {
  const book = books.filter((book) => book.id == Number(params.id))[0];
  return (
    <div className="md:min-w-[768px] lg: max-w-[1140px] m-auto ">
      <Card className="bg-[red] rounded-none">
        <CardContent>
          <div className="flex flex-row gap-10">
            <div className="py-10">
              <Image src={book.image_url} width={200} height={200} alt={""} />
            </div>
            <div className="text-white flex flex-col py-20 leading-10">
              <h1 className={` text-[32px] font-bold ${play.className}`}>
                {book.title}
              </h1>
              <p>{book.author}</p>
              <div className="flex items-center gap-2">
                <Rating rating={book.rating} color={"#fff"} />
                <p>{book.views}</p>
              </div>

              <p className="text-[27px] font-bold">$50.00</p>
              <div className="text-white">
                <Button className="hover:text-[red] rounded-full mt-5 bg-red  border-[2px] white p-[20px] w-[60%] hover:bg-white">
                  <Link href={"/"}>View Details</Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="m-6">
        <PublishedButtons
          buttons={[
            { link: "/?s=descripation", text: "Discripation" },
            { link: "/?s=author", text: "Author" },
            { link: "/?s=comments", text: "Comments" },
            { link: "/?s=reviews", text: "Reviews" },
          ]}
        />
      </div>

      <div className="mt-4 ml-6 ">
        <p className=" text-[grey] mb-6">
          Beryl Cook is one of Britain’s most talented and amusing artists
          .Beryl’s pictures feature women of all shapes and sizes
          <br /> enjoying themselves .Born between the two world wars, Beryl
          Cook eventually left Kendrick School in Reading at the
          <br /> age of 15, where she went to secretarial school and then into
          an insurance office. After moving to London and then <br /> Hampton,
          she eventually married her next door neighbour from Reading, John
          Cook. He was an officer in the Merchant
          <br />
          Navy and after he left the sea in 1956, they bought a pub for a year
          before John took a job in Southern Rhodesia with a <br /> motor
          company. Beryl bought their young son a box of watercolours, and when
          showing him how to use it, she decided
          <br /> that she herself quite enjoyed painting. John subsequently
          bought her a child’s painting set for her birthday and it was
          <br /> with this that she produced her first significant work, a
          half-length portrait of a dark-skinned lady with a vacant
          <br />
          expression and large drooping breasts. It was aptly named ‘Hangover’
          by Beryl’s husband
        </p>
        <p className=" text-[grey]">
          and It is often frustrating to attempt to plan meals that are designed
          for one. Despite this fact, we are seeing more and more
          <br /> recipe books and Internet websites that are dedicated to the
          act of cooking for one. Divorce and the death of spouses
          <br /> or grown children leaving for college are all reasons that
          someone accustomed to cooking for more than one would <br />
          suddenly need to learn how to adjust all the cooking practices
          utilized before into a streamlined plan of cooking that is
          <br />
          more efficient for one person creating less.
        </p>
      </div>
      <div>
        <NewsLetter />
      </div>
    </div>
  );
}
