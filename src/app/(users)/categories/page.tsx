import React from "react";
import Sidebar from "@/components/Sidebar";
import NewsLetter from "@/components/NewsLetter";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="md:min-w-[768px] lg: max-w-[1140px] m-auto">
      <Sidebar
        image={{
          id: 0,
          image_url:
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cac47c73-f77e-4a0e-a78c-788d3932efe9/dfwgw4c-0ed13381-68af-4afb-9906-3b7bf2f99910.png/v1/fill/w_1280,h_763,q_80,strp/zf_puhi_halloween_pumpkin_purple_night_sky_vampire_by_zfpuhi_dfwgw4c-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzYzIiwicGF0aCI6IlwvZlwvY2FjNDdjNzMtZjc3ZS00YTBlLWE3OGMtNzg4ZDM5MzJlZmU5XC9kZndndzRjLTBlZDEzMzgxLTY4YWYtNGFmYi05OTA2LTNiN2JmMmY5OTkxMC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.nFrDcEfcCC3OdOlEZhR5Juwnj5WtRkUoHTC0gymhFl8",
        }}
      />

      <div>
        <NewsLetter />
      </div>
    </div>
  );
}
