import validate from 'validate.js';

validate.validators.caseInsensitiveInclusion = (value, options) => {
    const { within, message } = options;
    if (value) {
      const selectedState = within.find(option => option.toLowerCase() === value.toLowerCase());
      return !selectedState ? message : null;
    }
  };

export const signUp = {
    userName: {
      presence: true
    },
    email: {
      presence: true,
      email: true
    },
    password: {
      presence: true,
      length: { minimum: 6 }
    },
    passwordConfirmation: {
      presence: true,
      equality: { attribute: 'password' }
    },
    gender: {
      presence: true
    }
  };

  export const validations = constraints =>
  data => validate(data.toJS(), constraints) || {};