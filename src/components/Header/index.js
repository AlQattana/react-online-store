import React from "react";
import "./styles.scss";

export default function Header(props) {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img src="/assets/logo.png" alt="maha logo" />
        </div>
      </div>
    </header>
  );
}
