const signUpFormReducer = (state, action) => {
  switch (action.type) {
    case "NAME": {
      return { ...state, input: { ...state.input, name: action.value } };
    }
    case "EMAIL": {
      return { ...state, input: { ...state.input, email: action.value } };
    }
    case "PASSWORD": {
      return { ...state, input: { ...state.input, password: action.value } };
    }
    case "CONSENT": {
      return { ...state, input: { ...state.input, consent: action.value } };
    }
    case "ERROR": {
      return { ...state, errors: action.value };
    }
    default: {
      return state;
    }
  }
};

export { signUpFormReducer };
