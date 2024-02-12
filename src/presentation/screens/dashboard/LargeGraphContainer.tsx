import React, { ReactNode } from "react";

export const LargeGraphContainer: React.FC<{
  title: string;
  content: ReactNode;
}> = ({ title, content }) => {
  return (
    // h-[536px]
    <div className=" p-4 w-full max-w-[500px] lg:max-w-[700px] h-[400px] bg-surface rounded-xl">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      {content}
    </div>
  );
};
