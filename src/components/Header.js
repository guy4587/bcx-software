import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Collapse, IconButton, Toolbar } from "@material-ui/core";
import { ExpandMore, Sort } from "@material-ui/icons";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  appbar: {
    background: "none",
    fontFamily: "Nunito",
    position:'absolute'
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  titleColor: {
    color: "#1e2f97",
  },
  title: {
    color: "#fff",
    fontFamily: "Nunito",
  },
  container: {
    textAlign: "center",
    fontSize: "1.5rem",
  },
  goDown: {
    color: "#1e2f97",
    fontSize: "3rem ",
  },
}));
function Header() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.root} id="header">
     

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome To <br /> TECHTO 
            <span className={classes.titleColor}> PROJECT MANAGER</span>{" "}
          </h1>
          <Scroll to="options" smooth={true}>
            <IconButton>
              <ExpandMore className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}

export default Header;
