import React from "react";

import Button from "./Button";
import Select from "./Select";
import Input from "./Input";

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

      <Input type="text" id="firstName" placeholder="First name" />
      <Input type="text" id="lastName" placeholder="Last name" />
      <Input
        type="email"
        id="email"
        placeholder="Email address"
        helpText={"We'll never share your email with anyone else."}
      />
      <Input type="text" id="Username" placeholder="Username" />
      <Input type="date" id="dateOfBirth" placeholder="Date of birth" />
      <Select options={schools}></Select>
      <Input type="password" id="password" placeholder="Password" />
      <Input
        type="password"
        id="confirmPassword"
        placeholder="Confirm password"
      />

      <div class="container w-100 d-flex flex-row justify-content-between p-0">
        <Button label="Register" />
        <Button label="Login" secondary />
      </div>
    </form>
  );
};

export default Register;
