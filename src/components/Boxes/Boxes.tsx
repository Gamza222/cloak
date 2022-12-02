import React, { FC } from "react";
import Box from "../UI/Box/Box";
import "./Boxes.scss";
import bag from "../../assets/images/bag.png";
import graph from "../../assets/images/graph.png";
import wallet from "../../assets/images/wallet.png";
import cubes from "../../assets/images/cubes.png";

interface BoxesProps {}

const Boxes: FC<BoxesProps> = () => {
  return (
    <section className="boxes-container" id="boxes-section">
      <Box
        title={"cloak private rpc"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel corrupti distinctio nobis necessitatibus reiciendis rem eum quas optiqwnjkqnkqnkwqkqk"
        }
        img={bag}
      />
      <Box
        title={"cloak charts"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel corrupti distinctio nobis necessitatibus reiciendis rem eum quas optiqwnjkqnkqnkwqkqk"
        }
        img={graph}
      />
      <Box
        title={"cloak private wallet"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel corrupti distinctio nobis necessitatibus reiciendis rem eum quas optiqwnjkqnkqnkwqkqk"
        }
        img={wallet}
      />
      <Box
        title={"cloak transfers"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel corrupti distinctio nobis necessitatibus reiciendis rem eum quas optiqwnjkqnkqnkwqkqk"
        }
        img={cubes}
      />
    </section>
  );
};

export default Boxes;
