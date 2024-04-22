import React, { FC } from "react";
import hacker from "../../assets/images/hacker-pic.png";
import bg from "../../assets/images/bg-cloack.png";
import "./Main.scss";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

interface MainProps {
  title: string;
  subtitle: string;
  button1: string;
  button2: string;
  linkTg: string;
  linkTw: string;
  linkDs: string;
}

const Main: FC<MainProps> = ({
  title,
  subtitle,
  button1,
  button2,
  linkTg,
  linkTw,
  linkDs,
}) => {
  return (
    <section id="main-section" className="main-container">
      <img src={hacker} alt="hacker" className="main-container__hacker-image" />
      <div className="main-container__bg-image" />
      <div className="main-container__social-links">
        <a href={linkTg}>
          <FaTelegramPlane />
        </a>
        <a href={linkTw}>
          <FaTwitter />
        </a>
        <a href={linkDs}>
          <FaDiscord />
        </a>
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
