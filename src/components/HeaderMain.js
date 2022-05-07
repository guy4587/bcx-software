import { Avatar} from "@material-ui/core";
import { AccessTime, HelpOutline, Search } from "@material-ui/icons";
import React from "react";
import "./css/HeaderMain.css"

const HeaderMain = () => {

  return (
    <div className="headerMain">
      <div className="headerLeft">
        <Avatar className="headerAvatar" alt="Techto User" src="" />
        <AccessTime />
      </div>
      <div className="headerSearch">
        <Search />
        <input placeholder="TECHTO" type="text" />
      </div>
      <div className="headerRight">
        <HelpOutline />
      </div>
    </div>
  );
};

export default HeaderMain;
