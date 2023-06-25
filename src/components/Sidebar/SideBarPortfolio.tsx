import { useState } from "react";
import SidebarList from "./SidebarList";
import {
  sidebarPortfolioDataWebDev,
  sidebarPortfolioDataDiscordBots,
} from "@/config/constants";
import { SidebarComponentsProps } from "./Sidebar";
import SidebarHeader from "./SidebarHeader";
import { NavigationType } from "./SidebarList";

export default function SideBarPortfolio({
  isActive,
  setIsActive,
}: SidebarComponentsProps) {
  const [isOpenPortfolio, setIsOpenPortfolio] = useState<boolean>(true);

  const [isOpenPortfolioWebDev, setIsOpenPortfolioWebDev] =
    useState<boolean>(true);

  const [isOpenPortfolioDiscordBots, setIsOpenPortfolioDiscordBots] =
    useState<boolean>(true);

  return (
    <div className="flex flex-col">
      <SidebarHeader
        title="Portfolio"
        isOpen={isOpenPortfolio}
        setIsOpen={setIsOpenPortfolio}
      />
      {isOpenPortfolio && (
        <div className="ml-5 flex flex-col gap-1">
          <div>
            <SidebarHeader
              title="Web Dev"
              isOpen={isOpenPortfolioWebDev}
              setIsOpen={setIsOpenPortfolioWebDev}
            />
            {isOpenPortfolioWebDev && (
              <SidebarList
                dataArray={sidebarPortfolioDataWebDev}
                isActive={isActive}
                setIsActive={setIsActive}
                linkType={NavigationType.Route}
                position="-left-[52px]"
              />
            )}
          </div>
          <div>
            <SidebarHeader
              title="Discord Bots"
              isOpen={isOpenPortfolioDiscordBots}
              setIsOpen={setIsOpenPortfolioDiscordBots}
            />
            {isOpenPortfolioDiscordBots && (
              <SidebarList
                dataArray={sidebarPortfolioDataDiscordBots}
                isActive={isActive}
                setIsActive={setIsActive}
                linkType={NavigationType.Route}
                position="-left-[52px]"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
