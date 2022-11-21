const formulario = document.getElementById("form");
const usuario = document.getElementById("usuario");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usuarioValue = usuario.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usuarioValue === "") {
    setErrorFor(usuario, "Obligatorio");
  } else if (!isEmail(usuarioValue)) {
    setErrorFor(usuario, "Correo no válido");
  } else {
    setSuccessFor(usuario);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Obligatorio");
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Obligatorio");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "No coinciden");
  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "box error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "box success";
}

function isEmail(usuario) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    usuario
  );
}
