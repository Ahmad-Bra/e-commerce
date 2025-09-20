export const userVlidation = {
  email: {
    isString: {
      errorMessage: "value must be a string",
    },
    notEmpty: {
      errorMessage: "value must be a string",
    },
    isEmail: {
      errorMessage: "value must be an email form",
    },
  },
  password: {
    isLength: {
      options: {
        min: 5,
        max: 10,
      },
      errorMessage: "value must be a string between 5-10",
    },
    isString: {
      errorMessage: "value must be a string",
    },
    notEmpty: {
      errorMessage: "value must be a string",
    },
  },
  name: {
    isLength: {
      options: {
        min: 3,
        max: 15,
      },
      errorMessage: "value must be a string between 5-10",
    },
    isString: {
      errorMessage: "value must be a string",
    },
  },
};
