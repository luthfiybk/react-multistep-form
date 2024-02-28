import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";

export class Confirm extends Component {
  continue = async (e) => {
    e.preventDefault();
    const formData = {
      nama_lengkap: this.props.values.nama_lengkap,
      umur: this.props.values.umur,
      kontak: this.props.values.kontak,
    };
    console.log(formData);
    try {
      const response  = await axios.post('be-form-production.up.railway.app/api/form', formData);
      if(response.status === 201) {
        this.props.nextStep();
      }
    } catch (error) {
      alert('Duh ada error deh kayaknya, coba cek lagi ya!')
    }
    this.props.nextStep();
  };

  targetStep = (e) => {
    e.preventDefault();
    this.props.targetStep(6);
  };

  render() {
    const {
      values: { nama_lengkap, umur, kontak },
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Confirm User Data" />
            <p>Sebenernya ini bukan survei, tapi modus aja biar dapet kontak soalnya kalo lewat DM kayaknya jarang dibales ya wkwkw</p>
            <p>Boleh ga ya minta kontaknya? hehe :)</p>
            <br />

            <Button color="secondary" variant="contained" onClick={this.targetStep}>
              GAMAU &#128544;
            </Button>

            <Button color="primary" variant="contained" onClick={this.continue}>
              MAU &#128517;
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
