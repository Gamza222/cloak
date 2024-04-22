import React, { FC } from "react";
import "./BoxRoadMap.scss";

interface BoxRoadMapProps {
  title: string;
  text: string;
}

const BoxRoadMap: FC<BoxRoadMapProps> = ({ title, text }) => {
  return (
    <div className="box-roadmap-container">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default BoxRoadMap;
