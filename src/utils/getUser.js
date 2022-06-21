function getUser() {
  const user = localStorage.getItem("userName");

  return user;
}

export default getUser;
