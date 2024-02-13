import { Layout } from "../../layout/Layout";
import DataGridDemo from "./DataGrid";

export const DataSheetPage = () => {
  return (
    <Layout
      mainContent={
        <div className="p-6">
          <DataGridDemo />
        </div>
      }
    />
  );
};
