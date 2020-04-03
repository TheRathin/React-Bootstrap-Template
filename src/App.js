//import modules
import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import NavLinks from './components/NavLinks';

//A small piece of code to customize your theme
const theme = createMuiTheme({
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
      <MuiThemeProvider theme={theme}>
        <NavLinks/>
      </MuiThemeProvider>
    );
  }
}

export default App;
