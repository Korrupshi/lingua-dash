import React from "react";
import ReactECharts from "echarts-for-react";

// export const DemoChart = () => {
//   return (
//     <div className="p-4 h-fit  max-w-[400px] bg-surface rounded-xl">
//       <h2 className="text-2xl mb-4 font-semibold">HSK Progress</h2>
//       <div className="flex flex-row gap-4">
//         <HskChart />
//       </div>
//     </div>
//   );
// };

export const DemoChart: React.FC = () => {
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return <ReactECharts option={option} />;
};

import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { RadarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";

use([
  CanvasRenderer,
  RadarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

interface HskData {
  hsk: string;
  value: number;
}
const data: HskData[] = [
  {
    hsk: "HSK1",
    value: 100,
  },
  {
    hsk: "HSK2",
    value: 100,
  },
  {
    hsk: "HSK3",
    value: 99,
  },
  {
    hsk: "HSK4",
    value: 90,
  },
  {
    hsk: "HSK5",
    value: 82,
  },
  {
    hsk: "HSK6",
    value: 53,
  },
];

const option = {
  title: {
    text: "HSK Progress",
    left: "center",
    show: true,
    top: "0%",
    textStyle: {
      color: "#fff",
    },
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["Current"],
    right: "0%",
    orient: "vertical",
    textStyle: {
      color: "#fff",
    },
  },
  radar: [
    {
      indicator: [
        { text: "HSK1", max: 100 },
        { text: "HSK2", max: 100 },
        { text: "HSK3", max: 100 },
        { text: "HSK4", max: 100 },
        { text: "HSK5", max: 100 },
        { text: "HSK6", max: 100 },
      ],
      radius: "66%",
      center: ["50%", "55%"],
      axisName: {
        padding: [-6, -6, -6, -6], // move closer to the graph
        color: "#888",
      },
    },
  ],
  series: [
    {
      type: "radar",
      tooltip: {
        trigger: "item",
      },
      areaStyle: {},
      data: [
        {
          value: [100, 100, 99, 90, 85, 50],
          name: "Current",
        },
      ],
    },
  ],
};
