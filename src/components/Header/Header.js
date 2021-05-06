import React from "react";
import LeftDrawer from "../LeftDrawer/LeftDrawer";
import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="webpagename-container">Poll It Out</div>
      <div className="leftdrawer-container">
        <LeftDrawer />
      </div>
    </div>
  );
}
