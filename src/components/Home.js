import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import MemberLogin from "./MemberLogin";
import ManagementLogin from "./ManagementLogin";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    //backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/home_bg.jpg"})`,
    background: ' #8b97eb',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Sidebar />
      <div className="options" style={{ alignContent: "center" }}>
        <Link to="/login_member">
          <MemberLogin />
        </Link>
        <Link to="/login_management">
          <ManagementLogin />
        </Link>
      </div>
    </div>
  );
}

export default Home;
