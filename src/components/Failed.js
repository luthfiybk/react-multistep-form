import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

export class Failed extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Failed" />
            <h1 style={{ textAlign: 'center'}}>Poor me &#128549;</h1>
            <p style={{ marginTop: '0px', textAlign: 'center' }}>Thank you yaa udah ngeluangin waktunya buat ngisi formnya wkwkw</p>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Failed;
