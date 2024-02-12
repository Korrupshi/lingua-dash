import React, { ReactNode } from "react";

export const SmallGraphContainer: React.FC<{
  title: string;
  content: ReactNode;
}> = ({ title, content }) => {
  return (
    <div className="flex flex-col p-4 w-full  h-72 max-w-[500px] xl:max-w-[400px] bg-surface rounded-xl">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      {content}
    </div>
  );
};
