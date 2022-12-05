const handleActiveLink = (activeLink, ...otherProps) => {
  const [linkTwo, linkThree] = otherProps;
  document.querySelector(`[${activeLink}]`).classList.add('nav--active');
  document.querySelector(`[${linkTwo}]`).classList.remove('nav--active');
  document.querySelector(`[${linkThree}]`).classList.remove('nav--active');
  return true;
};

export default handleActiveLink;