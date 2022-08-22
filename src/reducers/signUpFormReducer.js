const signUpFormReducer = (state, action) => {
  switch (action.type) {
    case "NAME": {
      input: {
        name: action.value;
      }
    }
    case "EMAIL": {
      input: {
        email: action.value;
      }
    }
    case "PASSWORD": {
      input: {
        password: action.value;
      }
    }
    case "CONSENT": {
      input: {
        consent: action.value;
      }
    }
    default: {
      return state;
    }
  }
};

export { signUpFormReducer };
