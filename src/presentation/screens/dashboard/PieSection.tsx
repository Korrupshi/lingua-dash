import React, { PureComponent } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

interface StudyMethod {
  name: string;
  value: number;
}

export const PieSection = () => {
  return (
    <div className="p-4 h-fit  max-w-[400px] bg-surface rounded-xl">
      <h2 className="text-2xl mb-4 font-semibold">Breakdown</h2>
      <div className="flex flex-row gap-4">
        <PieGraph />
      </div>
    </div>
  );
};

const data01: StudyMethod[] = [
  { name: "Read", value: 400 },
  { name: "Listen", value: 300 },
  { name: "Speak", value: 300 },
  { name: "Passive", value: 200 },
  { name: "Other", value: 278 },
];

const PieGraph = () => {
  return (
    <ResponsiveContainer width={400} height={300}>
      <PieChart>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};
