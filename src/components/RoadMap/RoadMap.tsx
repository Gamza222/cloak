import React, { FC } from "react";
import Logo from "../../assets/images/Logo";
import BoxRoadMap from "./BoxRoadMap/BoxRoadMap";
import "./RoadMap.scss";

interface RoadMapProps {
  title: string;
  subtitle: string;
}

const RoadMap: FC<RoadMapProps> = ({ title, subtitle }) => {
  return (
    <section className="roadmap-container" id="roadmap-section">
      <div className="roadmap-container__header">
        <h2 className="roadmap-container__header__title">{title}</h2>
        <p className="roadmap-container__header__subtitle">{subtitle}</p>
      </div>
      <div className="roadmap-container__content">
        <div className="roadmap-container__content__line">
          <Logo />
        </div>
        <div className="roadmap-container__content__line">
          <Logo />
        </div>
        <BoxRoadMap
          title={"cloak privite wallet"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos impedit doloribus iure ex"
          }
        />
        <BoxRoadMap
          title={"cloak privite wallet"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos impedit doloribus iure ex"
          }
        />
        <BoxRoadMap
          title={"cloak privite wallet"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos impedit doloribus iure ex"
          }
        />
        <BoxRoadMap
          title={"cloak privite wallet"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos impedit doloribus iure ex"
          }
        />
      </div>
    </section>
  );
};

export default RoadMap;
