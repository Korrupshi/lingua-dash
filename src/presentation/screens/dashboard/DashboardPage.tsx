import { Layout } from "../../layout/Layout";
import { TextDataSection } from "./TextMetrics";

export const DashBoardPage = () => {
  return (
    <div className="bg-background w-screen">
      <Layout mainContent={<TextDataSection />} />
    </div>
  );
};
