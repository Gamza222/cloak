import React, { FC } from "react";
import "./JoinUs.scss";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { RiFileTextLine } from "react-icons/ri";
import hacker from "../../assets/images/hacker-2.png";
import Logo from "../../assets/images/Logo";

interface JoinUsProps {
  title: string;
}

const JoinUs: FC<JoinUsProps> = ({ title }) => {
  return (
    <section className="join-us-container" id="join-us-section">
      <div className="join-us-container__bg"></div>
      <img className="join-us-container__hacker" src={hacker} />
      <div className="join-us-container__content">
        <div className="join-us-container__content__header">
          <h2 className="join-us-container__content__header__title">{title}</h2>
        </div>
        <div className="join-us-container__content__links">
          <a href="" className="join-us-container__content__links__link">
            <FaTwitter />
          </a>
          <a href="" className="join-us-container__content__links__link">
            <FaDiscord />
          </a>
          <a href="" className="join-us-container__content__links__link">
            <FaTelegramPlane />
          </a>
          <a href="" className="join-us-container__content__links__link">
            <RiFileTextLine />
          </a>
        </div>
        <h4>
          for all your <br /> privacy needs
        </h4>
        <div className="join-us-container__content__logo">
          <Logo />
          <div className="join-us-container__content__logo__text">
            <div />
            <p>cloak</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
