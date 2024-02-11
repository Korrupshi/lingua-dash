import React from "react";

interface HelloProps {
  text: string;
  onClick: () => void;
}

const Hello: React.FC<HelloProps> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Hello;
