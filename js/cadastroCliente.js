let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

function Cadastro() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("password").value;
    let nome = document.getElementById("nome").value;
    let data = document.getElementById("dataNascimento").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
  
    if (nome == 0) {
        alert("Digite o seu nome")
    } else if (data == 0) {
        alert("Informe a data")
    } 
    else if (email == 0) {
        alert("Digite o seu nome")
    } 
    else if (senha == 0) {
        alert("Informe a senha")
    } 
    else if (cidade == 0) {
        alert("Digite o nome da cidade")
    } 
    else if (estado == 0) {
        alert("Digite o nome do Estado")
    } 
    else {
        alert("Cadastro efetuado!")
        window.location.href = "home.html";
    }
  }