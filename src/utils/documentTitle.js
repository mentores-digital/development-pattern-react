const defaultName = process.env.REACT_APP_NAME || 'Mentores 🙂';
export default name => {
  document.title = `${defaultName}| ${name}`;
};
