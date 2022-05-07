import React, { useState } from "react";
import HeaderMain from "./HeaderMain";
import MainSidebar from "./MainSidebar";
import "./css/Main.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Alert } from "@mui/material";
import BoardView from "./BoardView";
import ProjectView from "./ProjectView";

const LandingPage = () => {
  const history = useHistory();
  const { logOut } = useAuth();
  const [error, setError] = useState("");

  async function handleLogout() {
    setError("");

    try {
      await logOut();
      history.push("/login_member");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div>
      <HeaderMain />
      <div className="appBody">
        <MainSidebar />
        {error && <Alert severity="error">{error}</Alert>}
        {/*<Button style={{backgroundColor:"#5AFF3D", height: "25px"}}
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleLogout}
  >LOGOUT</Button>*/}

        <ProjectView />
      </div>
    </div>
  );
};

export default LandingPage;
