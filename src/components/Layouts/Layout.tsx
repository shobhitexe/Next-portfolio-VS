import { Fragment, useState, useEffect, ReactNode } from "react";
import Topbar from "../Topbar";
import SidePanel from "../SidePanel";
import Sidebar from "../Sidebar/Sidebar";
import TopTags from "../TopTags";
import useWindowWidth from "@/hooks/useWindowWidth";
import Footer from "../Footer";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (windowWidth !== null && windowWidth < 768) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [windowWidth]);

  return (
    <Fragment>
      <Topbar />
      <SidePanel setIsSidebarOpen={setIsSidebarOpen} />
      <div>
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <TopTags />
        <div className="h-screen overflow-auto">{children}</div>
      </div>
      <Footer />
    </Fragment>
  );
}
