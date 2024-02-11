import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

interface SideBarItemProps {
  title: string;
  value: string;
}

export const SideBarItem: React.FC<SideBarItemProps> = ({ title, value }) => {
  return (
    <div className="flex items-center gap-2 px-2 mb-4">
      <ArrowDownCircleIcon className="w-10 h-10 text-textPrimary" />

      <p className="text-xl">{title}</p>
    </div>
  );
};
