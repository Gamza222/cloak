import React, { FC } from "react";
import "./Boxes.scss";

interface BoxesProps {}

const Boxes: FC<BoxesProps> = () => {
  return <section className="boxes-container" id="boxes-section"></section>;
};

export default Boxes;
