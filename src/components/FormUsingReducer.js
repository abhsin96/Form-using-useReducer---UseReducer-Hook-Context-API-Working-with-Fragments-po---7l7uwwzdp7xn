import React, { useReducer } from "react";
import { signUpFormReducer } from "../reducers/signUpFormReducer";
import { signUpFormValidation } from "../utils/signupformvalidation";
const initialFormState = {
  input: {
    name: "",
    email: "",
    password: "",
    consent: false,
  },
  errors: {
    name: "",
    email: "",
    password: "",
  },
};
const FormUsingReducer = () => {
  const [formState, dispatch] = useReducer(signUpFormReducer, initialFormState);

  return (
    <form id="reducer-form">
      <label for="name">Name</label>
      <input type="text" id="name" required />
      <label for="email">Email</label>
      <input type="email" id="email" required />
      <label for="password">Password</label>
      <input type="password" id="password" required />
      <label for="consent">Consent</label>
      <input type="checkbox" id="consent" />
      <button type="submit">Submit</button>
    </form>
  );
};

export { FormUsingReducer };
