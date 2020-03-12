import React from "react";

import "./NavBarMenu.less";

import { Button } from "antd";

import invitation from "../../Photos/menuIcon/invitation.png";
import msg from "../../Photos/menuIcon/msg.png";
import notification from "../../Photos/menuIcon/notification.png";
import plus from "../../Photos/menuIcon/plus.png";
import profile from "../../Photos/profilPhoto/profile.jpg";

const headerMenuStyle = {
  display: "inline-flex",
  float: "right",
  marginRight: "10%"
};

const menuElementStyle = {
  display: "inline-flex",
  marginTop: "3px",
  paddingLeft: "16px"
};

const menuButtonStyle = {
  display: "inline-flex",
  marginTop: "4px",
  paddingLeft: "4px"
};

const imgStyle = {
  marginLeft: "2px"
};

export default function NavBarMenu() {
  return (
    <div style={headerMenuStyle}>
      <div className="navbar-button-menu" style={menuButtonStyle}>
        <Button className="menu-profil">
          <img className="profile-photo" src={profile} alt="" />
          Seif
        </Button>
      </div>
      <div className="navbar-button-menu" style={menuButtonStyle}>
        <Button className="menu-button">Accueil</Button>
      </div>
      <div className="navbar-button-menu" style={menuButtonStyle}>
        <Button className="menu-button">Créer</Button>
      </div>
      <div className="navbar-menu" style={menuElementStyle}>
        <img style={imgStyle} src={invitation} alt="" />
        <img style={imgStyle} src={msg} alt="" />
        <img style={imgStyle} src={notification} alt="" />
      </div>
      <div style={menuElementStyle}>
        <img style={imgStyle} src={plus} alt="" />
      </div>
    </div>
  );
}
