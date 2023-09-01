function isStrongPassword(pwd) {
  let pwdLength = pwd.length;
  let pwdContains = pwd.includes("password") ? "Yes" : "No";
  let pwdUpperCase = /[A-Z]/.test(pwd);
  // console.log(pwdLength);
  // console.log(pwdContains);
  // console.log(pwdUpperCase);
  if (pwdLength >= 8 && pwdContains == "No" && pwdUpperCase == true) {
    return true;
  } else {
    return false;
  }
}
isStrongPassword("passwordQwerty");
