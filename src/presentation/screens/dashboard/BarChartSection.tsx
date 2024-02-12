import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianAxis,
  ResponsiveContainer,
} from "recharts";
import { StudyData } from "../../../domain/models/StudyData";

export const BarChartSection = () => {
  return (
    <div className="p-4 max-w-[700px] h-fit bg-surface rounded-xl">
      <h2 className="text-2xl mb-4 font-semibold">2024</h2>
      <div className="flex flex-row gap-4">
        <BarGraph />
      </div>
    </div>
  );
};

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
];

function BarGraph() {
  return (
    <ResponsiveContainer width={700} height={300}>
      <BarChart data={data}>
        <XAxis dataKey="date" label={"Week"} />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* <CartesianGrid  strokeDasharray="3 3" /> */}
        <Bar dataKey="readMin" fill="#8884d8" width={100} />
      </BarChart>
    </ResponsiveContainer>
  );
}
