import validate from 'validate.js';

validate.validators.caseInsensitiveInclusion = (value, options) => {
  const { within, message } = options;
  if (value) {
    const selectedState = within.find(option => option.toLowerCase() === value.toLowerCase());
    return !selectedState ? message : null;
  }
};

export const signUp = {
  name: {
    presence: true,
  },
  email: {
    presence: true,
    email: true
  },
  password: {
    presence: true,     
    length: {
      minimum: 8
    }
  },
  password_confirmation: {
    presence: true,
    equality: { attribute: 'password' }
  },
  gender: {
    presence: {
      message: '^You must select a gender'
    },
    inclusion: {
      within: {0:'Male', 1:'Female'},
      message: '^You must select a valid gender'
    }
  }
};

export const signIn = {
  email: {
    presence: true,
    email: true
  },
  password: {
    presence: true
  }
};

export const createTarget = {
  areaLenght: {
    presence: true,
  },
  targetTitle: {
    presence: true,
  },
  topic: {
    presence: {
      message: '^You must select a topic'
    }
  }
};

export const validations = constraints =>
  data => validate(data.toJS(), constraints) || {};
