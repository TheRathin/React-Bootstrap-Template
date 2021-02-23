import React from "react";
import List from "@material-ui/core/List";
import DashboardIcon from "@material-ui/icons/Dashboard";
import InsertChart from "@material-ui/icons/InsertChart";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import {
  IconButton,
  Drawer,
  ListItemIcon,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
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
