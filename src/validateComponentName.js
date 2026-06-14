const validateComponentName = (name) => {
  return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(name);
};

export default validateComponentName;