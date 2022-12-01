import React, { FC } from "react";
import Logo from "../../assets/images/Logo";
import "./Header.scss";
import { HiMenu } from "react-icons/hi";

const Header: FC = () => {
  return (
    <>
      <header id="header" className="header-container">
        <div className="header-container__menu-btn">
          <button className="header-container__menu-btn__button">
            <HiMenu />
          </button>
        </div>
        <div className="header-container__logo">
          <Logo />
          <div className="header-container__logo__text">
            <div />
            <p>cloak</p>
          </div>
        </div>
        <div className="header-container__connect-btn">
          <button className="header-container__connect-btn__button">
            connect wallet
          </button>
        </div>
      </header>
      <header id="header" className="header-container header-sm">
        <div className="header-container__logo">
          <Logo />
          <div className="header-container__logo__text">
            <div />
            <p>cloak</p>
          </div>
        </div>
        <div className="header-sm__buttons">
          <div className="header-container__connect-btn">
            <button className="header-container__connect-btn__button">
              connect wallet
            </button>
          </div>
          <div className="header-container__menu-btn">
            <button className="header-container__menu-btn__button">
              <HiMenu />
            </button>
          </div>
        </div>
      </header>
      <header id="header" className="header-container header-vsm">
        <div className="header-vsm__buttons">
          <div className="header-container__logo">
            <Logo />
            <div className="header-container__logo__text">
              <div />
              <p>cloak</p>
            </div>
          </div>
          <div className="header-container__menu-btn">
            <button className="header-container__menu-btn__button">
              <HiMenu />
            </button>
          </div>
        </div>

        <div className="header-container__connect-btn">
          <button className="header-container__connect-btn__button">
            connect wallet
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
