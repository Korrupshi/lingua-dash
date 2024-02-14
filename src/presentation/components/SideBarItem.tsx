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
      className={`flex w-5/6 m-auto items-center gap-2 px-3 mb-4 py-2 rounded-lg cursor-pointer ${
        selected ? "bg-blue-700 hover:bg-blue-500" : "hover:bg-gray-700"
      }`}
      onClick={onClick}
    >
      {icon}
      <p className="hidden md:block text-md select-none">{title}</p>
    </li>
  );
};
