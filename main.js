const togglePassword = (isShow) => {
  document
    .querySelectorAll(".passport-number")
    .forEach((el) => (el.style.display = isShow ? "block" : "none"));
};