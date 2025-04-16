const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

document.getElementById("cadastro").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Cadastro realizado com sucesso!");
  window.location.href = "Home/Home.html";
});

document.getElementById("entrar").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Login realizado com sucesso!");
  window.location.href = "Home/Home.html";
});
