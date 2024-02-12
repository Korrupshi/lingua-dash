import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { SmallGraphContainer } from "./SmallGraphContainer";

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
    <SmallGraphContainer
      title="HSK Progress"
      content={<HskRadar data={data} />}
    />
  );
};

export const HskRadar: React.FC<{ data: HskData[] }> = ({ data }) => {
  const hskData = data.length === 0 || data == null ? defaultData : data;
  return (
    <ResponsiveContainer className="flex h-full w-full ">
      <RadarChart data={hskData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="hsk" color="#fff" fill="#fff" />
        {/* <PolarRadiusAxis /> */}
        <Radar
          name="Demo"
          dataKey="percent"
          stroke="#14CB42"
          fill="#14CB42"
          fillOpacity={0.5}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

const defaultData: HskData[] = [
  {
    hsk: "HSK1",
    percent: 0,
  },
  {
    hsk: "HSK2",
    percent: 0,
  },
  {
    hsk: "HSK3",
    percent: 0,
  },
  {
    hsk: "HSK4",
    percent: 0,
  },
  {
    hsk: "HSK5",
    percent: 0,
  },
  {
    hsk: "HSK6",
    percent: 0,
  },
];
