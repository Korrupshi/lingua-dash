import { ReactNode } from "react";
import { MainContent } from "./MainContent";
import { SideBar } from "./SideBar";

export const Layout = ({ mainContent }: { mainContent: ReactNode }) => {
  return (
    <div className="flex flex-row">
      <SideBar />
      <MainContent>{mainContent}</MainContent>
    </div>
  );
};
