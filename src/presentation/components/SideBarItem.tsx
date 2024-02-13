import { ReactNode } from "react";

interface SideBarItemProps {
  id: number;
  selected: boolean;
  title: string;
  icon: ReactNode;
  onClick: () => void;
}

export const SideBarItem: React.FC<SideBarItemProps> = ({
  id,
  selected,
  title,
  icon,
  onClick,
}) => {
  return (
    <li
      className={`flex items-center gap-2 px-2 mb-4 py-2 rounded-lg cursor-pointer ${
        selected ? "bg-blue-700 hover:bg-blue-500" : "hover:bg-gray-700"
      }`}
      onClick={onClick}
    >
      {icon}
      <p className="text-md select-none">{title}</p>
    </li>
  );
};
