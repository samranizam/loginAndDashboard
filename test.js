let txtuser = document.querySelector(".txtuser");
let txtpass = document.querySelector(".txtpass");
let submit = document.querySelector(".primary");
let mess = document.querySelector(".message");
localStorage.setItem("email", "eve.holt@reqres.in");
localStorage.setItem("password", "cityslicka");
let user = localStorage.getItem("email");
let pass = localStorage.getItem("password");
console.log(user);
console.log(pass);
console.log(txtuser.value);
submit.addEventListener("click", () => {
  if (user == txtuser.value && pass == txtpass.value) {
    mess.innerHTML = "Login Successful";
    window.location.href = "dashboard.html";
  } else {
    mess.innerHTML = "Username or password is invalid";
  }
});
