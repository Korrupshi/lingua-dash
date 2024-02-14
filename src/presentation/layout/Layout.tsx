import { ReactNode } from "react";
import { MainContent } from "./MainContent";
import { SideBar } from "./SideBar";

export const Layout = ({ mainContent }: { mainContent: ReactNode }) => {
  return (
    <div className="bg-background w-screen h-full flex flex-row pl-24 md:pl-64 ">
      <SideBar />
      <MainContent>{mainContent}</MainContent>
    </div>
  );
};
