import { HomeOutlined, InputOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SideBarItem } from "../components/SideBarItem";

export const SideBar = () => {
  let navigate = useNavigate();

  const onNavigate = (path: string) => {
    navigate(path);
  };

  let location = useLocation();
  const path = location.pathname;

  const [selectedId, setSelectedId] = useState(0);

  useEffect(() => {
    let id: number;
    if (path === "/") {
      id = 0;
    } else if (path === "/input") {
      id = 1;
    } else {
      id = 0; // Or any other default value
    }
    setSelectedId(id);
  }, [path]);

  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen hidden md:inline-flex md:flex-col bg-black p-4 ">
      <img
        src="./src/assets/pingmu-banner.svg"
        alt="logo"
        className="mb-8 h-10"
      />
      <ul>
        <SideBarItem
          id={0}
          selected={selectedId == 0}
          title="Dashboard"
          icon={<HomeOutlined className="w-6 h-6 text-textPrimary" />}
          onClick={() => onNavigate("/")}
        />
        <SideBarItem
          id={1}
          selected={selectedId == 1}
          title="Input data"
          icon={<InputOutlined className="w-6 h-6 text-textPrimary" />}
          onClick={() => onNavigate("/input")}
        />
        {/* <SideBarItem
          id={2}
          title="Profile"
          icon={<PersonOutline className="w-6 h-6 text-textPrimary" />}
        /> */}
      </ul>
    </aside>
  );
};
