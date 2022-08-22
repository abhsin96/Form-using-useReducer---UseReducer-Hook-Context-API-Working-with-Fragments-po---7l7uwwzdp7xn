import React, { useEffect, useReducer } from "react";
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

  useEffect(() => {
    console.log(formState.errors);
  }, [formState.errors]);

  function handleFormSubmit(e) {
    e.preventDefault();
    const error = signUpFormValidation(formState.input);
    dispatch({ type: "ERROR", value: error });
  }

  return (
    <form id="reducer-form" action="get" onSubmit={handleFormSubmit}>
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        onChange={(e) => dispatch({ type: "NAME", value: e.target.value })}
      />
      {formState?.errors?.name && <div>{formState.errors.name}</div>}
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        onChange={(e) => dispatch({ type: "EMAIL", value: e.target.value })}
      />
      {formState?.errors?.email && <div>{formState.errors.email}</div>}

      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        onChange={(e) => dispatch({ type: "PASSWORD", value: e.target.value })}
      />
      {formState?.errors?.password && <div>{formState.errors.password}</div>}
      <label for="consent">Consent</label>
      <input
        type="checkbox"
        id="consent"
        onClick={(e) => dispatch({ type: "CONSENT", value: e.target.checked })}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export { FormUsingReducer };
