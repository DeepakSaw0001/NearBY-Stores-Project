

const showRegisterForm = () => {
  document.querySelector("#login-form").style.display = "none";
  document.querySelector("#register-form").style.display = "block";
};

const showLoginForm = () => {
  document.querySelector("#register-form").style.display = "none";
  document.querySelector("#login-form").style.display = "block";
};
