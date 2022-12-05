const handleTitleChange = (selector, text) => {
  selector.innerText = `${text}`;
  return true;
};

export default handleTitleChange;