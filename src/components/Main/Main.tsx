import React, { FC } from "react";
import hacker from "../../assets/images/hacker.png";
import bg from "../../assets/images/bg-cloack.png";
import "./Main.scss";

interface MainProps {
  title: string;
  subtitle: string;
  button1: string;
  button2: string;
}

const Main: FC<MainProps> = ({ title, subtitle, button1, button2 }) => {
  return (
    <section id="main-section" className="main-container">
      <img src={hacker} alt="hacker" className="main-container__hacker-image" />
      <div className="main-container__bg-image" />
      <div className="main-container__social-links">
        <a href="">a</a>
        <a href="">a</a>
        <a href="">a</a>
      </div>
      <div className="main-container__content">
        <h1 className="main-container__content__title">{title}</h1>
        <p className="main-container__content__text">{subtitle}</p>
        <div className="main-container__content__buttons">
          <button className="main-container__content__buttons__btn-1">
            {button1}
          </button>
          <button className="main-container__content__buttons__btn-2">
            {button2}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Main;
