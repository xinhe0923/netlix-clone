import React, { useEffect, useState } from "react";
import "./nav.css";

export const Nav = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
        alt="netflix logo"
        className="nav__logo"
      />
      <img
        src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
        alt="avatar"
        className="nav__avatar"
      />
    </div>
  );
};
