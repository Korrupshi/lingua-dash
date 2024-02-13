import { Layout } from "../../layout/Layout";
import { HskSection } from "./HskChart";
import { PieSection } from "./PieSection";
import { TextDataSection } from "./TextDataSection";
import { WeeklystudyGraph } from "./WeeklyStudyGraph";

export const DashBoardPage = () => {
  return (
    <Layout
      mainContent={
        <div className="p-6">
          <TextDataSection />
          <br />
          <div className="flex flex-col xl:flex-row gap-6 ">
            <WeeklystudyGraph />
            <div className="flex flex-col gap-6  w-full">
              <PieSection />
              <HskSection />
            </div>
          </div>
        </div>
      }
    />
  );
};
