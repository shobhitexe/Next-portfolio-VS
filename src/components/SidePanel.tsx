import { sidePanelData } from "@/config/constants";
import Image from "next/image";

import { Dispatch, SetStateAction } from "react";

type SidePanelProps = {
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

export default function SidePanel({ setIsSidebarOpen }: SidePanelProps) {
  return (
    <div className="relative z-10 float-left flex h-screen flex-col gap-7 bg-sidePanelGrey p-3 shadow-lg ss:p-5">
      {sidePanelData.map((panel) => (
        <div
          key={panel.title}
          className="cursor-pointer"
          onClick={() => {
            setIsSidebarOpen((prev) => !prev);
          }}
        >
          <Image src={panel.image} alt={panel.title} width={24} height={24} />
        </div>
      ))}
    </div>
  );
}
