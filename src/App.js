//import modules
import React, { Component } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavLinks from './components/NavLinks';

//A small piece of code to customize your theme
const theme = createTheme({
  palette:{
    primary: {
      light: '#FFFFFF',
      main: '#FFFFFF',
      dark: '#2C2F4B',
      contrastText: '#fff'
    },
    secondary: {
      main: '#4527A0',
    }
  }
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <NavLinks/>
      </ThemeProvider>
    );
  }
}

export default App;
