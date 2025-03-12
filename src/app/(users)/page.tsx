import Hero from "@/components/Hero";
import React from "react";
import { Heroimages } from "@/lib/database";
import { books } from "@/lib/database";
import BestSelling from "@/components/BestSelling";
import Features from "@/components/Features";
import LatestPublihed from "@/components/LatestPublihed";
import FooterImages from "@/components/FooterImages";

const booklist = books;

const images = Heroimages;

export default function page() {
  return (
    <main>
      <div className="bg-[#FEF4F4]">
        <Hero images={images} />
      </div>
      <div className="bg-[#FEF4F4]">
        <BestSelling books={booklist} heading={"Best Selling Books Ever"} />
      </div>
      <div>
        <Features
          books={booklist}
          heading={"Featured This Week"}
          link={"View All"}
        />
      </div>
      <div>
        <LatestPublihed />
      </div>
      <div>
        <FooterImages images={Heroimages.slice(0, 2)} />
      </div>
    </main>
  );
}
