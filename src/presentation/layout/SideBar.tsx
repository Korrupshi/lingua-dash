import {
  ArrowUpTrayIcon,
  ChartBarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { SideBarItem } from "../components/SideBarItem";

export const SideBar = () => {
  return (
    <div className="w-56 h-screen bg-surface p-4 border-e border-gray-700">
      <img
        src="./src/assets/pingmu-banner.svg"
        alt="logo"
        className="mb-8 h-10"
      />
      <ul>
        <SideBarItem
          id={0}
          title="Dashboard"
          icon={<ChartBarIcon className="w-6 h-6 text-textPrimary" />}
        />
        <SideBarItem
          id={1}
          title="Profile"
          icon={<UserCircleIcon className="w-6 h-6 text-textPrimary" />}
        />
        <SideBarItem
          id={2}
          title="Input data"
          icon={<ArrowUpTrayIcon className="w-6 h-6 text-textPrimary" />}
        />
      </ul>
    </div>
  );
};
