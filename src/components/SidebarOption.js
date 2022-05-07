import React from "react";
import { Link } from "react-router-dom";
import "./css/SidebarOption.css";

const SidebarOption = ({ Icon, title, url}) => {
 
  return (
    <div
      className="sidebarOption"
    >
      {Icon && <Icon className="sidebarOptionIcon" />}
      {Icon ? (
        <h3><Link className="sidebarOptionLink" to={url}>{title}</Link></h3>
      ) : (
        <h3 className="sidebarOptionProject">
          <span className="sidebarOptionHash">#</span> {title}
        </h3>
      )}
    </div>
  );
};

export default SidebarOption;
