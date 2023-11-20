import React from "react";

import ButtonComponent from "./ButtonComponent";
import Select from "./Select";
import Input from "./Input";

import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const schools = [
    "Hogwarts",
    "Beauxbatons Academy of Magic",
    "Castelobruxo",
    "Durmstrang Institute",
    "Ilvermorny",
    "Mahoutokoro School of Magic",
    "Uagadou School of Magic ",
  ];

  return (
    <form class="container w-50 d-flex flex-column justify-content-center mt-5">
      <h3 class="text-center mb-3">Register</h3>

      <Input type="text" id="firstName" placeholder="First name"></Input>
      <Input type="text" id="lastName" placeholder="Last name"></Input>
      <Input
        type="email"
        id="email"
        placeholder="Email address"
        helpText={"We'll never share your email with anyone else."}
      ></Input>
      <Input type="text" id="Username" placeholder="Username"></Input>
      <Input type="date" id="dateOfBirth" placeholder="Date of birth"></Input>
      <Select options={schools}></Select>
      <Input type="password" id="password" placeholder="Password"></Input>
      <Input
        type="password"
        id="confirmPassword"
        placeholder="Confirm password"
      ></Input>

      <div class="container w-100 d-flex flex-row justify-content-between p-0">
        <ButtonComponent
          innerText="Register"
          secondary={false}
        ></ButtonComponent>
        <ButtonComponent innerText="Login" secondary={true}></ButtonComponent>
      </div>
    </form>
  );
};

export default Register;
