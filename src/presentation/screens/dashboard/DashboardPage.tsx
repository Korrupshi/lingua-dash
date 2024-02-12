import { Layout } from "../../layout/Layout";
import { BarChartSection } from "./BarChartSection";
import { DemoChart } from "./DemoChart";
import { HskSection } from "./HskChart";
import { PieSection } from "./PieSection";
import { TextDataSection } from "./TextDataSection";

export const DashBoardPage = () => {
  return (
    <div className="bg-background w-screen">
      <Layout
        mainContent={
          <div className="p-6">
            <TextDataSection />
            <br />
            <br />
            <br />
            <div className="flex flex-col xl:flex-row gap-6  ">
              <BarChartSection />
              <div className="flex flex-col gap-6">
                <PieSection />
                <HskSection />
                <DemoChart />
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};
