import React, { ReactNode } from "react";
export const MainContent = ({ children }: { children: ReactNode }) => {
  return <div className="flex-grow">{children}</div>;
};
