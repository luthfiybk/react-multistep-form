import React, { Component } from "react";
import NamaLengkap from "./NamaLengkap";
import Umur from "./Umur";
import Confirm from "./Confirm";
import Success from "./Success";
import Welcome from "./Welcome";
import Kontak from "./Kontak";
import Failed from "./Failed";

export class UserForm extends Component {
  state = {
    step: 0,
    nama_lengkap: "",
    umur: "",
    kontak: "",
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  targetStep = (target) => {
    this.setState({
      step: target,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { nama_lengkap, umur, kontak } = this.state;
    const values = { nama_lengkap, umur, kontak };

    switch (step) {
      case 0:
        return <Welcome nextStep={this.nextStep} />;
      case 1:
        return <NamaLengkap nextStep={this.nextStep} handleChange={this.handleChange} values={values} />;
      case 2:
        return <Umur nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />;
      case 3:
        return <Kontak nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />;
      case 4:
        return <Confirm nextStep={this.nextStep} targetStep={this.targetStep} values={values} />;
      case 5:
        return <Success />;
      case 6:
        return <Failed />;
      default:
        console.log("This is a multi-step form built with React.");
    }
  }
}

export default UserForm;
