function isLoginValid (login) {
  // Write code under this line
  const loginLength = login.length;
  if (loginLength >= 4 && loginLength <=16) {
    return true;
  }
  return false;
}
// console.log(isLoginValid ('sdjfjfssdasfasfasfasfasfasfasfasfas'));
