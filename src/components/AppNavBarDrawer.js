import React from "react";
import List from "@mui/material/List";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsertChart from "@mui/icons-material/InsertChart";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  IconButton,
  Drawer,
  ListItemIcon,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
//Stylesheet Importing
import "../styles/AppNavBarDrawer.css";

const menuItemsList = [
  {
    link: "/",
    text: "Dashboard",
    iconType: <DashboardIcon />,
  },
  {
    link: "/graph",
    text: "Graph",
    iconType: <InsertChart />,
  },
];

//Listiem itself can be broken down to small pieces
const MenuItemList = ({ itemListData, closeDrawer }) => {
  return (
    <List>
      {itemListData.map((el) => (
        <ListItem button component={Link} to={el.link} onClick={closeDrawer}>
          <ListItemIcon>{el.iconType}</ListItemIcon>
          <ListItemText primary={el.text} />
        </ListItem>
      ))}
    </List>
  );
};

const AppNavBarDrawer = ({ drawerState, changeDrawerAction }) => {
  return (
    <Drawer className="drawer" variant="persistent" open={drawerState}>
      <div className="drawerHeader">
        <IconButton onClick={changeDrawerAction}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <MenuItemList
        itemListData={menuItemsList}
        closeDrawer={changeDrawerAction}
      />
    </Drawer>
  );
};

export default AppNavBarDrawer;
