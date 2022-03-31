import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Toolbar from '@mui/material/Toolbar'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { IconButton, Typography, AppBar } from '@mui/material'

import AppNavBarDrawer from './AppNavBarDrawer'
import { openSideMenu } from '../redux/actions/navBarActions'

const styles = {
  root: {
    flexGrow: 1
  },
  barRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%'
  },
  menuButton: {
    display: 'flex'
  }
}

const AppNavBar = () => {
  const { isDarkModeOn } = useSelector((state) => state.themeReducers)
  const { isSideMenuOpen } = useSelector((state) => state.navBarReducers)
  const dispatch = useDispatch()

  return (
    <div style={styles.root}>
      <AppBar position='static' color='secondary'>
        <Toolbar style={styles.bar}>
          <IconButton onClick={() => dispatch(openSideMenu())}>
            <MenuIcon color='primary' aria-label='Menu' />
          </IconButton>
          <Typography variant='title' color='inherit' className={styles.root}>
            { `Title ${isDarkModeOn}`}
          </Typography>
          <div style={styles.barRight}>
            <IconButton style={styles.menuButton} color='primary'>
              <AccountCircle />
            </IconButton>
            <Typography color='primary'>By Rathin Sharma</Typography>
          </div>
        </Toolbar>
      </AppBar>
      <AppNavBarDrawer
        drawerState={isSideMenuOpen}
        changeDrawerAction={() => dispatch(openSideMenu())}
      />
    </div>
  )
}

export default AppNavBar
