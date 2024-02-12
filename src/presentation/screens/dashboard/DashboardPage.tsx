import { Layout } from "../../layout/Layout";
import { WeeklystudyGraph } from "./WeeklyStudyGraph";
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
            {/* <br /> */}
            {/* <br /> */}
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
    </div>
  );
};
