import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export class Umur extends Component {
  state = {
    error: false
  }

  continue = (e) => {
    e.preventDefault();
    if(this.props.values.umur.trim() !== '') {
      this.props.nextStep()
    } else {
      this.setState({
        error: true
      })
      alert('Umur tidak boleh kosong!');
    }
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    const { error } = this.state
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Masukkan Umur Anda" />
            <TextField 
              placeholder="Masukkan Umur Anda" 
              label="Umur" 
              onChange={handleChange("umur")} 
              defaultValue={values.umur} 
              margin="normal" 
              fullWidth 
              error={error} 
              helperText={error ? 'Umur harus diisi' : ''} 
            />
            <br />

            <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>

            <Button color="primary" variant="contained" onClick={this.continue}>
              Continue
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Umur;
