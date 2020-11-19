import {
  DateRange,
  Home,
  Message,
  Notifications,
  Person,
  PowerOff,
  Settings,
} from "@material-ui/icons";
import React from "react";
import "../Styles/Menu.css";
function Menu() {
  return (
    <div className="menu">
      <div className="menu__profile">
        <img
          src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
          alt="profile_picture"
        />
        <p>Muhammed Navfal</p>
      </div>
      <div className="menu__options">
        <div className="menu__option">
          <Home /> HOME
        </div>
        <div className="menu__option selected">
          <Message /> CHAT
        </div>
        <div className="menu__option">
          <Person /> CONTACT
        </div>
        <div className="menu__option">
          <Notifications /> NOTIFICATIONS
        </div>
        <div className="menu__option">
          <DateRange /> CALENDAR
        </div>
        <div className="menu__option">
          <Settings /> SETTINGS
        </div>
        <div className="menu__option bottom">
          <PowerOff /> LOG OUT
        </div>
      </div>
    </div>
  );
}

export default Menu;
