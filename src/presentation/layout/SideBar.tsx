import { SideBarItem } from "../components/SideBarItem";

export const SideBar = () => {
  return (
    <div className="w-56 h-screen bg-surface p-2">
      <h1 className="mb-6">Pingmu</h1>
      <SideBarItem title="Item1" value="" />
      <SideBarItem title="Item2" value="" />
      <SideBarItem title="Item3" value="" />
    </div>
  );
};
