import { useState } from "react";

const TopTagsData = [
  {
    title: "Main.tsx",
    link: "",
  },
  {
    title: "Contact.tsx",
    link: "",
  },
  {
    title: "About.tsx",
    link: "",
  },
];

export default function TopTags() {
  const [isTagSelected, setIsTagSelected] = useState<number>(0);

  return (
    <div className=" bg-sideBarColor font-firaCode text-lightText">
      <div className="flex">
        {TopTagsData.map((data, idx) => (
          <div
            key={data.title}
            className={`bg cursor-pointer border-x border-black border-opacity-20  px-5  py-2 ${
              idx === isTagSelected ? "bg-sideBarColor" : "bg-sidePanelGrey"
            } `}
            onClick={() => setIsTagSelected(idx)}
          >
            {data.title}
          </div>
        ))}
      </div>
    </div>
  );
}
