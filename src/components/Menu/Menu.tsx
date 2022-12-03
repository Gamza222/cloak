import React, { FC } from "react";
import "./Menu.scss";

interface MenuProps {
  menuOpen: boolean;
  buttons: { name: string; href: string }[];
}

const Menu: FC<MenuProps> = ({ menuOpen, buttons }) => {
  return (
    <>
      <div className={`menu-container ${menuOpen ? "menu-open" : ""}`}>
        {buttons.map((button, key) => {
          return (
            <a href={button.href} key={key} className="menu-container__button">
              {button.name}
            </a>
          );
        })}
      </div>
      <div className={`menu-container-sm ${menuOpen ? "menu-open" : ""}`}>
        <a href="" className="menu-container-sm__button">
          connect wallet
        </a>
        {buttons.map((button, key) => {
          return (
            <a
              href={button.href}
              key={key}
              className="menu-container-sm__button"
            >
              {button.name}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
