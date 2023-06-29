import { useState } from "react";
import { sidebarContactData } from "@/data/constants";
import SidebarList from "./SidebarList";
import SidebarHeader from "./SidebarHeader";
import { SidebarComponentsProps } from "./Sidebar";
import { NavigationType } from "./SidebarList";

export default function SidebarContacts({
  isActive,
  setIsActive,
}: SidebarComponentsProps) {
  const [isOpenContacts, setIsOpenContacts] = useState<boolean>(true);
  // const [isActiveContacts, setIsActiveContacts] = useState<number>(0);

  return (
    <div className="flex flex-col">
      <SidebarHeader
        title="Contacts"
        isOpen={isOpenContacts}
        setIsOpen={setIsOpenContacts}
      />
      {isOpenContacts && (
        <SidebarList
          dataArray={sidebarContactData}
          isActive={isActive}
          setIsActive={setIsActive}
          linkType={NavigationType.Link}
        />
      )}
    </div>
  );
}
