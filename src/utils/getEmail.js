function getEmail() {
  const email = localStorage.getItem("userEmail");

  return email;
}

export default getEmail;
