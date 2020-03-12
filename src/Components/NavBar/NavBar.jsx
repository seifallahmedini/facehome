import React from "react";
import logo from "../../Photos/facebook-white-logo.png";
import "./NavBar.less";

import SearchComponent from "../SearchComponent/SearchComponent";
import NavBarMenu from "../NavBarMenu/NavBarMenu";

// importing Antd components
import { Layout, Input, Menu } from "antd";

const { Header } = Layout;
const { Search } = Input;

// Style of this component
const headerStyle = {
  height: "42px",
  // "border-top": "1.2px solid #29487d",
  borderBottom: "1.2px solid #29487d",
  position: "fixed",
  zIndex: 1,
  width: "100%"
};

const logoStyle = {
  marginBottom: "25px",
  marginLeft: "16px",
  height: "24px",
  width: "24px"
};

const searchStyle = {
  width: 444,
  position: "absolute",
  marginTop: "8px",
  marginLeft: "6px",
  padding: "1px 11px",
  color: "#e9ebee"
};

const searchContainerStyle = {
  display: "inline",
  marginBottom: "20px"
};

export default function NavBar() {
  return (
    <Header className="header" style={headerStyle}>
      <img src={logo} style={logoStyle} alt="" />

      <div style={searchContainerStyle}>
        <Search
          placeholder="Recherche"
          onSearch={value => console.log(value)}
          style={searchStyle}
        />
      </div>
      <NavBarMenu />
    </Header>
  );
}
