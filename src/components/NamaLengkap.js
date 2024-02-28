import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class NamaLengkap extends Component {
  state = {
    error: false
  }

  continue = e => {
    e.preventDefault();
    if(this.props.values.nama_lengkap.trim() !== '') {
      this.props.nextStep();
    } else {
      this.setState({
        error: true
      })
      alert('Nama lengkap tidak boleh kosong!');
    }
  };

  render() {
    const { values, handleChange } = this.props;
    const { error } = this.state
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Masukkan Nama Lengkap Anda" />
            <TextField
              placeholder="Masukkan Nama Lengkap Anda"
              label="Nama Lengkap"
              onChange={handleChange('nama_lengkap')}
              defaultValue={values.nama_lengkap}
              margin="normal"
              fullWidth
              error={error}
              helperText={error ? 'Nama Lengkap harus diisi' : ''}
            />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default NamaLengkap;
