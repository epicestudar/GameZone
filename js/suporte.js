let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

function Contato() {
    let email = document.getElementById("email").value;
    let nome = document.getElementById("nome").value;
  
    if (nome == 0) {
        alert("Digite o seu nome")
    } else if (email == 0) {
        alert("Informe o seu email")
    } 
    else {
        alert("Mensagem enviada com sucesso!")
        window.location.href = "home.html";
    }
  }