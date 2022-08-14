export function validateLoginData(email, password) {
  const passwordValidator = new RegExp("^[0-9a-zA-Z!@#$%^&*]{8,}$");
  const emailValidator = new RegExp("^[0-9a-zA-Z]+@+[a-zA-Z]+.+[a-zA-z]$");

  if (emailValidator.test(email)) {
    if (passwordValidator.test(password)) {
      return "Welcome to da jungle";
    } else {
      return "mohon masukkan password yg valid";
    }
  } else {
    return "tolong masukan email yang valid";
  }
}
