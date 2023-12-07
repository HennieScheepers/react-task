import React, { useState } from "react";

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

  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
    school: "",
  });

  const handleChange = (newValue) => {
    setRegisterData(newValue);
  };

  const isMatchingPasswords =
    registerData.password === registerData.confirmPassword
      ? ""
      : "Passwords should match";

  return (
    <form class="container w-50 d-flex flex-column justify-content-center mt-5">
      <h3 class="text-center mb-3">Register</h3>
      <Input
        type="text"
        id="firstName"
        placeholder="First name"
        value={registerData.firstName}
        onChange={handleChange}
      />
      <Input
        type="text"
        id="lastName"
        placeholder="Last name"
        value={registerData.lastName}
        onChange={handleChange}
      />
      <Input
        type="email"
        id="email"
        placeholder="Email address"
        helpText={"We'll never share your email with anyone else."}
        value={registerData.email}
        onChange={handleChange}
      />
      <Input
        type="text"
        id="username"
        placeholder="Username"
        value={registerData.username}
        onChange={handleChange}
      />
      <Input
        type="date"
        id="dateOfBirth"
        placeholder="Date of birth"
        value={registerData.datOfBirth}
        onChange={handleChange}
      />
      <Select
        options={schools}
        name="school"
        value={registerData.school}
        onChange={handleChange}
        placeholder={"Select schools..."}
      ></Select>
      <Input
        type="password"
        id="password"
        placeholder="Password"
        value={registerData.password}
        onChange={handleChange}
      />
      <Input
        type="password"
        id="confirmPassword"
        placeholder="Confirm password"
        value={registerData.confirmPassword}
        warningText={isMatchingPasswords}
        onChange={handleChange}
      />
      <div class="container w-100 d-flex flex-row justify-content-between p-0">
        <Button label="Register" />
        <Button label="Login" secondary />
      </div>
    </form>
  );
};

export default Register;
