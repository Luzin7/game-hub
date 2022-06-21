function getPassword() {
  const password = localStorage.getItem("userPassword");

  return password;
}

export default getPassword;
