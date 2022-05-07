import { Apps, Assignment, Book, Create, Drafts, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from "@material-ui/icons";
import React from "react";
import SidebarOption from "./SidebarOption";
import "./css/MainSidebar.css";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

const MainSidebar = () => {

  const history = useHistory()
  const {currentUser} = useAuth()

  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <div className="sidebarInfo">
          <h2>Techto</h2>
          <h3>
            <FiberManualRecord />
            {currentUser?currentUser.email : "GUEST"}
          </h3>
        </div>
        <Create/>
      </div>
      <SidebarOption Icon={Inbox} title="Dashboard" url="/landing"/>
      <SidebarOption Icon={PeopleAlt} title="Team" url="/teams"/>
      <SidebarOption Icon={Drafts} title="Notifications" url="/messages"/>
      <SidebarOption Icon={FileCopy} title="File Explorer" url="/files"/>
      <SidebarOption Icon={Book} title="Projects" url="/projects"/>
      <SidebarOption Icon={Assignment} title="Tasks" url="/projects"/>
    </div>
  );
};

export default MainSidebar;
