import React from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { colors } from "../../../style";
import { SmallGraphContainer } from "./SmallGraphContainer";
interface StudyMethod {
  name: string;
  value: number;
}

const data: StudyMethod[] = [
  { name: "Read", value: 400 },
  { name: "Listen", value: 300 },
  { name: "Speak", value: 300 },
  { name: "Passive", value: 200 },
  { name: "Other", value: 278 },
];

export const PieSection = () => {
  return (
    <SmallGraphContainer title="Breakdown" content={<PieGraph data={data} />} />
  );
};

const PieGraph: React.FC<{ data: StudyMethod[] }> = ({ data }) => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

  if (data.length === 0 || data == null) {
    return NoDataPieGraph();
  } else
    return (
      <ResponsiveContainer className="flex h-full w-full">
        <PieChart>
          <Pie
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            isAnimationActive={false}
            data={data}
            outerRadius={100}
            stroke={`${colors.surface}`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="vertical" verticalAlign="top" align="right" />
        </PieChart>
      </ResponsiveContainer>
    );
};

const NoDataPieGraph = () => {
  return (
    <ResponsiveContainer className="flex flex-col h-full w-full">
      <PieChart>
        <Pie
          dataKey="value"
          nameKey="name"
          isAnimationActive={false}
          data={[{ value: 100, name: "NA" }]}
          outerRadius={100}
          fill="none"
          stroke={`${colors.surface}`}
          opacity={1}
        />
        <Legend layout="vertical" verticalAlign="top" align="right" />
      </PieChart>
    </ResponsiveContainer>
  );
};
