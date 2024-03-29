import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <h1 style={{ textAlign: 'center' }}>YEY, Thank you yaa</h1>
            <p style={{ marginTop: '0px', textAlign: 'center' }}>I will contact you ASAP!!! &#128521;</p>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
