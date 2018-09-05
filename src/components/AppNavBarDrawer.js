import React from 'react';
import List from '@material-ui/core/List';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InsertChart from '@material-ui/icons/InsertChart';
import Assignment from '@material-ui/icons/Assignment';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { IconButton ,Drawer, ListItemIcon,ListItem, ListItemText, Divider } from '@material-ui/core';
//Stylesheet Importing
import '../styles/AppNavBarDrawer.css';

//Listiem itself can be broken down to small pieces
const DashBoardOption = (
        <ListItem button>
            <ListItemIcon >
                <DashboardIcon/>
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
)

const GraphOption = (
    <ListItem button>
        <ListItemIcon>
            <InsertChart/>
        </ListItemIcon>
        <ListItemText primary="Graph"/>
    </ListItem>
)

const QuaterlyConsumption = (
    <ListItem button>
        <ListItemIcon>
            <Assignment/>
        </ListItemIcon>
        <ListItemText primary="Quaterly Consumption"/>
    </ListItem>
)


const AppNavBarDrawer = (props) => {
        return (
            <Drawer 
                className="drawer"
                variant="persistent"
                open={props.drawerState}
            >
                <div className="drawerHeader">
                    <IconButton onClick={props.changeDrawerAction}>
                    <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    {DashBoardOption}
                    {GraphOption}
                    {QuaterlyConsumption}
                </List>
            </Drawer>
        );
}

export default AppNavBarDrawer;