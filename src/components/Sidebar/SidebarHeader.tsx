import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

type SidebarHeaderProps = {
  title: string;
  textSize?: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function SidebarHeader({
  title,
  textSize = "text-s",
  isOpen,
  setIsOpen,
}: SidebarHeaderProps) {
  return (
    <div
      className="flex cursor-pointer gap-2"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <Image
        src={isOpen ? `/sidebar/down.png` : "/sidebar/right.png"}
        alt="navigate"
        width={isOpen ? 10 : 6}
        height={isOpen ? 10 : 6}
        className="object-contain"
      />
      <p
        className={`select-none font-firaCode text-[15px] font-bold ${textSize} text-lightText`}
      >
        {title}
      </p>
    </div>
  );
}
