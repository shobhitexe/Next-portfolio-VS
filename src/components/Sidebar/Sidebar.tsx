import Image from "next/image";
import SideBarHome from "./SideBarHome";
import SideBarPortfolio from "./SideBarPortfolio";
import SidebarContacts from "./SidebarContacts";
import SidebarHeader from "./SidebarHeader";
import React, { Dispatch, SetStateAction, useState } from "react";

export type SidebarComponentsProps = {
  isActive: string;
  setIsActive: Dispatch<SetStateAction<string>>;
};

type SidebarProps = {
  isSidebarOpen: boolean;
};

export default function Sidebar({ isSidebarOpen }: SidebarProps) {
  const [isOpenHead, setIsOpenHead] = useState<boolean>(true);
  const [isActive, setIsActive] = useState<string>("Main.tsx");

  return (
    <div
      className={`float-left ${
        isSidebarOpen ? "flex" : "hidden"
      } absolute left-10 z-auto flex h-screen w-64 flex-col bg-sideBarColor px-5 py-2 shadow-md ss:left-16 sm:static sm:left-0`}
    >
      <div className="flex items-center gap-28 pb-2">
        <p className="select-none font-firaCode capitalize text-textGrey">
          Explorer
        </p>
        <Image src="/sidebar/dots.png" alt="dots" width={30} height={30} />
      </div>
      <SidebarHeader
        title="Shobhit's Portfolio"
        isOpen={isOpenHead}
        setIsOpen={setIsOpenHead}
        textSize="text-md font-bold"
      />
      {isOpenHead && (
        <div className="ml-3 flex flex-col gap-2">
          <SideBarHome isActive={isActive} setIsActive={setIsActive} />
          <SideBarPortfolio isActive={isActive} setIsActive={setIsActive} />
          <SidebarContacts isActive={isActive} setIsActive={setIsActive} />
        </div>
      )}
    </div>
  );
}
