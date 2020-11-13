'use strict';

function isLoginValid(login) {
  // Write code under this line
  const loginLength = login.length;
  if (loginLength >= 4 && loginLength <=16) {
    return true;
  }
  return false;
}
// console.log(isLoginValid ('sdjfjfssdasfasfasfasfasfasfasfasfas'));

function isLoginUnique  (allLogins, login) {
  'use strict';
  // Write code under this line
     if (allLogins.includes('login')) {
  return true;
  }
  return false;
}


const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
