import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

interface HskData {
  hsk: string;
  percent: number;
}
const data: HskData[] = [
  {
    hsk: "HSK1",
    percent: 100,
  },
  {
    hsk: "HSK2",
    percent: 100,
  },
  {
    hsk: "HSK3",
    percent: 99,
  },
  {
    hsk: "HSK4",
    percent: 90,
  },
  {
    hsk: "HSK5",
    percent: 82,
  },
  {
    hsk: "HSK6",
    percent: 53,
  },
];

export const HskSection = () => {
  return (
    <div className="p-4 h-fit  max-w-[400px] bg-surface rounded-xl">
      <h2 className="text-2xl mb-4 font-semibold">HSK Progress</h2>
      <div className="flex flex-row gap-4">
        <HskRadar />
      </div>
    </div>
  );
};

export const HskRadar = () => {
  return (
    <ResponsiveContainer width={400} height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="hsk" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="percent"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};
