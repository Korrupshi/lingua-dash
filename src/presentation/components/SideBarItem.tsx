import { ReactNode } from "react";
import { useSideBarStore } from "../../application/stores/sideBarStore";

interface SideBarItemProps {
  id: number;
  title: string;
  // selectedId: number;
  icon: ReactNode;
  // onClick: (id: number) => void;
}

export const SideBarItem: React.FC<SideBarItemProps> = ({
  id,
  title,
  // selectedId,
  icon,
  // onClick,
}) => {
  const selectedId = useSideBarStore((state) => state.selectedId);
  const onSelected = useSideBarStore((state) => state.onSelected);
  const selected = selectedId === id;

  return (
    <li
      className={`flex items-center gap-2 px-2 mb-4 py-2 rounded-lg cursor-pointer ${
        selected ? "bg-blue-700 hover:bg-blue-500" : "hover:bg-gray-700"
      }`}
      onClick={() => onSelected(id)}
    >
      {icon}
      <p className="text-md select-none">{title}</p>
    </li>
  );
};
