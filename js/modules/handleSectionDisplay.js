const handleSectionDisplay = (sectionName, displayType) => {
  sectionName.style.display = `${displayType}`;
  return true;
};

export default handleSectionDisplay;