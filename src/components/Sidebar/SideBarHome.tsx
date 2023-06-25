import { useState } from "react";
import { sideBarHomeData } from "@/config/constants";
import SidebarList from "./SidebarList";
import SidebarHeader from "./SidebarHeader";
import { SidebarComponentsProps } from "./Sidebar";
import { NavigationType } from "./SidebarList";

export default function SideBarHome({
  isActive,
  setIsActive,
}: SidebarComponentsProps) {
  const [isOpenHome, setIsOpenHome] = useState<boolean>(true);
  // const [isActiveHome, setIsActiveHome] = useState<number>(0);

  return (
    <div className="flex flex-col">
      <SidebarHeader
        title="Home"
        isOpen={isOpenHome}
        setIsOpen={setIsOpenHome}
      />
      {isOpenHome && (
        <SidebarList
          dataArray={sideBarHomeData}
          isActive={isActive}
          setIsActive={setIsActive}
          linkType={NavigationType.Route}
        />
      )}
    </div>
  );
}
