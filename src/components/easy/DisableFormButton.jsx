import React, { useState } from "react";

const MultiInputForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");

  // field-level validation (derived)
  const isNameValid = name.length >= 3;
  const isPasswordValid = password.length >= 5;
  const isCompanyValid = company.length >= 4;
  const isEmailValid = email.includes("@");

  // form-level validation (simple function)
  const isFormValid = () => {
    return (
      isNameValid &&
      isPasswordValid &&
      isCompanyValid &&
      isEmailValid
    );
  };

  const handleSubmit = (e) => {
    console.log("dd")
    e.preventDefault();

    if (!isFormValid()) return;

    console.log("Form submitted:", {
      name,
      password,
      company,
      email
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit" disabled={!isFormValid()}>
        Submit
      </button>
    </form>
  );
};

export default MultiInputForm;
