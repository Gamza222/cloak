import React, { FC } from "react";
import Logo from "../../../assets/images/Logo";
import "./Box.scss";
import logoBg from "../../../assets/images/logo-bg-cloak.png";

interface BoxProps {
  title: string;
  text: string;
  img: string;
}

const Box: FC<BoxProps> = ({ title, text, img }) => {
  return (
    <div className="box-container">
      <img src={logoBg} alt="" className="box-container__logo-bg" />
      <div className="box-container__content">
        <Logo />
        <h3 className="box-container__content__title">{title}</h3>
        <p className="box-container__content__text">{text}</p>
        <img src={img} alt="" className="box-container__content__img" />
      </div>
    </div>
  );
};

export default Box;
