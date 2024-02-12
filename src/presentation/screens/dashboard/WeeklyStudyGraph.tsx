import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { StudyData } from "../../../domain/models/StudyData";
import { LargeGraphContainer } from "./LargeGraphContainer";

export const WeeklystudyGraph = () => {
  return <LargeGraphContainer title="2024" content={<BarGraph />} />;
};

function BarGraph() {
  return (
    <div className="flex flex-col text-center w-full h-full">
      <div className="flex items-center">
        <p className="-rotate-90">Hours</p>
        {/* <ResponsiveContainer className="flex h-full w-full "> */}
        <ResponsiveContainer width={600} height={300}>
          <BarChart data={data}>
            <XAxis dataKey="date" stroke="#FFF" color="#fff" />
            <YAxis dataKey="readMin" stroke="#FFF" />
            <Tooltip />
            <Bar
              dataKey="readMin"
              fill="#14CB42"
              width={10}
              maxBarSize={60}
            ></Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p>Week</p>
    </div>
  );
}

const data: StudyData[] = [
  {
    date: "1",
    readMin: 56,
  },
  {
    date: "2",
    readMin: 122,
  },
  {
    date: "3",
    readMin: 34,
  },
  {
    date: "4",
    readMin: 233,
  },
  {
    date: "5",
    readMin: 200,
  },
  {
    date: "6",
    readMin: 10,
  },
];
