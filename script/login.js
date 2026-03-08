const btnSubmit = () => {
  const inputUserName = document.getElementById("userName").value;
  const inputPassword = document.getElementById("password").value;

  if (inputUserName === "admin" && inputPassword === "admin123") {
    window.location.href = "./login_pages/home.html";
  } else {
    alert("Wrong Credentials");
  }
};
