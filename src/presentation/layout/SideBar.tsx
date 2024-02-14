import { HomeOutlined, InputOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { layout } from "../../style";
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
    <aside className="fixed top-0 left-0 z-40 w-24 md:w-64 h-screen  md:inline-flex md:flex-col bg-black p-4 ">
      <img
        src="./src/assets/pingmu-banner.svg"
        alt="logo"
        className="hidden md:flex mb-8 h-10 w-fit"
      />
      <img
        src="./src/assets/pingmu-logo.svg"
        alt="logo"
        className="md:hidden mb-8 h-10 mx-auto"
      />
      <ul>
        <SideBarItem
          id={0}
          selected={selectedId == 0}
          title="Dashboard"
          icon={<HomeOutlined className={`${layout.sideBarItem}`} />}
          onClick={() => onNavigate("/")}
        />
        <SideBarItem
          id={1}
          selected={selectedId == 1}
          title="Input data"
          icon={<InputOutlined className={`${layout.sideBarItem}`} />}
          onClick={() => onNavigate("/input")}
        />
      </ul>
    </aside>
  );
};
