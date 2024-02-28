import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export class Kontak extends Component {
  state = {
    error: false,
  };

  continue = (e) => {
    e.preventDefault();
    if(this.props.values.kontak.trim() !== '') {
      this.props.nextStep()
    } else {
      this.setState({
        error: true
      })
      alert('Kontak tidak boleh kosong!');
    }
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    const { error } = this.state;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Masukkan Kontak Anda" />
            <TextField placeholder="Masukkan Kontak Anda" label="Kontak" onChange={handleChange("kontak")} defaultValue={values.kontak} margin="normal" fullWidth error={error} helperText={error ? 'Kontak harus diisi' : ''} />
            <p style={{ marginTop: "0px" }}>*contoh: 08123456789 (whatsapp) / akuseorang (ID Line)</p>

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

export default Kontak;
