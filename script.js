

function openForm() {
  document.getElementById("myFormlogin").style.display = "block";
  document.querySelector('.backdrop').style.display = "block";
}

function closeForm() {
  document.getElementById("myFormlogin").style.display = "none";
  document.querySelector('.backdrop').style.display = "none";
}



function togglePassword() {
  const passwordField = document.getElementById("searchtext2");
  const toggleButton = document.querySelector(".btn-outline-secondary i");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleButton.classList.remove("fa-eye-slash");
    toggleButton.classList.add("fa-eye");
  } else {
    passwordField.type = "password";
    toggleButton.classList.remove("fa-eye");
    toggleButton.classList.add("fa-eye-slash");
  }
}
