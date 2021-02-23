import React, { useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { IconButton, Typography, AppBar } from "@material-ui/core";

import AppNavBarDrawer from "./AppNavBarDrawer";

const styles = {
  root: {
    flexGrow: 1,
  },
  barRight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },
  menuButton: {
    display: "flex",
  },
};

const AppNavBar = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const changeDrawerState = () => {
     setOpenDrawer(!openDrawer)
    }
    return (
      <div style={styles.root}>
        <AppBar position="static" color="secondary">
          <Toolbar style={styles.bar}>
            <IconButton onClick={changeDrawerState}>
              <MenuIcon color="primary" aria-label="Menu" />
            </IconButton>
            <Typography variant="title" color="inherit" className={styles.root}>
              Title
            </Typography>
            <div style={styles.barRight}>
              <IconButton style={styles.menuButton} color="primary">
                <AccountCircle />
              </IconButton>
              <Typography color="primary">By Rathin Sharma</Typography>
            </div>
          </Toolbar>
        </AppBar>
        <AppNavBarDrawer
          drawerState={openDrawer}
          changeDrawerAction={changeDrawerState}
        />
      </div>
    );
}

export default AppNavBar;
