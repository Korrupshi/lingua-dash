import React from "react";

// interface TextDataSectionProps {
//   text: string;
//   onClick: () => void;
// }

export const TextDataSection = () => {
  return (
    <div className="p-4 w-fit">
      <h2 className="text-2xl mb-4 font-semibold">Study Time</h2>
      <div className="flex flex-row gap-4">
        <TextMetrics title="Today" value="1.6h" />
        <TextMetrics title="Week 12" value="18.4h" />
        <TextMetrics title="Total" value="1985h" />
      </div>
    </div>
  );
};

interface TextDataProps {
  title: string;
  value: string;
}

const TextMetrics: React.FC<TextDataProps> = ({ title, value }) => {
  return (
    <div className="flex flex-row w-fit me-2 gap-3 mb-2 items-center">
      <div className="bg-surface px-4 py-2 rounded-lg">
        <p className="text-lg font-semibold">{title}</p>
      </div>
      <h2 className="text-2xl font-semibold">{value}</h2>
    </div>
  );
};
