import React from "react";
import "./styles.scss";

export default function Directory(props) {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: "url(/assets/men.jpg)",
          }}
        >
          <a>Shop Mens</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: "url(/assets/women.jpg)",
          }}
        >
          <a>Shop Womens</a>
        </div>
      </div>
    </div>
  );
}
