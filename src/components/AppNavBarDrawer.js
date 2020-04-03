import React from 'react';
import List from '@material-ui/core/List';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InsertChart from '@material-ui/icons/InsertChart';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { IconButton ,Drawer, ListItemIcon,ListItem, ListItemText, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
//Stylesheet Importing
import '../styles/AppNavBarDrawer.css';


const menuItemsList = [
    {
        link: '/',
        text: 'Dashboard',
        iconType: <DashboardIcon/>
    },
    {
        link: '/graph',
        text: 'Graph',
        iconType: <InsertChart/>
    }
]

//Listiem itself can be broken down to small pieces
const MenuItemList = (props) => {
    return (
        <List>
            {props.data.map(el => 
                <ListItem button component={Link} to={el.link}>
                    <ListItemIcon>
                        {el.iconType}
                    </ListItemIcon>
                    <ListItemText primary={el.text} />
                </ListItem>)}
        </List>
    )
}


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
                <MenuItemList data={menuItemsList}/>
            </Drawer>
        );
}

export default AppNavBarDrawer;